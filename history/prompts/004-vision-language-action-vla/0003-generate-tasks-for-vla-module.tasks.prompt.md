---
id: 0003
title: Generate Tasks for VLA Module
stage: tasks
date: 2025-12-05
surface: agent
model: Gemini
feature: 004-vision-language-action-vla
branch: 004-vision-language-action-vla
user: laibaali85
command: /sp.tasks
labels: [task-generation, vla, robotics]
links:
  spec: specs/004-vision-language-action-vla/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/004-vision-language-action-vla/tasks.md
tests:
  - none
---

## Prompt

---
description: Generate an actionable, dependency-ordered tasks.md for the feature based on available design artifacts.
---

## User Input

```text
$ARGUMENTS
```

You **MUST** consider the user input before proceeding (if not empty).

## Outline

1. **Setup**: Run `.specify/scripts/bash/check-prerequisites.sh --json` from repo root and parse FEATURE_DIR and AVAILABLE_DOCS list. All paths must be absolute. For single quotes in args like "I'm Groot", use escape syntax: e.g 'I'\''m Groot' (or double-quote if possible: "I'm Groot").

2. **Load design documents**: Read from FEATURE_DIR:
   - **Required**: plan.md (tech stack, libraries, structure), spec.md (user stories with priorities)
   - **Optional**: data-model.md (entities), contracts/ (API endpoints), research.md (decisions), quickstart.md (test scenarios)
   - Note: Not all projects have all documents. Generate tasks based on what's available.

3. **Execute task generation workflow**:
   - Load plan.md and extract tech stack, libraries, project structure
   - Load spec.md and extract user stories with their priorities (P1, P2, P3, etc.)
   - If data-model.md exists: Extract entities and map to user stories
   - If contracts/ exists: Map endpoints to user stories
   - If research.md exists: Extract decisions for setup tasks
   - Generate tasks organized by user story (see Task Generation Rules below)
   - Generate dependency graph showing user story completion order
   - Create parallel execution examples per user story
   - Validate task completeness (each user story has all needed tasks, independently testable)

4. **Generate tasks.md**: Use `.specify.specify/templates/tasks-template.md` as structure, fill with:
   - Correct feature name from plan.md
   - Phase 1: Setup tasks (project initialization)
   - Phase 2: Foundational tasks (blocking prerequisites for all user stories)
   - Phase 3+: One phase per user story (in priority order from spec.md)
   - Each phase includes: story goal, independent test criteria, tests (if requested), implementation tasks
   - Final Phase: Polish & cross-cutting concerns
   - All tasks must follow the strict checklist format (see Task Generation Rules below)
   - Clear file paths for each task
   - Dependencies section showing story completion order
   - Parallel execution examples per story
   - Implementation strategy section (MVP first, incremental delivery)

## Response snapshot

Task list for 'Module 4: Vision-Language-Action (VLA)' has been generated.

- Task List File: specs/004-vision-language-action-vla/tasks.md
- Total Task Count: 19
- Task Count by User Story (Phase 2):
  - US1 (Understand Vision-Language-Action (VLA) Concept): 3 tasks
  - US2 (Explore Whisper for Voice-to-Action): 3 tasks
  - US3 (LLMs as Planners): 3 tasks
  - US4 (High-Level Autonomous Humanoid Workflow): 3 tasks
- Parallel Opportunities Identified: Phase 3 tasks (T016, T017, T018, T019) can be executed in parallel.
- Suggested MVP Scope: Completion of all tasks in Phase 2 (Module 4 Content Creation).

The tasks are ready for implementation.

## Outcome

- ✅ Impact: An actionable, dependency-ordered tasks.md file was generated for 'Module 4: Vision-Language-Action (VLA)'. It includes tasks for project setup verification, content creation for individual user stories (overview only), and final review/refinement.
- 🧪 Tests: No tests were run.
- 📁 Files:
  - specs/004-vision-language-action-vla/tasks.md (created)
- 🔁 Next prompts: `/sp.implement`
- 🧠 Reflection: The task generation process successfully adapted to the overview-only requirement for this module, organizing tasks by logical phases and user stories while adhering to project principles.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): none