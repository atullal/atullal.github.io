---
title: "Operator Placement on Edge Systems in Stream Processing"
excerpt: "Working on a heterogeneity-aware operator placement project, our team utilized Raspberry Pi devices and Apache Flink to optimize edge offloading for stream processing systems, reducing latency and data traffic while maximizing resource efficiency in real-time data processing."
coverImage: "/assets/blog/operatorplacement-streaming/cover.png"
date: "2023-02-28T05:35:07.322Z"
categories: ["Streaming", "IoT"]
author:
  name: Atul Lal
  picture: "/assets/blog/authors/atullal.jpeg"
ogImage:
  url: "/assets/blog/operatorplacement-streaming/cover.png"
github: https://github.com/atullal/flink-placement
---

This article discusses a deeply technical project that aims to enhance stream processing systems by intelligently offloading processing tasks directly to the edge. In our case, we utilized <a href="https://www.raspberrypi.org/" target="_blank" class="tooltip">Raspberry Pi devices<span class="tooltip-content">A series of small single-board computers developed in the UK to promote teaching of basic computer science. Surprisingly powerful for IoT edge nodes!</span></a> to reduce data traffic and latency overhead caused by the inherently limited bandwidth of Wide Area Networks (WANs).

<div class="doodle">
  *Why send everything to the cloud?* If the edge device can filter the noise, the cloud only has to process the signal! 🌩️ -> 📡 -> ☁️
</div>

The proposed solution involves developing a mathematical cost model and actively modifying the underlying <a href="https://flink.apache.org/" target="_blank" class="tooltip">Apache Flink<span class="tooltip-content">An open-source, unified stream-processing and batch-processing framework. Excellent for stateful computations over data streams.</span></a> scheduler to efficiently offload lightweight tasks to edge systems, ultimately improving latency problems over the WAN.

## Introduction to Edge Stream Processing

Stream processing systems are crucial for handling real-time, unbounded data. However, they often face massive challenges related to limited network resources and incredibly strict latency requirements when deployed in IoT scenarios.

To address these issues, our project proposes a <span class="highlighter">heterogeneity-aware operator placement algorithm</span>. By offloading tasks to edge systems (our Raspberry Pi 4B cluster), we can optimize global resource utilization and minimize the latency overhead of round-trip cloud communication.

## The Problem Statement

Traditional stream processing systems like Apache Flink are fundamentally designed for homogeneous data center servers. They assume that every node in the cluster has roughly identical CPU, memory, and network capabilities.

<div class="post-it">
  <strong>The Bottleneck:</strong> When Flink ingests data from multiple IoT sources across different geographic locations via a WAN, the network bandwidth becomes the bottleneck. Flink cannot automatically "realize" that the source node is weak and the central node is strong.
</div>

This limitation results in high latency and inefficient resource utilization. You end up transmitting massive amounts of raw, unfiltered data across a slow WAN, only for the cloud server to immediately filter 90% of it out.

## Our Proposed Solution

The proposed solution involves preprocessing data streams at the edge to drastically reduce data traffic before it ever hits the WAN.

We achieved this by dynamically identifying tasks (Flink Operators) that can be safely offloaded to edge systems. We implemented a dynamic mechanism to predict data stream flow, compute real-time metrics, and decide which operators (like simple `map` or `filter` functions) can be pushed to the edge to increase global efficiency.

We extracted deep internal performance metrics from the Flink TaskManager, including:
- `backPressureTimeMsPerSecond`
- `idleTimeMsPerSecond`
- `busyTimeMsPerSecond`
- `numRecordsOutPerSecond`

By combining these, we calculate the **maximum output rate** a specific instance can sustain for every task. Using this deterministic cost model, we modified the Flink scheduler to pin specific tasks to edge systems if the cost model deems it mathematically favorable.

## Experimental Plan & Setup

The experimental setup for evaluating the solution included:
- **Cloud/Local Server:** A beefy machine acting as the central JobManager and heavy TaskManager.
- **Edge Devices:** A cluster of Raspberry Pi 4Bs running lightweight TaskManagers.
- **Frameworks:** Apache Flink (Java/Scala) and Python for metric analysis.

The custom scheduling algorithm begins by running all tasks on the server-side (except the initial data source) to establish a baseline and collect performance metrics from the Flink REST API. Once stable, the algorithm evaluates the cost model. Lightweight operators (e.g., stateless transformations) are then actively migrated and placed on available edge slots.

<div class="doodle">
  *The Migration:* Watching a Flink operator seamlessly migrate from an AWS server to a Raspberry Pi sitting on my desk was a true "It's Alive!" moment. ⚡
</div>

## Success Indicators & Results

The project was considered successful because it clearly demonstrated improved performance (reduced end-to-end latency and lower WAN bandwidth utilization) compared to the conventional homogeneous Flink scheduler.

Major milestones achieved:
1. Making Flink compatible with heterogeneous resources (by creating custom Slot Profiles).
2. Implementing a real-time cost model to determine which operators can be offloaded safely.
3. Dynamically changing the placement configuration based on the cost model output without dropping stream events.

## Conclusion

The proposed heterogeneity-aware operator placement algorithm successfully improves the performance of stream processing systems by intelligently offloading tasks to edge systems. By doing so, it minimizes latency overhead, preserves precious WAN bandwidth, and provides a significantly more efficient architecture for processing real-time IoT data streams.

<div class="citations">
  <h3>References & Citations</h3>
  <ol>
    <li>
      Carbone, P., et al. (2015). "Apache Flink: Stream and Batch Processing in a Single Engine". <em>Bulletin of the IEEE Computer Society Technical Committee on Data Engineering</em>, 38(4).
    </li>
    <li>
      Shi, W., et al. (2016). "Edge Computing: Vision and Challenges". <em>IEEE Internet of Things Journal</em>, 3(5), 637-646.
    </li>
  </ol>
</div>