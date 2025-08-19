# Enhanced ADS React Vite Template 🚀

A comprehensive React 18 + TypeScript + Vite template with Atlassian Design System, featuring dark/light mode toggle and interactive form components.

## ✨ Features

### 🎨 **Atlassian Design System Integration**
- ✅ Full ADS setup with feature flags
- ✅ Professional typography using ADS tokens
- ✅ Consistent spacing and layout with ADS primitives
- ✅ Official ADS components (Button, Heading, Form components)

### 🌓 **Dark/Light Mode Toggle**
- ✅ Seamless theme switching
- ✅ Automatic color adaptation for all components
- ✅ Persistent theme state during session
- ✅ Clean toggle button in header

### 📝 **Interactive Form Components**
- ✅ **Text Fields** with validation and error handling
- ✅ **Dropdown Selects** with multiple options
- ✅ **Checkboxes** for binary choices
- ✅ **Form Validation** with real-time feedback
- ✅ **Helper messages** and accessibility support

### 🏗️ **Modern Development Stack**
- ✅ **React 18** with latest features
- ✅ **TypeScript** for type safety
- ✅ **Vite** for lightning-fast development
- ✅ **Hot Module Replacement** for instant updates

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
```bash
# Clone or copy this template
npm install
npm run dev
```

### Using the Template Script
```bash
# Create a new project from this template
~/cursor-templates/create-ads-enhanced-project.sh my-new-app

# Or specify a custom destination
~/cursor-templates/create-ads-enhanced-project.sh my-app ~/Desktop
```

## 📁 Project Structure

```
src/
├── App.tsx                 # Main application with theme toggle and forms
├── main.tsx               # Entry point with ADS setup
├── utils/
│   └── feature-flag.tsx   # ADS feature flag configuration
├── assets/
│   └── react.svg         # React logo
├── App.css               # Component styles
└── index.css             # Global styles
```

## 🎯 Key Components Demonstrated

### Theme Toggle
- Located at the top of the page
- Instantly switches between light/dark modes
- Uses ADS design tokens for consistent theming

### Sample Form
- **Project Name**: Required text field with validation
- **Project Type**: Dropdown with multiple options
- **Public Project**: Optional checkbox
- **Form Submission**: Console logging and success feedback

### Layout Components
- **Box**: Container with padding and styling
- **Stack**: Vertical layout with consistent spacing
- **Inline**: Horizontal layout for elements
- **Heading**: Typography with ADS styling

## 🔧 Customization

### Adding More ADS Components
```tsx
import { Textfield } from '@atlaskit/textfield';
import { Select } from '@atlaskit/select';
import { Badge } from '@atlaskit/badge';

// Use in your components
<Textfield placeholder="Enter text..." />
```

### Theme Customization
```tsx
// In main.tsx, modify theme settings
setGlobalTheme({
  colorMode: 'light', // or 'dark'
  typography: 'typography-refreshed'
});
```

### Adding New Forms
```tsx
import Form, { Field, FormFooter } from '@atlaskit/form';

// Create new form sections
<Form onSubmit={handleSubmit}>
  {({ formProps }) => (
    <form {...formProps}>
      {/* Your form fields */}
    </form>
  )}
</Form>
```

## 📦 Dependencies

### Core ADS Packages
- `@atlaskit/tokens` - Design tokens
- `@atlaskit/primitives` - Layout components
- `@atlaskit/button` - Button component
- `@atlaskit/heading` - Typography
- `@atlaskit/css-reset` - Base styles
- `@atlaskit/app-provider` - Context provider

### Form Components
- `@atlaskit/form` - Form management
- `@atlaskit/textfield` - Text inputs
- `@atlaskit/select` - Dropdown selects
- `@atlaskit/checkbox` - Checkboxes

### Development
- `@atlaskit/platform-feature-flags` - Feature flag system
- React 18 + TypeScript + Vite

## 🎨 Design Tokens Used

- **Colors**: `color.text.accent.green`, `color.border`, `color.background.*`
- **Spacing**: `space.400`, `space.300`, `space.200`, etc.
- **Typography**: `font.size.*`, `font.weight.*`
- **Border Radius**: `border.radius.100`, `border.radius.200`

## 🧪 Try These Features

1. **Theme Toggle**: Click the 🌙/☀️ button to switch themes
2. **Form Validation**: Try submitting the form without required fields
3. **Responsive Layout**: Resize the window to see adaptive layout
4. **Form Interaction**: Fill out and submit the sample form
5. **Hot Reload**: Edit `App.tsx` and watch changes instantly

## 📚 Learn More

- [Atlassian Design System Documentation](https://atlassian.design/)
- [ADS Component Library](https://atlassian.design/components)
- [Design Tokens Reference](https://atlassian.design/foundations/design-tokens)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)

## 🤝 Contributing

This template demonstrates best practices for ADS integration. Feel free to:
- Add more ADS components
- Enhance the theme system
- Expand form functionality
- Improve accessibility features

---

**Built with ❤️ using Atlassian Design System**
