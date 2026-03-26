---
title: "Breaking Boundaries: A Scalable Distributed MD5 Hash Matching System"
excerpt: "Distributed MD5 Hash Matching Scalable Password Cracking System is a project that designs a distributed system for cracking 5-character passwords using MD5 hash matching. The system employs a web interface, a management service, and multiple worker nodes to enable scalable brute-force attacks. Users can add or remove worker nodes, improving efficiency and adaptability."
coverImage: "/assets/blog/md5-distributed/cover.png"
date: "2022-10-15T05:35:07.322Z"
categories: ["Distributed Systems", "Computer Networks"]
author:
  name: Atul Lal
  picture: "/assets/blog/authors/atullal.jpeg"
ogImage:
  url: "/assets/blog/md5-distributed/cover.png"
github: https://github.com/atullal/password-cracker
---

This article delves into the design and implementation of a scalable distributed system for <a href="https://en.wikipedia.org/wiki/MD5" target="_blank" class="tooltip">MD5 hash<span class="tooltip-content">The MD5 message-digest algorithm is a widely used hash function producing a 128-bit hash value. Though heavily compromised, it's great for academic distributed computing!</span></a> matching. With a user-friendly web interface and a robust management service, the system efficiently cracks passwords using a brute-force approach.

<div class="doodle">
  *Why MD5?* Sure, MD5 is cryptographically broken for modern use-cases, but it's the perfect algorithmic sandbox for testing distributed compute performance! 🕵️‍♂️
</div>

The project demonstrates the power of distributed systems, REST APIs, and real-world web applications, while also touching upon important concepts like SSH tunneling and client-server communication.

## Introduction

In recent years, distributed systems have gained massive prominence in a variety of applications, offering improved performance, scalability, and fault tolerance. One such classic application involves matching MD5 hashes for password-cracking purposes.

<span class="highlighter">Why crack passwords on one machine when you can use ten?</span>

This article explores the design and implementation of a distributed system that can efficiently crack 5-character alphabetical passwords using a brute force approach, leveraging the power of multiple worker nodes in a cluster.

## Problem Statement and Learning Outcomes

The primary goal of the project is to create a scalable distributed system that cracks MD5 hashes for 5-character passwords. The system must be capable of distributing the search space (the brute-force workload) evenly among multiple worker nodes and responding to the client with the appropriate outcome as quickly as possible.

<div class="post-it">
  <strong>The Search Space:</strong> A 5-character alphabetical password (a-z, A-Z) has $52^5$ combinations. That's 380,204,032 possible hashes to check!
</div>

In the process, the project aims to provide insights into:
- The implementation of a distributed system architecture.
- The significance of REST APIs for job orchestration.
- Deployment of single-page applications (React).
- SSH tunneling for secure communication.
- Maintaining robust client-server connections.

## Design and Setup

The system's architecture consists of a server-client interaction model, utilizing resources from the <a href="https://groups.geni.net/geni/wiki" target="_blank" class="tooltip">GENI network<span class="tooltip-content">Global Environment for Network Innovations, a virtual laboratory for exploring future internets at scale.</span></a> for server and client nodes.

A frontend developed in **React** is deployed on the web to enable user input. The user inputs the MD5 hash, and the frontend communicates with the password cracker management server (written in **Python/Flask**) running on a GENI node. The server then chunks the $52^5$ combinations and assigns blocks of work to the active worker nodes.

## Execution and Results

To reproduce the experiment, a slice on GENI with 1 management server and 10 client worker nodes is created using a provided RSPEC file.

The environment utilizes Python 3.7 and Flask 2.2.2. We used <a href="https://ngrok.com/" target="_blank" class="tooltip">Ngrok<span class="tooltip-content">A cross-platform application that exposes local network services behind NATs and firewalls to the public internet.</span></a> to expose the GENI server securely to our React frontend. The server and clients are configured using a series of automated SSH commands.

## Metrics and Analysis

The experiment was run exactly 50 times with varying bandwidth values and numbers of worker clients. We analyzed two key metrics:
1. The total time required to break a single given hash.
2. The total time required to process a batch file of hashes.

<div class="doodle">
  *Results are in!* As expected, the time required to crack a password decreases almost linearly as more clients are added to the cluster.
</div>

Furthermore, we observed that as the network bandwidth value between the GENI nodes increases, the overhead of distributing the search space chunks decreases, leading to an even tighter linear scaling factor. <span class="highlighter">Horizontal scaling works!</span>

## Conclusion

This project demonstrates the immense power and flexibility of distributed systems in efficiently cracking MD5 hashes. Through a user-friendly web interface and an effective management service, the system enables the dynamic distribution of workload among multiple worker nodes, resulting in highly improved performance and scalability.

The learnings from this project—specifically around job chunking, worker fault tolerance, and API orchestration—can be applied to any modern distributed system application.

Check out more about the project through this <a href="https://drive.google.com/file/d/1zp3tYJyh-yDjSKDW8yI3Et8wYyr6T-0R/view" target="_blank" class="tooltip">detailed PDF report<span class="tooltip-content">A deep dive PDF report covering the architecture, mathematical scaling, and network topologies tested during the project.</span></a>.

<div class="citations">
  <h3>References & Citations</h3>
  <ol>
    <li>
      Rivest, R. (1992). "The MD5 Message-Digest Algorithm". <em>RFC 1321</em>. <a href="https://tools.ietf.org/html/rfc1321">Link</a>
    </li>
    <li>
      Berman, M., et al. (2014). "GENI: A federated testbed for innovative network experiments". <em>Computer Networks</em>, 61, 5-23.
    </li>
  </ol>
</div>