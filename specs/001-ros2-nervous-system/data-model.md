# Data Model: Module 1: The Robotic Nervous System (ROS 2)

This section outlines the key conceptual entities discussed within Module 1, focusing on their definitions and relationships within the ROS 2 ecosystem. This is a conceptual data model for the content, not a software data model.

## Key Entities

### ROS 2 Node
- **Description**: A primary unit of computation in ROS 2. Nodes are processes that perform tasks and communicate with other nodes.
- **Attributes**:
    - `name`: A unique identifier for the node within the ROS 2 graph.
    - `tasks`: The specific computational or control function it performs (e.g., sensor reading, motor control, AI processing).
- **Relationships**:
    - Publishes to/Subscribes from: ROS 2 Topics
    - Provides/Uses: ROS 2 Services

### ROS 2 Topic
- **Description**: A named bus over which nodes exchange messages. Topics provide a many-to-many, asynchronous communication mechanism for data streams (e.g., sensor readings, command velocities).
- **Attributes**:
    - `name`: A unique identifier for the topic.
    - `message_type`: The structure of the data being exchanged over the topic.
- **Relationships**:
    - Published by: ROS 2 Nodes
    - Subscribed by: ROS 2 Nodes

### ROS 2 Service
- **Description**: A request/reply communication mechanism. Services are used for synchronous, remote procedure calls where a client sends a request and waits for a response from a server.
- **Attributes**:
    - `name`: A unique identifier for the service.
    - `request_type`: The structure of the request message.
    - `response_type`: The structure of the response message.
- **Relationships**:
    - Provided by: ROS 2 Nodes (server)
    - Used by: ROS 2 Nodes (client)

### rclpy
- **Description**: The Python client library for ROS 2. It provides the API for Python developers to create ROS 2 nodes and interact with the ROS 2 graph using topics, services, parameters, etc.
- **Attributes**:
    - `language`: Python
    - `purpose`: Facilitates creation of ROS 2 applications in Python.
- **Relationships**:
    - Used by: Python-based ROS 2 Nodes

### URDF (Unified Robot Description Format)
- **Description**: An XML format used in ROS 2 to describe the physical and kinematic properties of a robot model, including its links (rigid bodies) and joints (connections between links).
- **Attributes**:
    - `format`: XML
    - `purpose`: Robot modeling for simulation, visualization, and control.
- **Relationships**:
    - Describes: Robot's physical structure
    - Used by: Simulation environments (e.g., Gazebo, RViz)
