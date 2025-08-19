# Confluence Prototype Template

🎉 **Kickstart your Confluence prototyping using this template.** Designed to help you get up and running quickly with a basic framework in place.

## Features

- ⚡ **Vite + React + TypeScript** - Fast development with modern tooling
- 🎨 **Atlassian Design System (ADS)** - Professional UI components
- 🧭 **Complete Navigation System** - Top nav, secondary nav, and sidebar
- 📱 **Responsive Design** - Works on desktop and mobile
- 🌙 **Dark/Light Theme Toggle** - Seamless theme switching
- 🔧 **Floating Toolbar** - Context-aware actions
- 🖼️ **Hero Image Section** - Professional workspace imagery

## Getting Started

### Development Mode
```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your prototype.

### Creating New Projects from This Template

Use the included script to quickly create new Confluence prototypes:

```bash
# From this template directory
node create-confluence-template.js my-new-prototype

# Or with a different name
node create-confluence-template.js client-dashboard
node create-confluence-template.js team-wiki
```

The script will:
- 📁 Create a new directory with your project name
- 📋 Copy all template files (excluding node_modules, .git, etc.)
- 📝 Update package.json with the new project name
- 📄 Generate a customized README
- 📦 Install all dependencies
- ✅ Ready to run immediately

## Template Structure

```
src/
├── components/
│   ├── TopNavStartLayoutExample.tsx    # Main navigation bar
│   ├── ConfluenceSecondaryNav.tsx      # Secondary navigation
│   ├── SideNavigation.tsx              # Collapsible sidebar
│   └── FloatingToolbar.tsx             # Floating action toolbar
├── App.tsx                             # Main application layout
└── main.tsx                            # Application entry point
```

## Customization Guide

### Navigation
- **Top Navigation**: Edit `TopNavStartLayoutExample.tsx` for main nav items
- **Secondary Navigation**: Modify `ConfluenceSecondaryNav.tsx` for breadcrumbs/sub-nav
- **Sidebar**: Update `SideNavigation.tsx` for side menu items
- **Floating Toolbar**: Customize `FloatingToolbar.tsx` for contextual actions

### Content
- **Hero Image**: Replace the Unsplash image URL in `App.tsx`
- **Main Content**: Update the content section in `App.tsx`
- **Theme**: Dark/light mode toggle is built-in and works automatically

### Icons & Components
All icons use the Atlassian Design System. Common imports:
```tsx
import QuestionCircleIcon from '@atlaskit/icon/core/question-circle';
import NotificationIcon from '@atlaskit/icon/core/notification';
import SidebarExpandIcon from '@atlaskit/icon/core/sidebar-expand';
```

## Build & Deploy

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Why This Template?

Perfect for:
- 🎯 **Rapid Prototyping** - Get ideas to screen quickly
- 👥 **Client Presentations** - Professional-looking demos
- 🧪 **Feature Testing** - Test UX concepts before development
- 📚 **Design Systems** - Consistent Atlassian experience
- 🚀 **Project Kickoffs** - Standard starting point for teams

## Scripts Available

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Example Usage

```bash
# Create a new client prototype
node create-confluence-template.js client-portal
cd client-portal
npm run dev

# Create a team dashboard
node create-confluence-template.js team-dashboard
cd team-dashboard
npm run dev
```

Each new project will be completely independent with its own dependencies and can be customized without affecting the original template.

Happy prototyping! 🚀