# Anime Explorer

A modern React application for exploring and discovering anime using the Jikan API. This project demonstrates modern React patterns with TypeScript, featuring a responsive UI, character-by-character animations, and internationalization support.

## Features

- **Search & Discovery**: Search the Jikan API for anime titles with real-time results
- **Detailed Anime Information**: View comprehensive details including synopsis, genres, and ratings
- **Internationalization (i18n)**: Multi-language support using i18next
- **Animated Components**: Engaging UI animations created with Framer Motion
- **Responsive Material UI**: Beautiful and responsive design using Material UI components
- **Performance Optimized**: Code splitting and bundle optimization for fast loading

## Tech Stack

This project uses several modern web technologies:

- **Frontend Framework**: React with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Library**: Material UI v5
- **Animation**: Framer Motion
- **Routing**: React Router v6 with future flags enabled
- **Internationalization**: i18next with react-i18next
- **Data Fetching**: Custom hooks with the Fetch API
- **State Management**: React's hooks

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <https://github.com/clotz9/animeapp.git>

# Navigate to project directory
cd animeapp

# Install dependencies
npm install
# or
yarn
```

### Development

```bash
# Start the development server
npm run dev
# or
yarn dev
```

The application will be available at http://localhost:5173

### Building for Production

```bash
npm run build
# or
yarn build
```

This creates optimized production bundles in the `dist` directory with manual chunking for vendor libraries.

## Project Structure

```
animeapp/
├── public/                # Static assets served directly
├── src/
│   ├── assets/            # Project assets (images, icons)
│   ├── components/        # Reusable UI components
│   │   └── common/        # Shared components used across features
│   ├── hooks/             # Custom React hooks
│   ├── locales/           # i18n translation files
│   │   └── en/            # English translations
│   ├── pages/             # Page components
│   ├── services/          # API services
│   ├── types/             # TypeScript type definitions
│   ├── utils/             # Utility functions and constants
│   ├── App.tsx            # Main application component
│   └── main.tsx           # Application entry point
├── vite.config.ts         # Vite configuration
└── tsconfig.json          # TypeScript configuration
```

## Internationalization

The app is set up with i18next for internationalization:

- Translation files are organized in the `src/locales` directory
- The default namespace is "common"
- All user-facing strings are accessed via the `useTranslation` hook

To add a new language:

1. Create a new directory in `src/locales` (e.g., `jp` for Japanese)
2. Copy the structure from `en` and translate the strings
3. Register the new language in `src/locales/index.ts`

## Performance Optimizations

This project implements several performance optimizations:

- Manual chunk configuration in Vite for vendor libraries
- Optimized bundle sizes for production builds

## License

This project is open source and available under the MIT License.
