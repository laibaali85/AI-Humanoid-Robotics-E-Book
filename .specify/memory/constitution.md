<!--
---
Sync Impact Report
---
- **Version Change**: `0.1.0` -> `1.0.0`
- **Reason**: Initial constitution established from project definition.
- **Modified Principles**:
  - `[PRINCIPLE_1_NAME]` -> `I. Clarity and Accessibility`
  - `[PRINCIPLE_2_NAME]` -> `II. Structured and Modular Content`
  - `[PRINCIPLE_3_NAME]` -> `III. Practical and Focused Scope`
  - `[PRINCIPLE_4_NAME]` -> `IV. Consistency`
  - `[PRINCIPLE_5_NAME]` -> `V. Adherence to Technical Stack`
- **Added Sections**:
  - `Content Structure`
  - `Development Workflow`
- **Removed Sections**: None
- **Templates Requiring Updates**:
  - ✅ `.specify/templates/plan-template.md` (Verified for alignment)
  - ✅ `.specify/templates/spec-template.md` (Verified for alignment)
  - ✅ `.specify/templates/tasks-template.md` (Verified for alignment)
- **Follow-up TODOs**: None
-->
# Physical AI & Humanoid Robotics Constitution

A textbook teaching students how AI connects to physical bodies through robotics, covering ROS 2, Gazebo, NVIDIA Isaac, and Vision-Language-Action systems for humanoid robots.

## Core Principles

### I. Clarity and Accessibility
Content MUST be written at a 5th-6th grade English reading level. Complex topics MUST be simplified into easy-to-understand terms and concepts. The primary goal is to make sophisticated AI and robotics concepts accessible to beginners and students.

### II. Structured and Modular Content
Every module MUST be broken down into multiple chapters and sections. Each chapter MUST begin with clear learning objectives, include illustrative diagrams or visuals, and conclude with a concise explanation of how the component fits into the overall humanoid pipeline. Modules should be between 4,000 to 6,000 words.

### III. Practical and Focused Scope
All content MUST directly relate to "Physical AI" and humanoid systems. Theoretical discussions without practical application are to be avoided. The book is an informational textbook ONLY; it will not contain labs, coding assignments, or hardware requirements.

### IV. Consistency
Consistent terminology and concepts MUST be maintained across all modules and chapters to ensure a cohesive learning experience.

### V. Adherence to Technical Stack
The book's content will be created using Docusaurus and MDX. This is a firm constraint for the final deliverable.

## Content Structure

- **Module 1: The Robotic Nervous System (ROS 2)**: Covers ROS 2 nodes, topics, services, rclpy, and URDF fundamentals.
- **Module 2: The Digital Twin (Gazebo & Unity)**: Explains simulation of physics, environments, and sensors.
- **Module 3: The AI-Robot Brain (NVIDIA Isaac)**: Details Isaac Sim, Isaac ROS, and Nav2 for locomotion.
- **Module 4: Vision-Language-Action (VLA)**: Describes voice-to-action systems, using LLMs as planners, and high-level autonomous workflows.

## Development Workflow

The project will deliver a complete Docusaurus book. Initially, only the chapters for Module 1 will be fully written. For Modules 2, 3, and 4, only a module overview will be created. This iterative approach allows for focused content creation.

## Governance

This constitution is the single source of truth for project scope, quality, and structure. All content contributions MUST adhere to these principles. Any amendments to this constitution require team consensus, documentation of the changes, and a version bump.

**Version**: 1.0.0 | **Ratified**: 2025-12-05 | **Last Amended**: 2025-12-05