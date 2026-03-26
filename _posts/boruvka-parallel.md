---
title: "Parallelization of Borůvka's Algorithm"
excerpt: "At a Georgia Tech research program, the author parallelized Borůvka's algorithm for minimum spanning trees using Java Habanero. They compared multithreaded program performance across different thread and core counts, maximizing CPU utilization with concurrent thread execution, and leveraging the Thread class or Runnable interface."
coverImage: "/assets/blog/boruvka-parallel/cover.jpeg"
date: "2020-12-11T05:35:07.322Z"
categories: ["High Performance Computing", "Algorithms"]
author:
  name: Atul Lal
  picture: "/assets/blog/authors/atullal.jpeg"
ogImage:
  url: "/assets/blog/boruvka-parallel/cover.jpeg"
---

## The Spark of Parallelization

During my research summer program at Georgia Tech, I found myself elbow-deep in graph theory and concurrent execution. My specific goal? To implement the parallelization of <a href="https://en.wikipedia.org/wiki/Bor%C5%AFvka%27s_algorithm" target="_blank" class="tooltip">Borůvka's algorithm<span class="tooltip-content">An algorithm for finding a minimum spanning tree in a graph for which all edge weights are distinct. Discovered in 1926!</span></a> to find the minimum spanning tree (MST) of an undirected graph.

<div class="doodle">
  *Mental model:* Imagine a bunch of disconnected islands (vertices) and you have to build the cheapest bridges (edges) to connect them all. Now imagine doing that with 10 engineers working at the same time without talking to each other. Chaos? Or efficiency? 🌉
</div>

The central idea was to implement a multithreaded program of Borůvka's algorithm using **Java Habanero** and compare its performance across different numbers of threads and cores. Multithreading allows concurrent execution of two or more parts of a program to maximize CPU utilization. In Java Habanero, threads can be acquired by either extending the `Thread` class or implementing the `Runnable` interface.

## The Problem Statement

Finding the Minimum Spanning Tree in a relatively large dataset using a sequential implementation takes a considerable amount of time—sometimes growing exponentially. This leads to performance delays and memory occupation for an extended period.

The primitive method utilizes only a single thread, executing sequentially and leaving other available CPU cores completely idle. To decrease the overall task time, we try to utilize these other threads, thus entering the realm of <span class="highlighter">parallel computing</span>.

<div class="post-it">
  <strong>Key Takeaway:</strong> Sequential processing is like having a 12-lane highway but forcing all traffic into a single lane. Parallelization opens up the other 11 lanes! 🏎️
</div>

The program dynamically detects and utilizes all available threads. This minimizes the execution time considerably and helps us map the relative speed bump compared to sequential execution.

## Understanding Borůvka's Algorithm

Borůvka’s Algorithm is a greedy approach to finding an MST—a spanning tree where the sum of edge weights is minimized. Otakar Borůvka developed it way back in 1926 to find the most efficient routing for an electrical grid. It's essentially a precursor and a conceptual cross between Kruskal’s and Prim’s algorithms (sometimes referred to as Sollin’s algorithm in computer science).

The algorithm is based on the merging of disjoint components. At the beginning of the procedure, each vertex is considered a separate component. In each step, the algorithm connects (merges) every component with some other using strictly the cheapest outgoing edge (assuming unique edge weights). This guarantees no cycles occur.

The complexity of Borůvka’s algorithm is:
<span class="highlighter">$O(|E| \cdot \log_2 |V|)$</span>
where $E$ is the number of edges, and $V$ is the number of vertices in graph $G$ (assuming $E \geq V$).

A significant advantage of this algorithm is that it is **embarrassingly parallelizable** because the choice of the cheapest outgoing edge for each component is completely independent of the choices made by other components.

## Pseudo Code

1. Input is a connected, weighted, and undirected graph.
2. Initialize all vertices as individual components (or sets).
3. Initialize MST as empty.
4. While there is more than one component, do the following for each component:
    a. Find the closest weight edge that connects this component to any other component.
    b. Add this closest edge to MST if not already added.
5. Return MST.

## Modules: Java Habanero

This implementation was built on Java and utilizes the <a href="https://habanero.rice.edu/" target="_blank" class="tooltip">Habanero Java Library (HJ-lib)<span class="tooltip-content">An innovative parallel programming model developed at Rice University. Used with standard Java 8.</span></a> for parallelism.

HJ integrates a wide range of parallel programming constructs (e.g., async tasks, futures, data-driven tasks, for-all, barriers, phasers, transactions, actors) into a single model. This library-based approach is highly attractive since it avoids modifying the compiler.

<div class="doodle">
  *Testing Ground:* This code was tested on the High-Performance Multi-Core DaVinci system at Rice University. Talk about some serious compute power! 💻⚡
</div>

## The Implementation Deep Dive

To handle threading safely, a concurrent linked queue is used. The program detects the available threads and initiates them in patterns of 1, 2, 4, 6, 8, etc.

Each thread acts as an individual sequential implementation. However, they must obtain a **lock** on a node. Once a thread acquires the lock, it tries to obtain the lock on connected nodes while checking if they are pre-acquired or already accounted for.

<div class="post-it">
  <strong>Deadlock Prevention:</strong> We use <code>tryLock()</code> enclosed in a <code>while</code> loop. If a thread fails to get a lock, it doesn't wait (which causes deadlocks); it simply continues or releases its current component to avoid livelocks. 🚦
</div>

This algorithm is strictly deadlock-free. If two threads try to lock multiple identical components, the `while` loop ensures only one thread succeeds before the other can even begin locking.

## The Results

### A. Using DaVinci for Computing

- **Sequential:** 1354 ms
- **Single Thread:** 1771 ms (0.76x faster)
- **2 Threads:** 1372 ms (1.69x faster)
- **4 Threads:** 923 ms (2.51x faster)
- **6 Threads:** 813 ms (2.85x faster)
- **8 Threads:** 802 ms (2.89x faster)
- **10 Threads:** <span class="highlighter">769 ms (3.01x faster)</span> 🏆
- **12 Threads:** 814 ms (2.85x faster)

### B. Using Local System for Computing

- **Sequential:** 1249 ms
- **Single Thread:** 1931 ms (0.64x faster)
- **2 Threads:** 1074 ms (1.79x faster)
- **4 Threads:** 1021 ms (1.89x faster)

## Observations & Anomalies

Notice something interesting? **10 threads on the DaVinci machine were actually faster than 12 threads.**

More threads do not necessarily equal better performance indefinitely. The formula to keep in mind is:
`Total Time = (Time to initialize thread * Number of threads) + (Time to compute / Number of threads)`

In the case of 12 threads, the initialization overhead outweighed the computational benefits. Furthermore, the sequential algorithm was faster than the "single thread" parallel implementation because the parallel version incurs the overhead of concurrency management (obtaining and checking locks), which is useless if there's only one thread running!

Finally, as the algorithm progresses and components merge, there are fewer disjoint sets left. With 12 cores fighting over a shrinking pool of components, the rate of lock collisions increases dramatically, causing performance degradation.

<div class="citations">
  <h3>References & Citations</h3>
  <ol>
    <li>
      Borůvka, Otakar (1926). "O jistém problému minimálním" [About a certain minimal problem]. <em>Práce mor. přírodověd. spol. v Brně III</em> (in Czech).
    </li>
    <li>
      Cavé, V., Zhao, J., Shirako, J., Sarkar, V. (2011). "Habanero-Java: the new advances in parallel programming". Rice University.
    </li>
  </ol>
</div>