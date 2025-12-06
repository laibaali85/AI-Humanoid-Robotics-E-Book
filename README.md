# AI-Powered Robotics Development

This repository contains the source code for the "AI-Powered Robotics Development" textbook, an introductory guide designed to help students and enthusiasts understand how artificial intelligence connects to physical bodies through robotics. The book covers essential topics such as ROS 2, Gazebo, NVIDIA Isaac, and Vision-Language-Action (VLA) systems for humanoid robots.

## Table of Contents

-   **Module 1: The Robotic Nervous System (ROS 2)**
    -   Chapter 1: Introduction to ROS 2
    -   Chapter 2: Nodes, Topics, and Services
    -   Chapter 3: RCLPY (ROS 2 Client Library for Python)
    -   Chapter 4: URDF (Unified Robot Description Format)
    -   Chapter 5: Final Project: Building a ROS 2 Application

-   **Module 2: The Digital Twin (Gazebo & Unity)**
    -   Overview: Simulating Physics, Environments, and Sensors

-   **Module 3: The AI-Robot Brain (NVIDIA Isaac)**
    -   Overview: Isaac Sim, Isaac ROS, and Nav2 for Locomotion

-   **Module 4: Vision-Language-Action (VLA)**
    -   Overview: Voice-to-Action Systems, LLMs as Planners, and High-Level Autonomous Workflows

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Ensure you have Node.js (>=20.0) and npm installed.

### Installation

```bash
npm install
```

### Local Development

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## Deployment

Using SSH:

```bash
USE_SSH=true npm run deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.