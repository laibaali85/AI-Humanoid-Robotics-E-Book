# Quickstart Guide for Content Contributors

This guide provides essential steps and best practices for anyone contributing content to the "Physical AI & Humanoid Robotics" textbook. Adhering to these guidelines ensures consistency, quality, and alignment with the project's constitution.

## 1. Understand the Project Constitution

Before writing, familiarize yourself with the project's core principles located at `.specify/memory/constitution.md`. Key principles to remember:

-   **Clarity and Accessibility**: All content MUST be written at a 5th-6th grade English reading level. Simplify complex topics.
-   **Structured and Modular Content**: Every chapter MUST have clear learning objectives, diagrams/visuals, and explain how the component fits into the humanoid pipeline.
-   **Practical and Focused Scope**: Content MUST directly relate to "Physical AI" and humanoid systems; no labs, coding assignments, or excessive theory.
-   **Consistency**: Maintain consistent terminology throughout.
-   **Adherence to Technical Stack**: Content is written in MDX for Docusaurus.

## 2. Setting Up Your Development Environment

(Assumes Docusaurus project is already set up and cloned locally)

1.  **Clone the Repository**: If you haven't already, clone the main textbook repository.
2.  **Navigate to Docusaurus Content**: Most content will reside in the `docs/` directory of the Docusaurus project. Create a new subdirectory for your module/chapter if it doesn't exist (e.g., `docs/module1/chapterX/`).
3.  **Install Dependencies**: Run `npm install` (or `yarn install`) in the Docusaurus project root to ensure all build dependencies are met.
4.  **Start Docusaurus Development Server**: Run `npm run start` (or `yarn start`) from the Docusaurus project root to preview your changes in real-time in your browser.

## 3. Writing New Content (MDX)

All content is written in MDX (Markdown with JSX capabilities).

1.  **Create a New `.md` or `.mdx` File**: Place your new content file in the appropriate module/chapter directory (e.g., `docs/module1/chapter1-introduction.mdx`).
2.  **Include Front Matter**: Every content file MUST start with YAML front matter for Docusaurus to correctly process it.
    ```yaml
    ---
    title: Your Chapter Title
    description: A brief summary of the chapter content.
    slug: /module1/chapter1
    ---
    ```
3.  **Structure Your Chapter**:
    -   **Learning Objectives**: Start with a section clearly outlining what the reader will learn.
    -   **Content Sections**: Break down the topic into logical headings and subheadings.
    -   **Diagrams/Visuals**: Embed images (PNG, JPG, SVG) using standard Markdown syntax `![Alt Text](path/to/image.png)`. Ensure images are clear and contribute to understanding.
    -   **Code Snippets (Optional)**: If including code, use Markdown fenced code blocks. Ensure they are illustrative and *not* meant to be runnable code.
    -   **Connection to Humanoid Pipeline**: Conclude sections or chapters by explaining how the discussed concept fits into the overall humanoid robot system.
4.  **Preview Your Changes**: Regularly check your content in the Docusaurus development server to ensure formatting, readability, and image rendering are correct.

## 4. Adhering to the 5th-6th Grade Reading Level

Use readability tools (e.g., Hemingway App, Flesch-Kincaid grade level calculators) to assess your writing. Simplify vocabulary, shorten sentences, and use active voice.

## 5. Review and Submission

1.  **Self-Review**: Before submission, review your content against the project constitution and this quickstart guide. Pay close attention to clarity, consistency, and scope.
2.  **Request Feedback**: Share your work with peers or subject matter experts for review.
3.  **Submit Changes**: Once reviewed and approved, submit your changes via the standard Git workflow (commit to your feature branch, create a pull request).

Remember, the goal is to create a highly accessible and informative textbook. Happy writing!
