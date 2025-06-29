# Orascom Construction - Modern Next.js Demo

A modern, responsive recreation of the Orascom Construction website built with Next.js, featuring advanced animations, interactive components, and pixel-perfect design implementation.

## 🚀 Live Demo

Visit the live demonstration: [Orascom Demo](https://github.com/Abdoomar2002/Orascom-Demo.git)

## 📋 Project Overview

This project represents a complete modern web implementation of the Orascom Construction corporate website, transforming the original WordPress-based site into a high-performance Next.js application with enhanced user experience and cutting-edge web technologies.

### 🎯 Key Features

- **Modern Next.js Architecture**: Built with Next.js 15.3.4 and React
- **Interactive Carousel**: Dynamic Swiper.js implementation with auto-play and manual navigation
- **Advanced Animations**: GSAP-powered scroll-triggered animations and smooth transitions
- **Responsive Design**: Fully responsive layout optimized for all device sizes
- **Component-Based Architecture**: Modular, reusable React components
- **Performance Optimized**: Fast loading times and optimized asset delivery
- **Professional Styling**: Pixel-perfect recreation of the original design

## 🛠️ Technology Stack

- **Frontend Framework**: Next.js 15.3.4
- **UI Library**: React 18+
- **Styling**: CSS Modules + Custom CSS
- **Animations**: GSAP + ScrollTrigger
- **Carousel**: Swiper.js
- **Build Tool**: Turbopack
- **Package Manager**: npm
- **Deployment**: Vercel-ready

## 📦 Dependencies

### Core Dependencies
```json
{
  "next": "15.3.4",
  "react": "^18",
  "react-dom": "^18",
  "swiper": "^11.1.15",
  "gsap": "^3.12.8",
  "@gsap/react": "^2.1.1"
}
```

### Development Dependencies
```json
{
  "eslint": "^8",
  "eslint-config-next": "15.3.4"
}
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Abdoomar2002/Orascom-Demo.git
   cd Orascom-Demo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint code analysis

## 🏗️ Project Structure

```
orasco/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── globals.css         # Global styles
│   │   ├── layout.js          # Root layout component
│   │   ├── page.js            # Home page component
│   │   ├── page.module.css    # Page-specific styles
│   │   └── orascom-main.css   # Main styling file
│   ├── components/            # Reusable React components
│   │   ├── AnimatedSection.js # GSAP animation wrapper
│   │   ├── Carousel.js        # Interactive carousel
│   │   └── ui/               # UI components
│   ├── hooks/                # Custom React hooks
│   └── lib/                  # Utility functions and constants
├── public/                   # Static assets
├── Old/                     # Original WordPress files (reference)
├── ARCHITECTURE.md          # Technical architecture documentation
├── IMPLEMENTATION_SUMMARY.md # Implementation details
└── README.md               # Project documentation
```

## 🎨 Design Implementation

### Core Sections Implemented

1. **Hero Carousel**
   - Auto-playing slideshow with 5-second intervals
   - Manual navigation with custom prev/next buttons
   - Dynamic progress bar based on slide index
   - Fade transitions between slides
   - Responsive background images

2. **Who We Are Section**
   - Animated content on scroll
   - Responsive image layout
   - Company overview and call-to-action

3. **News Section**
   - Article grid with hover effects
   - Dynamic image scaling
   - Professional typography

4. **Services Section**
   - Interactive service tiles
   - Background image carousel
   - Focus states and hover animations

5. **Featured Projects**
   - Project showcase with overlay effects
   - Image hover transformations
   - Professional project listings

### Animation Features

- **Scroll-triggered animations** using GSAP ScrollTrigger
- **Bidirectional scroll support** (up and down)
- **Smooth transitions** with easing functions
- **Progressive enhancement** for better accessibility

## 🔧 Technical Highlights

### Performance Optimizations
- **Turbopack integration** for faster development builds
- **Component lazy loading** for optimal performance
- **Optimized image delivery** with Next.js Image component
- **CSS optimization** with modular styling approach

### Code Quality
- **ESLint configuration** for code consistency
- **Modular component architecture** for maintainability
- **Custom hooks** for reusable logic
- **TypeScript-ready structure** for future enhancement

### Browser Compatibility
- **Modern browser support** (Chrome, Firefox, Safari, Edge)
- **Progressive enhancement** for older browsers
- **Responsive design** for all device sizes
- **Cross-platform compatibility**

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 992px
- **Desktop**: 992px - 1200px
- **Large Desktop**: 1200px+

## 🎯 Key Achievements

✅ **Pixel-perfect recreation** of original design  
✅ **Modern tech stack implementation**  
✅ **Enhanced user experience** with smooth animations  
✅ **Performance optimization** with Next.js  
✅ **Responsive design** for all devices  
✅ **Component modularity** for easy maintenance  
✅ **Professional code structure** and documentation  

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Guidelines
1. Follow the existing code style and structure
2. Ensure responsive design compatibility
3. Test animations across different browsers
4. Update documentation for new features

## 📄 License

This project is for demonstration purposes. Please respect Orascom Construction's intellectual property rights.

## 🔗 Links

- **Repository**: [https://github.com/Abdoomar2002/Orascom-Demo.git](https://github.com/Abdoomar2002/Orascom-Demo.git)
- **Original Orascom Website**: [https://orascom.com](https://orascom.com)
- **Next.js Documentation**: [https://nextjs.org/docs](https://nextjs.org/docs)
- **GSAP Documentation**: [https://greensock.com/docs/](https://greensock.com/docs/)

---

**Built with ❤️ using Next.js and modern web technologies**
