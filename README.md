# Plumbing Service Website Template

A modern, responsive website template for plumbing services built with Next.js, TypeScript, and Chakra UI.

## Features

- 📱 Fully responsive design
- 🎨 Modern UI with Chakra UI
- ⚡ Fast performance with Next.js 15
- 🔧 5 complete pages (Home, Services, About, Projects, Contact)
- 🌙 Dark mode support
- ✨ Smooth animations with Framer Motion
- 📞 Emergency service CTA buttons
- 💼 Professional business presentation

## Pages Included

1. **Home Page** - Hero section, services overview, testimonials
2. **Services Page** - Detailed service offerings with pricing
3. **About Page** - Company history, team, values, and achievements
4. **Projects Page** - Portfolio showcase with filtering
5. **Contact Page** - Contact form, business hours, and location

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
cd plumbing-template
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Business Information

Edit the `demoBusinessInfo` object in `app/page.tsx` to customize:
- Business name and tagline
- Contact information
- Address and location
- Business hours
- Social media links

### Colors and Theme

Modify the theme in `app/providers.tsx` to match your brand colors.

### Content

All page content can be edited in the respective component files:
- `components/templates/plumbing/pages/HomePage.tsx`
- `components/templates/plumbing/pages/ServicesPage.tsx`
- `components/templates/plumbing/pages/AboutPage.tsx`
- `components/templates/plumbing/pages/ProjectsPage.tsx`
- `components/templates/plumbing/pages/ContactPage.tsx`

## Building for Production

```bash
npm run build
npm run start
# or
yarn build
yarn start
```

## Deployment

This template can be deployed on any platform that supports Next.js:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Custom server

## Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Chakra UI** - Component library
- **Framer Motion** - Animations
- **Lucide React** - Icons

## License

This template is available for commercial and personal use.

## Support

For questions or support, please contact [your-email@example.com]# sync-business
