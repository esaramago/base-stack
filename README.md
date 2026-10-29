# Base Stack

A modern, opinionated full-stack starter template designed for rapidly scaffolding and deploying production-ready web applications.

---

## 🎯 Overview

**Base Stack** provides a solid, pre-configured foundation that eliminates repetitive project setup. It combines the speed and simplicity of **SvelteKit 2** (with Svelte 5) on the frontend with **PocketBase** as a lightweight, all-in-one backend (database, authentication, file storage, and realtime subscriptions). The UI layer is powered by **WebAwesome** web components and a zero-framework modular CSS architecture centered around a flexible `Grid` layout component.

The entire stack is containerized with Docker and ready for seamless deployment on **Coolify** or any Docker-compatible hosting platform.

---

## ✨ Key Features

- **⚡ Modern Frontend:** Built with [SvelteKit 2](https://kit.svelte.dev/) and [Svelte 5](https://svelte.dev/) leveraging runes and reactive primitives.
- **🗄️ Integrated Backend:** [PocketBase](https://pocketbase.io/) embedded SQLite database, built-in authentication, realtime events, and an intuitive Admin UI.
- **🔐 SSR Session Sync:** Pre-configured SvelteKit server hooks (`hooks.server.ts`) for synchronized cookie-based authentication between client and server.
- **🎨 Design System & Web Components:** Styled with [WebAwesome](https://webawesome.com/) accessible web components and design tokens.
- **📐 Layout System:** Purpose-built, lightweight `Grid.svelte` component for structured, responsive layouts without heavy CSS frameworks like Tailwind.
- **🐳 Production Ready:** Multi-stage `Dockerfile` and `docker-compose.yml` pre-configured for local development and one-click deployment on [Coolify](https://coolify.io/).
- **🛠️ Type Safety & Tooling:** Full [TypeScript](https://www.typescriptlang.org/) support, [Vite](https://vitejs.dev/), and strict checking with `svelte-check`.

---

## 🚀 Tech Stack

| Layer | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | [SvelteKit 2](https://kit.svelte.dev/) / [Svelte 5](https://svelte.dev/) | Full-stack application framework with SSR |
| **Backend / DB** | [PocketBase](https://pocketbase.io/) | SQLite backend with Auth, Realtime & Admin dashboard |
| **UI Components** | [WebAwesome](https://webawesome.com/) | Standardized, accessible Web Components |
| **Styling** | Vanilla CSS Architecture | Modular CSS tokens, reset, elements, and layout utilities |
| **Package Manager** | [PNPM](https://pnpm.io/) | Fast, disk space-efficient package manager |
| **Containerization** | [Docker](https://www.docker.com/) & Docker Compose | Multi-stage image build and service orchestration |
| **Deployment** | [Coolify](https://coolify.io/) | Self-hosted PaaS deployment target |

---

## 📖 Development & Getting Started

Looking to run this project locally, understand the coding conventions, or prepare a deployment?

👉 Check out the [Development Guide (DEVELOPMENT.md)](DEVELOPMENT.md) for:
- Environment setup and prerequisites
- Running PocketBase and the local dev server
- Layout system (`Grid.svelte`) usage and UI guidelines
- Docker and Coolify deployment instructions

---

## 📄 License

Distributed under the [MIT](LICENSE) License.
