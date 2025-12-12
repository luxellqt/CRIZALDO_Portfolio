# Crizaldo Portfolio

A modern, visually stunning portfolio website built with React and Vite, showcasing projects, skills, and contact information. Designed with a cyberpunk/vapor aesthetic featuring smooth animations, glassmorphism effects, and responsive UI.

## Features

- **Hero Section** - Eye-catching landing area with animated profile image and gradient text
- **Flavor Profile (Skills)** - Interactive skill showcase including frontend, backend, styling, and database technologies
- **Custom Builds (Projects)** - Detailed project cards featuring SmartQueue, Leave Application System, and NSTP Portal
- **Contact Form** - Functional contact section with form inputs and social media links
- **Responsive Design** - Fully responsive across desktop and mobile devices
- **Smooth Animations** - CSS animations, hover effects, and gradient transitions
- **Dark Theme** - Modern dark UI with purple, teal, and white color scheme

## Tech Stack

- **Frontend**: React, Vite, Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite with HMR (Hot Module Replacement)
- **Styling**: Tailwind CSS with custom animations and glassmorphism effects
- **Linting**: ESLint

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/luxellqt/CRIZALDO_Portfolio.git
cd CRIZALDO_Portfolio1
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── App.jsx          # Main portfolio component
├── App.css          # Component-specific styles
├── main.jsx         # Entry point
├── index.css        # Global styles
└── assets/          # Images and static files
```

## Key Sections

1. **Navigation Bar** - Fixed navbar with smooth scroll links and mobile menu toggle
2. **Hero Section** - Introduction with profile image, brief bio, and call-to-action buttons
3. **Skills Section** - Four skill categories with progress bars and icons
4. **Projects Section** - Three featured projects with descriptions and tech stacks
5. **Contact Section** - Contact form and social media links (GitHub, Facebook)
6. **Footer** - Copyright information

## Customization

- Update social media links in the Contact section
- Modify skills and project details directly in `App.jsx`
- Adjust colors by changing the Tailwind color classes (currently using purple, teal, and white)
- Replace profile image at `src/assets/pic.png`

## Author

**Luxell John Crizaldo** - Computer Science Student
- GitHub: [@luxellqt](https://github.com/luxellqt)
- Facebook: [Luxell Crizaldo](https://www.facebook.com/luxellcrizaldo/)

## License

This project is open source and available under the MIT License.
