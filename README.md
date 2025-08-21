# Resources Portal

A modern, responsive web application for managing and exploring educational resources. This platform allows users to search, filter, and discover various educational materials based on principles, document types, and categories.

![Resources Portal](./public/assets/images/logo.svg)

## ✨ Features

- **Modern UI**: Clean, professional interface built with Chakra UI
- **Responsive Design**: Optimized for all device sizes from mobile to desktop
- **Advanced Filtering**: Filter resources by principles, document types, and categories
- **Search Functionality**: Search resources by title or keywords
- **Custom Components**: Beautifully crafted UI components including:
  - Custom styled cards with dynamic vector backgrounds
  - Responsive navigation header
  - Interactive filter sidebar
  - Hero section with search capability

## 🛠️ Technology Stack

- **React 19**: Latest version with improved performance
- **TypeScript**: For type safety and better developer experience
- **Chakra UI v2**: Component library for consistent design
- **Vite**: Fast build tool and development server
- **React Icons**: Comprehensive icon library
- **Framer Motion**: Animations and transitions

## 📋 Prerequisites

- Node.js 18.x or higher
- npm 7.x or higher

## 🚀 Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/Yinye013/Resources.git
cd Resources
```

2. **Install dependencies**

```bash
npm install --legacy-peer-deps
```

3. **Start the development server**

```bash
npm run dev
```

4. **Open your browser**

Navigate to `http://localhost:5173` to see the application running.

## 📁 Project Structure

```plaintext
public/
├── assets/
│   └── images/        # SVG icons and images
src/
├── components/        # React components
│   ├── layout/        # Layout components (Header, Hero, Content)
│   └── ui/            # Reusable UI components (Cards, Buttons)
├── context/           # Context providers for state management
├── data/              # Mock data and constants
├── styles/            # Global styles and theme configuration
├── types/             # TypeScript type definitions
├── App.tsx            # Main application component
└── main.tsx          # Application entry point
```

## 🔍 Key Components

- **Header**: Navigation bar with responsive menu
- **HeroSection**: Landing section with search functionality
- **FilterSidebar**: Interactive sidebar for filtering resources
- **Card**: Custom resource cards with dynamic styling based on type
- **Content**: Main content area displaying filtered resources

## 🔧 Configuration

The application uses Chakra UI themes for styling. Theme configuration can be found in `src/styles/theme.ts`.

## 📱 Responsive Design

The application is fully responsive with breakpoints for:

- Mobile devices (< 768px)
- Tablets (768px - 992px)
- Desktops (> 992px)

## 🚢 Deployment

The project is configured for easy deployment to Vercel:

```bash
npm run build
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome. Feel free to check the [issues page](https://github.com/Yinye013/Resources/issues) if you want to contribute.

## 👤 Author

Created by Yinye

- GitHub: [@Yinye013](https://github.com/Yinye013)
  {
  files: ['**/*.{ts,tsx}'],
  extends: [
  // Other configs...
  // Enable lint rules for React
  reactX.configs['recommended-typescript'],
  // Enable lint rules for React DOM
  reactDom.configs.recommended,
  ],
  languageOptions: {
  parserOptions: {
  project: ['./tsconfig.node.json', './tsconfig.app.json'],
  tsconfigRootDir: import.meta.dirname,
  },
  // other options...
  },
  },
  ])

```
# Resources
```
