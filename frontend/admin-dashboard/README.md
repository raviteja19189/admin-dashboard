# Admin Dashboard

This is the admin dashboard frontend for the project, built with Angular 21.2.5. It is intended to provide administrative views and controls for user and system management.

## Prerequisites

- Node.js 18+ or newer
- npm 10.2.5 (or compatible)
- Angular CLI 21.2.5 installed locally via the workspace package

## Install dependencies

From the `frontend/admin-dashboard` directory, install dependencies with:

```bash
npm install
```

## Development server

Start the local development server with:

```bash
npm start
```

Open your browser at `http://localhost:4200/` to view the admin dashboard. The app supports live reload when you modify source files.

## Build

Create a production build using:

```bash
npm run build
```

Build artifacts are generated in the `dist/` folder by default.

## Watch mode

Build the application in watch mode while developing:

```bash
npm run watch
```

## Tests

Run unit tests with:

```bash
npm test
```

## Project structure

- `src/` – main application source
- `src/app/` – Angular app modules, components, routes, and guards
- `src/index.html` – application entry page
- `src/styles.css` – global styles
- `tsconfig.json` / `tsconfig.app.json` – TypeScript configuration

## Notes

- This frontend is part of the larger workspace under `frontend/` and works alongside the backend services in `backend/`.
- If you add Angular components or services, follow the existing folder structure under `src/app/`.

## Additional resources

For Angular CLI usage and command details, see the [Angular CLI documentation](https://angular.dev/tools/cli).
