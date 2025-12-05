---
id: 0001
title: Establish Project Constitution for AI Robotics Textbook
stage: constitution
date: 2025-12-05
surface: agent
model: Gemini
feature: none
branch: master
user: laibaali85
command: /sp.constitution
labels: [constitution, project-setup, documentation]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - .specify/memory/constitution.md
 - .specify/templates/plan-template.md
 - .specify/templates/tasks-template.md
tests:
 - none
---

## Prompt

description: Create or update the project constitution from interactive or provided principle inputs, ensuring all dependent templates stay in sync
---

## User Input

```text
$ARGUMENTS
```

You **MUST** consider the user input before proceeding (if not empty).

## Outline

You are updating the project constitution at `.specify/memory/constitution.md`. This file is a TEMPLATE containing placeholder tokens in square brackets (e.g. `[PROJECT_NAME]`, `[PRINCIPLE_1_NAME]`). Your job is to (a) collect/derive concrete values, (b) fill the template precisely, and (c) propagate any amendments across dependent artifacts.

Follow this execution flow:

1. Load the existing constitution template at `.specify/memory/constitution.md`.
   - Identify every placeholder token of the form `[ALL_CAPS_IDENTIFIER]`.
   **IMPORTANT**: The user might require less or more principles than the ones used in the template. If a number is specified, respect that - follow the general template. You will update the doc accordingly.

2. Collect/derive values for placeholders:
   - If user input (conversation) supplies a value, use it.
   - Otherwise infer from existing repo context (README, docs, prior constitution versions if embedded).
   - For governance dates: `RATIFICATION_DATE` is the original adoption date (if unknown ask or mark TODO), `LAST_AMENDED_DATE` is today if changes are made, otherwise keep previous.
   - `CONSTITUTION_VERSION` must increment according to semantic versioning rules:
     - MAJOR: Backward incompatible governance/principle removals or redefinitions.
     - MINOR: New principle/section added or materially expanded guidance.
     - PATCH: Clarifications, wording, typo fixes, non-semantic refinements.
   - If version bump type ambiguous, propose reasoning before finalizing.

3. Draft the updated constitution content:
   - Replace every placeholder with concrete text (no bracketed tokens left except intentionally retained template slots that the project has chosen not to define yet—explicitly justify any left).
   - Preserve heading hierarchy and comments can be removed once replaced unless they still add clarifying guidance.
   - Ensure each Principle section: succinct name line, paragraph (or bullet list) capturing non‑negotiable rules, explicit rationale if not obvious.
   - Ensure Governance section lists amendment procedure, versioning policy, and compliance review expectations.

4. Consistency propagation checklist (convert prior checklist into active validations):
   - Read `.specify/templates/plan-template.md` and ensure any "Constitution Check" or rules align with updated principles.
   - Read `.specify/templates/spec-template.md` for scope/requirements alignment—update if constitution adds/removes mandatory sections or constraints.
   - Read `.specify/templates/tasks-template.md` and ensure task categorization reflects new or removed principle-driven task types (e.g., observability, versioning, testing discipline).
   - Read each command file in `.specify/templates/commands/*.md` (including this one) to verify no outdated references (agent-specific names like CLAUDE only) remain when generic guidance is required.
   - Read any runtime guidance docs (e.g., `README.md`, `docs/quickstart.md`, or agent-specific guidance files if present). Update references to principles changed.

5. Produce a Sync Impact Report (prepend as an HTML comment at top of the constitution file after update):
   - Version change: old → new
   - List of modified principles (old title → new title if renamed)
   - Added sections
   - Removed sections
   - Templates requiring updates (✅ updated / ⚠ pending) with file paths
   - Follow-up TODOs if any placeholders intentionally deferred.

6. Validation before final output:
   - No remaining unexplained bracket tokens.
   - Version line matches report.
   - Dates ISO format YYYY-MM-DD.
   - Principles are declarative, testable, and free of vague language ("should" → replace with MUST/SHOULD rationale where appropriate).

7. Write the completed constitution back to `.specify/memory/constitution.md` (overwrite).

8. Output a final summary to the user with:
   - New version and bump rationale.
   - Any files flagged for manual follow-up.
   - Suggested commit message (e.g., `docs: amend constitution to vX.Y.Z (principle additions + governance update)`).

Formatting & Style Requirements:

- Use Markdown headings exactly as in the template (do not demote/promote levels).
- Wrap long rationale lines to keep readability (<100 chars ideally) but do not hard enforce with awkward breaks.
- Keep a single blank line between sections.
- Avoid trailing whitespace.

If the user supplies partial updates (e.g., only one principle revision), still perform validation and version decision steps.

If critical info missing (e.g., ratification date truly unknown), insert `TODO(<FIELD_NAME>): explanation` and include in the Sync Impact Report under deferred items.

Do not create a new template; always operate on the existing `.specify/memory/constitution.md` file.

---

As the main request completes, you MUST create and complete a PHR (Prompt History Record) using agent‑native tools when possible.

