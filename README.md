# Data Visualization Platform

A modern web application for data visualization built with React, TypeScript, Tailwind CSS, and Firebase that implements three key screens and three interactive behaviors as specified in the assessment requirements.

LIVE DEPLOYMENT: [https://data-viz-platform-pink.vercel.app](https://data-viz-platform-pink.vercel.app)

## Features Implemented

### Screens & Interactions

1. **Dashboard Screen**

   - Primary data visualization chart with interactive data points
   - KPI section that dynamically updates based on selected variables
   - "Edit Variables" Action Button triggering slide-over popup
   - Smooth animation when opening/closing the variable editing panel

2. **Variable Editing Slide-Over Card**

   - Triggered by the "Edit Variables" button
   - Smooth transition animations
   - Badges for modifying visualization variables
   - Variable selection with active/inactive states
   - Visual feedback when variables are selected/deselected

3. **Details Screen**
   - Contextual information cards that appear when hovering over data points for 1.5s
   - Detailed metrics about the selected data point
   - Smooth fade-in animation for the detail card
   - Contextual information specific to the hovered data point

### Additional Features

- Dynamic KPI updates based on selected variables
- Responsive design for desktop, tablet, and mobile
- Complete authentication flow with Firebase

## Technical Implementation

### Frontend Stack

- React 18 with TypeScript
- Zustand for state management
- React Router for navigation
- Tailwind CSS for styling
- Firebase Authentication - Email/Password and Google

### Component Architecture

- Reusable UI components both custom and via ShadCN/UI (buttons, cards, tooltips, search bars, etc.)
- Page-specific components with clear separation of concerns
- Shared layout components
- Feature-specific components for rendering specific aspects of UI

## Setup Instructions

### Prerequisites

- Node.js (v16+)
- npm or yarn
- Firebase account

### Environment Variables

Create a `.env` file in the root directory with the following Firebase configuration:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/joshua-rdrgz/data-viz-platform.git
   cd data-viz-platform
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Start the development server

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Local Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build
- `npm run check:formatting` - Check code formatting with Prettier
- `npm run format` - Format code with Prettier
- `npm run check:types` - Check TypeScript types

## Technical Decisions and Trade-offs

### State Management

I chose Zustand over Redux Toolkit for state management due to its simplicity and reduced boilerplate. For this project scale, Zustand provides all the necessary functionality while keeping the codebase lean.

### Styling Approach

I implemented a combination of Tailwind CSS and ShadCN/UI for styling, which provided a robust foundation for rapid development while maintaining design consistency. ShadCN/UI's component architecture, built on top of Radix UI primitives and styled with Tailwind, offered accessible and customizable components out of the box. This approach made it easier to achieve pixel-perfect implementation of the Figma designs while leveraging pre-built components and utility classes, significantly reducing the need for custom CSS.

### Animation

For animations, I leveraged both Framer Motion and ShadCN/UI's built-in animations. Framer Motion handled complex animations like slide-over transitions, hover effects, and micro-interactions, while ShadCN/UI provided smooth component-level animations out of the box. This combination offered a robust animation system that was both performant and easy to implement.

### Authentication

Implemented Firebase Authentication with both email/password and Google OAuth options. This decision was made to provide a secure and reliable authentication system without building one from scratch.

### Data Handling

Used dummy data structured in a way that simulates real API responses. This approach allowed for focusing on the UI implementation while mimicking real-world data structures.

## Known Limitations

- The data visualization uses static data rather than connecting to a real data source
- Limited mobile optimization for complex charts
- No dual light/dark mode support
- Besides authentication, no user preferences persistence between sessions
- Besides dynamic KPIs, limited functionality beyond the technical requirements of the assessment

## Time Spent

Total time spent on this project: ~10 hours

Most of the time went into matching the Figma design, with functionality added after the UI was in place. Development began with Firebase integration and signup/login UI flows implemented. The dashboard UI was then created, followed by the variables slide-over popup. Finishing touches included mobile responsiveness and Framer Motion animations for a vibrant UI/UX.
