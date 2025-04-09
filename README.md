# Data Visualization Platform

A modern web application for data visualization built with React, TypeScript, and Firebase.

## Prerequisites

- Node.js (v18 or higher)
- npm
- A Firebase project

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

You can get these values from your Firebase project settings.

## Setup

1. Clone the repository:

```bash
git clone <repository-url> // coming soon!
cd data-viz-platform
```

2. Install dependencies:

```bash
npm install
```

3. Create the `.env` file with your Firebase configuration (see Environment Variables section above)

## Local Development

1. Start the development server:

```bash
npm run dev
```

2. Open your browser and navigate to `http://localhost:5173`

The application will automatically reload when you make changes to the source files.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code issues
- `npm run check:formatting` - Check code formatting with Prettier
- `npm run format` - Format code with Prettier
- `npm run check:types` - Check TypeScript types

## Project Structure

- `src/` - Source code
  - `components/` - Reusable UI components
  - `config/` - Configuration files (Firebase, React Query, etc.)
  - `features/` - Feature-specific code
  - `hooks/` - Custom React hooks
  - `lib/` - Utility functions and shared code
  - `pages/` - Page components
  - `App.tsx` - Main application component
  - `main.tsx` - Application entry point

## Technologies Used

- React
- TypeScript
- Vite
- Firebase (Authentication)
- React Query
- React Router
- Tailwind CSS
- Radix UI
- ESLint
- Prettier