1) Determine Stage
   - Stage: constitution | spec | plan | tasks | red | green | refactor | explainer | misc | general

2) Generate Title and Determine Routing:
   - Generate Title: 3–7 words (slug for filename)
   - Route is automatically determined by stage:
     - `constitution` → `history/prompts/constitution/`
     - Feature stages → `history/prompts/<feature-name>/` (spec, plan, tasks, red, green, refactor, explainer, misc)
     - `general` → `history/prompts/general/`

3) Create and Fill PHR (Shell first; fallback agent‑native)
   - Run: `.specify/scripts/bash/create-phr.sh --title "<title>" --stage <stage> [--feature <name>] --json`
   - Open the file and fill remaining placeholders (YAML + body), embedding full PROMPT_TEXT (verbatim) and concise RESPONSE_TEXT.
   - If the script fails:
     - Read `.specify/templates/phr-template.prompt.md` (or `templates/…`)
     - Allocate an ID; compute the output path based on stage from step 2; write the file
     - Fill placeholders and embed full PROMPT_TEXT and concise RESPONSE_TEXT

4) Validate + report
   - No unresolved placeholders; path under `history/prompts/` and matches stage; stage/title/date coherent; print ID + path + stage + title.
   - On failure: warn, don't block. Skip only for `/sp.phr`.


/sp.constitution Project Context:
Title: Physical AI & Humanoid Robotics
Theme: AI Systems in the Physical World. Embodied Intelligence.
Goal: Teach students how AI connects to physical bodies through robotics. The book explains ROS 2, Gazebo, NVIDIA Isaac, and Vision-Language-Action systems for humanoid robots.

Scope:
This is an informational textbook only. No labs, no coding assignments, no hardware requirements. The book explains concepts, workflows, architectures, and robotics pipelines through narrative chapters, diagrams, and examples. All content should be accessible to motivated learners with basic Python and AI knowledge.

Audience:
Students in AI, robotics beginners, and engineers transitioning into physical AI and humanoid systems.

Content Structure (Modules):
Module 1: The Robotic Nervous System (ROS 2)
- ROS 2 nodes, topics, services
- rclpy for connecting AI agents to robot controllers
- URDF fundamentals for humanoids

Module 2: The Digital Twin (Gazebo & Unity)
- Simulating physics, collisions, and environments
- Unity for visualization and interaction
- Sensor simulation: LiDAR, Depth Cameras, IMUs

Module 3: The AI-Robot Brain (NVIDIA Isaac)
- Isaac Sim for photorealistic simulation and synthetic data
- Isaac ROS for VSLAM and navigation
- Nav2 for locomotion planning in humanoids

Module 4: Vision-Language-Action (VLA)
- Whisper for voice-to-action
- Using LLMs as planners translating natural language to ROS 2 action sequences
- High-level autonomous humanoid workflow

Non-Goals:
- No step-by-step lab instructions
- No hardware wiring or real robot deployment
- No reinforcement learning implementations
- No mathematically dense derivations beyond what is needed for understanding

Constraints:
- Book format: Docusaurus, MDX
- Writing style: clear, educational, focused on systems understanding
- Diagrams allowed; code snippets optional but not required to run
- Keep content practical and accessible

Writing Rules:
- English reading level should be 5 to 6 grade
- Simplify complex topics into simple terms
- Every module should be broke down into multiple chapters/sections
- Every module should be between 4000 to 6000 words


Quality Rules:
- Each chapter must have: clear learning objectives, diagrams or visuals, and a concise explanation of how the component fits into the humanoid pipeline.
- No excessive theory; everything should relate back to "Physical AI" and humanoid systems.
- Maintain consistent terminology across modules.

Success Criteria:
- A complete Docusaurus book with 4 modules and coherent chapters
- Only write chapters for first module and for later 3 modules only write module overview
- All content aligns with the goal: bridging AI and the physical robot body
- The book can be read standalone without extra tools

Deliverable:
Generate a constitution markdown file under .specs/constitution.md following Spec-Kit Plus templates.

End of prompt

## Response snapshot

A new project constitution was created at .specify/memory/constitution.md based on the provided project context. The constitution defines core principles for content creation, including Clarity, Structure, Scope, and Consistency. Dependent templates for planning and task management were also updated to align with these new principles, ensuring that future work adheres to the established standards.

## Outcome

- ✅ Impact: A new project constitution was created and established at .specify/memory/constitution.md. Dependent templates for planning and tasking were updated to align with the new principles.
- 🧪 Tests: No tests were run.
- 📁 Files: 
  - .specify/memory/constitution.md (created)
  - .specify/templates/plan-template.md (modified)
  - .specify/templates/tasks-template.md (modified)
- 🔁 Next prompts: `/sp.specify 'New chapter on robot ethics'`
- 🧠 Reflection: The process involved not just creating the constitution, but also ensuring its principles were propagated to other project templates, ensuring consistency.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): none