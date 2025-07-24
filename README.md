# FlickzWithFitz - Photography Portfolio

A modern, responsive photography portfolio website for professional photographer Cameron Fitzsimmons, built with Next.js 14 and featuring stunning animations, optimized image galleries, and a seamless user experience.

## 🌟 Features

### ✨ Core Features
- **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Image Gallery** - Optimized photo display with lightbox functionality
- **Service Showcase** - Detailed photography service offerings
- **Contact System** - Interactive contact forms and information
- **Performance Optimized** - Fast loading with Next.js Image optimization

### 📱 Mobile Optimizations
- Touch-friendly navigation
- Optimized image loading and display
- Mobile-first responsive design
- Smooth animations and transitions

### 🎨 Design Features
- Custom color scheme with purple accent colors
- Framer Motion animations
- Glass morphism effects
- Professional typography
- Dark theme design

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Intersection Observer** - Viewport-based animations

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **npm** - Package management

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/cameron-portfolio.git
   cd cameron-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
cameron-portfolio/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── portfolio/         # Portfolio gallery page
│   ├── services/          # Services page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Home page
├── components/            # Reusable React components
│   ├── Footer.tsx         # Site footer
│   ├── GalleryGrid.tsx    # Photo gallery grid
│   ├── Hero.tsx           # Hero section
│   ├── MobileMenu.tsx     # Mobile navigation
│   ├── Navbar.tsx         # Navigation bar
│   ├── ServicesList.tsx   # Services display
│   └── TestimonialCarousel.tsx
├── data/                  # Static data and content
│   ├── about.ts           # About page content
│   ├── photos.ts          # Photo gallery data
│   ├── services.ts        # Services information
│   └── testimonials.ts    # Client testimonials
├── public/                # Static assets
│   ├── photos/            # Photography portfolio images
│   └── icons/             # Site icons and favicon
└── ...config files
```

## 🎯 Key Pages

### Home Page
- Hero section with animated elements
- Featured photography gallery
- Services overview
- Client testimonials
- About section with contact information

### Portfolio
- Complete photo gallery
- Responsive grid layout
- Lightbox image viewer
- Mobile-optimized display

### Services
- Detailed service packages
- Pricing information
- Feature comparisons
- Contact call-to-actions

### About
- Photographer bio and story
- Professional experience
- Contact information
- Social media links

### Contact
- Interactive contact form
- Contact information
- Location details
- Social media links

## 📸 Adding New Photos

1. Add images to `public/photos/` directory
2. Update `data/photos.ts` with new photo entries:

```typescript
{
  id: 'unique-id',
  src: '/photos/your-image.jpg',
  alt: 'Description of photo',
  category: 'portrait', // or 'landscape', 'event', etc.
  featured: false // set to true for homepage display
}
```

## 🔧 Customization

### Colors
Update the color scheme in `tailwind.config.js`:

```javascript
colors: {
  purple55: '#8B5CF6',  // Primary purple
  dark03: '#0F0F0F',    // Dark backgrounds
  // ... other colors
}
```

### Content
- **About information**: Edit `data/about.ts`
- **Services**: Modify `data/services.ts`
- **Testimonials**: Update `data/testimonials.ts`

### Styling
- Global styles: `app/globals.css`
- Component-specific styles: Individual component files
- Tailwind utilities: Used throughout components

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically build and deploy
3. Configure domain if needed

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- AWS Amplify
- DigitalOcean App Platform

## 📱 Mobile Features

- **Responsive Navigation** - Hamburger menu with smooth animations
- **Touch Optimizations** - Optimized for touch interactions
- **Image Loading** - Progressive loading with blur placeholders
- **Performance** - Optimized bundle size and lazy loading

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Cameron Fitzsimmons - FlickzWithFitz**
- Email: flickzwithfitz@outlook.com
- Instagram: [@flickzwithfitz](https://www.instagram.com/flickzwithfitz/?utm_source=ig_web_button_share_sheet)

## 🙏 Acknowledgments

- Built with Next.js and modern web technologies
- Design inspired by contemporary photography portfolio trends
- Optimized for performance and accessibility
- Icons and animations from various open-source libraries

---

**⭐ If you found this project helpful, please consider giving it a star!** 