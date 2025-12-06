---
title: "Chapter 2: Nodes, Topics, and Services"
---

## Table of Contents
- [Introduction](#introduction)
- [ROS 2 Communication Patterns](#ros-2-communication-patterns)
- [Nodes: The Building Blocks](#nodes-the-building-blocks)
- [Topics: Asynchronous Data Streaming](#topics-asynchronous-data-streaming)
- [Services: Synchronous Request-Response](#services-synchronous-request-response)
- [Parameters: Dynamic Configuration](#parameters-dynamic-configuration)
- [Actions: Long-Running Tasks](#actions-long-running-tasks)
- [Conclusion](#conclusion)

## Introduction

In ROS 2 (Robot Operating System 2), communication is at the heart of how different parts of a robotic system interact. Imagine a robot as a team of specialized workers, each with a specific job. For these workers to cooperate and achieve a common goal, they need efficient ways to talk to each other, share information, and request tasks. This chapter delves into the fundamental communication mechanisms in ROS 2: Nodes, Topics, Services, Parameters, and Actions. Understanding these concepts is crucial for building robust, distributed, and scalable robotics applications.

We will explore how these elements form the "nervous system" of a ROS 2 robot, allowing for modular development, fault tolerance, and flexible system architectures.

## ROS 2 Communication Patterns

ROS 2 offers several distinct communication patterns, each suited for different types of interactions within a robotic system:

| Communication Pattern | Description                                                                 | Use Cases                                                                                                | Analogy                                     |
| :-------------------- | :-------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------- | :------------------------------------------ |
| **Topics**            | Asynchronous, one-to-many data streaming (publish/subscribe).              | Sensor data (lidar, camera), odometry, robot joint states, command velocities.                           | Radio broadcast (many listeners, one speaker) |
| **Services**          | Synchronous, one-to-one request-response for immediate operations.          | Triggering a robot action (e.g., "take a picture"), querying a map, changing a robot's mode.             | Making a phone call (direct question, direct answer) |
| **Actions**           | Asynchronous, one-to-one for long-running, goal-oriented tasks (with feedback). | Navigating to a goal, moving a robotic arm, complex manipulation tasks that require progress monitoring. | Ordering a pizza (set a goal, get updates, can cancel) |
| **Parameters**        | Storing and dynamically updating configuration data.                        | Robot speed limits, sensor calibration values, behavioral thresholds.                                    | Configuration file (read/write settings)      |

## Nodes: The Building Blocks

In ROS 2, a **node** is an executable process that performs a specific task. Nodes are typically designed to be modular, meaning each node is responsible for a single, well-defined function. For example, a robot might have separate nodes for:

-   Reading data from a lidar sensor.
-   Processing camera images.
-   Controlling the motors.
-   Planning a navigation path.

Nodes communicate with each other using the ROS 2 communication mechanisms. They can be written in various programming languages (e.g., Python, C++) and run independently.

## Topics: Asynchronous Data Streaming

**Topics** are the most common way for nodes to exchange data asynchronously. They implement a **publish/subscribe** model:

-   A node that generates data (**publisher**) sends messages to a named topic.
-   Nodes that need this data (**subscribers**) listen to that topic and receive the messages.

Key characteristics:
-   **Asynchronous:** Publishers send data without waiting for subscribers to acknowledge receipt.
-   **One-to-many:** A single topic can have multiple publishers and multiple subscribers.
-   **Decoupled:** Publishers and subscribers don't need to know about each other directly; they only need to agree on the topic name and message type.

**Example:** A `camera_node` might publish image messages on the `/image_raw` topic, and an `image_processing_node` would subscribe to `/image_raw` to receive and process those images.

## Services: Synchronous Request-Response

**Services** provide a synchronous, one-to-one communication mechanism where a client sends a **request** to a server and waits for a **response**. This pattern is suitable for operations that require an immediate result or need to complete before the client can proceed.

Key characteristics:
-   **Synchronous:** The client blocks (waits) until it receives a response from the server.
-   **One-to-one:** A client makes a request to a specific service server.
-   **Reliable:** Guarantees that the request is delivered and a response is sent back (or an error occurs).

**Example:** A `mapping_node` might offer a `/save_map` service. A `user_interface_node` could call this service with a request (e.g., the map filename) and wait for a response indicating success or failure.

## Parameters: Dynamic Configuration

**Parameters** allow nodes to expose configurable values that can be read and modified at runtime. This provides a flexible way to adjust a robot's behavior without recompiling code.

Key characteristics:
-   **Dynamic:** Parameters can be changed while a node is running.
-   **Centralized:** ROS 2 provides a parameter server that stores and manages parameters, allowing other nodes or external tools to access them.

**Example:** A `navigation_node` might have a parameter for `max_speed`. A user could change this parameter using a command-line tool, and the `navigation_node` would immediately adapt to the new speed limit.

## Actions: Long-Running Tasks

**Actions** are designed for long-running, goal-oriented tasks that provide continuous feedback and can be preempted (cancelled). They combine aspects of topics (for feedback) and services (for a goal and result).

Key characteristics:
-   **Asynchronous (client perspective):** The client sends a goal and doesn't block, but receives continuous feedback.
-   **Goal-oriented:** Tasks have a defined goal, and a result upon completion.
-   **Feedback:** The action server sends periodic updates on the task's progress.
-   **Preemptable:** The client can cancel an ongoing action.

**Example:** A `robot_arm_node` might offer a `/pick_object` action. A `task_planner_node` could send a goal (e.g., "pick up the red cube at coordinates X, Y, Z"). The `robot_arm_node` would provide feedback (e.g., "moving to object," "grasping," "lifting"), and the `task_planner_node` could monitor progress or cancel the action if needed.

## Conclusion

Nodes, Topics, Services, Parameters, and Actions are the fundamental communication primitives in ROS 2. By effectively using these mechanisms, developers can create complex, modular, and resilient robotic systems. Choosing the right communication pattern for each interaction is key to designing an efficient and maintainable ROS 2 application. In the next chapter, we will dive into `rclpy`, the Python client library for ROS 2, and learn how to implement these communication patterns in code.