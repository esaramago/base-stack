# AGENTS.md — Base Stack

## Getting started
Hi, Agent. This section should be deleted after the creation of the project

### Purpose
This project serves as a base template for other projects.
When creating a new project, I will reference this repository as the base.

### Checklist when starting a new project
- [ ] Ensure package dependencies are on their latest versions.
- [ ] Ask for the project name. Then, replace the name wherever you find "Base Stack", "base-stack", etc.
- [ ] Ask for a description of the project. Then, generate the README.md.
- [ ] Ask if it will have authentication. If yes, ask if login and register pages should be generated.
- [ ] Ask for the license type. Then, generate the LICENSE file.
- [ ] Ask wich port the application will run on.

### Notes
- This project is probably going to be hosted on Coolify.

## Rules
- No Tailwind or other CSS frameworks.
- Do not add inline styles.
- Use the Grid.svelte component whenever possible to structure layout.
- Use WebAwesome for elements whenever possible.
- Do not write CSS or add unnecessary classes. I will write whatever CSS is needed.
- Do not use redundant attributes. Example: `<Grid gap="m" />`
- Code comments must be in English.
- README.md and AGENTS.md must be in English.
- Do not commit any changes. I'll do it or ask.
- Avoid repeating code. Create reusable functions and components when it makes sense.