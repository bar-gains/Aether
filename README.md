# AetherPress Prototype - Welcome

The goal is a quick-build prototype involving a Node.js backend (for Puppeteer compatibility and potentially Express/FastAPI) and a modern frontend SPA (Svelte). This project demonstrates the foundational architecture for a quick-build prototype of AetherPress, focusing on the core loop: Prompt -> AI Processing -> Preview -> Basic Override -> PDF Export.

## Vision

To empower creators (writers, poets, educators, marketers) to effortlessly design and publish visually stunning, graphically rich eBooks, leveraging AI for enhanced creativity, efficiency, and personalization.

## Project Structure

- `/server` — All backend code (Express server, Puppeteer, modules)
- `/client` — Svelte frontend SPA
- `/data` — (Optional) Database files
- `/samples` — Sample files (e.g., PNGs, PDFs)
- `/docs` — Project documentation

## Features

- **Prompt Handling**: Accept user input for AI processing
- **AI Processing**: Integrate real AI services for text and image generation
- **Preview Generation**: Basic HTML preview of generated content
- **Basic Override**: Minimal user edits to the generated content
- **PDF Export**: Generate PDFs using Puppeteer for advanced HTML rendering and layouts

## API Endpoints (Core Loop)

1. **POST /prompt** — Accepts a `prompt` and returns generated content
2. **GET /preview** — Returns an HTML preview for given content
3. **POST /override** — Accepts `content` and `override`, returns updated content
4. **GET /export** — Returns a PDF file for given content

## Implementation Notes

- **PDF Generation**: Uses Puppeteer for production-level HTML-to-PDF rendering
- **AI Service Abstraction**: Centralized logic for text and image generation
- **Template-Based Layouts**: Dynamic HTML/CSS templates for content and image rendering

## Future Enhancements

- Asynchronous processing for better performance
- Enhanced UI/UX
- User authentication and session management
- Expanded database schema for more complex workflows

## Documentation

See the `docs/` directory for devcontainer setup, dependency management, and architecture notes.

## Getting Started

### Backend

1. Navigate to the server directory:
   ```bash
   cd server
   npm install
   npm run dev
   ```
   (This runs the Express server from `/server/index.js`.)

### Frontend

1. Navigate to the client directory:
   ```bash
   cd client
   npm install
   npm run dev
   ```
   (This runs the Svelte app on Vite.)

### Access the Application

- **Frontend**: [http://localhost:5173](http://localhost:5173)
- **Backend API**: [http://localhost:3000](http://localhost:3000)
