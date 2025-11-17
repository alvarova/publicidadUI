# PublicidadUI - Angular 20 Starter Kit

Modern Angular 20.x starter kit with PrimeNG 20.2.0, Tailwind CSS v3, and essential UI libraries.

## Features

### Core Technologies
- **Angular 20.3.x** - Latest Angular framework with standalone components
- **PrimeNG 20.2.0** - Comprehensive UI component library
- **@primeng/themes** - Modern theming system with Aura preset
- **Tailwind CSS v3** - Utility-first CSS framework
- **tailwindcss-primeui** - Seamless integration between Tailwind and PrimeNG

### UI Components & Libraries
- **ng-apexcharts** - Beautiful interactive charts
- **ng-block-ui** - Loading states and block UI functionality
- **ngx-sonner** - Modern toast notifications
- **PrimeIcons** - Icon library
- **PrimeFlex** - Utility CSS framework

### Architecture
- ✅ Standalone components
- ✅ Lazy loading with route-based code splitting
- ✅ Custom PrimeNG theme compatible with Tailwind CSS
- ✅ Responsive sidebar and topbar layout
- ✅ Functional dashboard with real examples

## Prerequisites

- Node.js 20.x or higher
- npm 10.x or higher

## Installation

```bash
# Clone the repository
git clone <repository-url>
cd publicidadUI

# Install dependencies
npm install
```

## Development

```bash
# Start development server
npm start

# The application will be available at http://localhost:4200
```

## Build

```bash
# Build for production
npm run build

# Output will be in dist/publicidadUI
```

## Testing

```bash
# Run unit tests
npm test
```

## Project Structure

```
src/
├── app/
│   ├── layout/
│   │   ├── sidebar/          # Sidebar navigation component
│   │   └── topbar/           # Top navigation bar component
│   ├── pages/
│   │   └── dashboard/        # Dashboard page with examples
│   ├── shared/
│   │   └── services/         # Shared services
│   ├── app.ts                # Root component
│   ├── app.config.ts         # Application configuration
│   └── app.routes.ts         # Route definitions
├── styles.css                # Global styles with Tailwind
└── index.html                # HTML entry point
```

## Features Included

### Dashboard Page
The dashboard includes working examples of:

1. **Statistics Cards** - Display key metrics with icons
2. **Toast Notifications** - Success, error, and info toasts using ngx-sonner
3. **Charts** - Interactive charts using ng-apexcharts:
   - Area chart for sales trends
   - Pie chart for category distribution
4. **Data Table** - PrimeNG table with:
   - Product inventory
   - Status tags
   - Action buttons
5. **Block UI** - Loading state demonstration
6. **Responsive Layout** - Sidebar and topbar navigation

### Styling
- Tailwind CSS utility classes throughout
- Custom PrimeNG theme using Aura preset
- PrimeIcons for icons
- PrimeFlex for additional utilities
- Responsive design out of the box

## Customization

### Theme
Edit `src/app/app.config.ts` to customize the PrimeNG theme:

```typescript
providePrimeNG({
  theme: {
    preset: Aura,  // Change to different preset
    options: {
      // Customize options
    }
  }
})
```

### Tailwind Configuration
Modify `tailwind.config.js` to customize Tailwind:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        // Add custom colors
      }
    }
  }
}
```

### Colors
Update CSS variables in `src/styles.css`:

```css
:root {
  --primary-color: #3b82f6;
  --surface-ground: #f8fafc;
  --surface-card: #ffffff;
  --text-color: #1e293b;
  --text-color-secondary: #64748b;
}
```

## Libraries Documentation

- [Angular](https://angular.dev)
- [PrimeNG](https://primeng.org)
- [Tailwind CSS](https://tailwindcss.com)
- [ApexCharts](https://apexcharts.com)
- [ngx-sonner](https://github.com/tutkli/ngx-sonner)
- [ng-block-ui](https://github.com/kuuurt13/ng-block-ui)

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
