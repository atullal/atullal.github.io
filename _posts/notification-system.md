---
title: "Scalable Notification System Microservice"
excerpt: "This article explores a scalable NestJS-based notification system microservice utilizing Redis pub/sub and authenticated websockets. It highlights horizontal scalability, key components like RedisPropagator, Socket states, and gateways. This robust solution efficiently manages concurrent connections and delivers real-time notifications securely to users."
coverImage: "/assets/blog/notification-system/cover.png"
date: "2021-10-03T05:35:07.322Z"
categories: ["Distributed Systems", "Microservices"]
author:
  name: Atul Lal
  picture: "/assets/blog/authors/atullal.jpeg"
ogImage:
  url: "/assets/blog/notification-system/cover.png"
---

Designing a scalable notification system is crucial for applications that serve a large number of users. If your app feels "dead" because push notifications are delayed, users will churn.

<div class="doodle">
  *The Notification Dilemma:* How do you send 100,000 live updates to 100,000 distinct users over web sockets without crashing the single Node process? Enter the magic of Pub/Sub! 🚀
</div>

<span class="highlighter">Microservices architecture</span> has gained massive popularity for its ability to break down complex applications into smaller, more manageable, independently scalable components. In this article, we'll explore a highly scalable notification system microservice built using <a href="https://nestjs.com/" target="_blank" class="tooltip">NestJS<span class="tooltip-content">A progressive Node.js framework for building efficient, reliable and scalable server-side applications. Uses TypeScript heavily!</span></a>, a Redis pub/sub model, and authenticated WebSockets.

We'll discuss how this solution provides true horizontal scalability and dive into key internal components such as the `RedisPropagator`, Socket states, and custom gateways.

## Redis Pub/Sub Model

A critical aspect of a scalable notification system is the ability to handle numerous concurrent long-lived connections. If a user connects to Node Instance A, but the event that triggers their notification happens on Node Instance B, how does Instance A know to push the socket message?

<a href="https://redis.io/docs/interact/pubsub/" target="_blank" class="tooltip">Redis<span class="tooltip-content">An open-source, in-memory data structure store, used as a database, cache, and message broker.</span></a> solves this. It provides a highly optimized publish/subscribe (pub/sub) messaging pattern that enables efficient communication between different instances.

In this NestJS implementation, the Redis pub/sub model serves as the backbone for the real-time notification system. When Instance B generates an event, it publishes it to a Redis channel. Instance A (and all other instances) subscribes to that channel, receives the message, checks its local memory to see if the target user is connected to it, and if so, pushes the socket event.

<div class="post-it">
  <strong>Performance Note:</strong> Redis Pub/Sub is incredibly fast because it's fire-and-forget. However, this means there is no delivery guarantee natively. You must pair it with a persistent database if guaranteed delivery is a strict requirement!
</div>

## Authenticated WebSockets

To ensure secure communication between the server and clients, the system employs authenticated WebSockets. By implementing strict authentication at the socket connection phase, the system can verify the identity of connected clients and prevent unauthorized sniffing of notification streams.

In this implementation, the websocket authentication process is built on top of the `WebSocketGateway` decorator in NestJS. It intercepts the initial upgrade request to exchange <a href="https://jwt.io/" target="_blank" class="tooltip">JSON Web Tokens (JWTs)<span class="tooltip-content">An open standard that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.</span></a>. If the JWT is invalid or expired, the socket connection is immediately severed with a `401 Unauthorized` close code.

## Horizontal Scalability

One of the main benefits of this notification system is its true horizontal scalability. As the number of concurrent users increases beyond the limits of a single Node process (usually around 10k-30k concurrent sockets depending on memory), the system can simply spawn more instances.

Because we decoupled the notification trigger logic from the actual socket delivery layer using Redis, the system is completely stateless. You can spin up or tear down WebSocket gateway pods in Kubernetes dynamically based on CPU/Memory load.

## The Core Component: `RedisPropagator`

The `RedisPropagator` is a crucial custom component in this implementation. It acts as the orchestrator responsible for managing the bidirectional communication between the websocket clients and the Redis pub/sub system.

It handles the distribution of messages. For example, if an event requires a broadcast to *all* users in a specific "room" or "organization", the `RedisPropagator` formats the message, publishes it to the specific Redis topic, and the equivalent propagators on sister instances listen and push the payload down to the physical sockets they manage.

## Socket States and Gateways

Socket states are essential for managing the lifecycle of websocket connections in the system. The NestJS implementation employs an in-memory `SocketStateService` (often backed by a Redis Hash map for global state) to track the connection status of clients and determine when they are online or offline. By monitoring socket states globally, the system can effectively decide whether to route a live notification or defer it to a database for an offline push notification (APNs/FCM).

The `WebSocket Gateway` is the entry point. It manages incoming connections, enforces authentication, and binds users to their respective rooms.

## Conclusion

The NestJS-based scalable notification system microservice described in this article leverages the Redis pub/sub model, authenticated websockets, and key abstract components such as the `RedisPropagator` and `SocketStateService` to create a robust and horizontally scalable solution.

<div class="doodle">
  *Final Thought:* Building scalable socket servers is tough, but by combining NestJS's excellent DI system with Redis Pub/Sub, you get a clean, scalable architecture right out of the box! 📦
</div>

By utilizing these technologies and architectural patterns, the system can efficiently manage a massive number of concurrent connections and deliver real-time notifications to users securely, without breaking a sweat.

<div class="citations">
  <h3>References & Citations</h3>
  <ol>
    <li>
      NestJS Documentation. <em>WebSockets / Gateways</em>. <a href="https://docs.nestjs.com/websockets/gateways">Link</a>
    </li>
    <li>
      Redis Documentation. <em>Pub/Sub</em>. <a href="https://redis.io/docs/interact/pubsub/">Link</a>
    </li>
    <li>
      Kamil Myśliwiec (2018). "Building Real-Time Applications with NestJS".
    </li>
  </ol>
</div>