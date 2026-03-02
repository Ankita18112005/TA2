# Team Ayan - Music Portfolio Website

A modern, responsive music portfolio website for Team Ayan built with Next.js 14, React, and Tailwind CSS.

## Features

- **Home Page**: Hero section with featured works and value propositions
- **Portfolio Page**: Showcase of projects and services with filtering
- **Our Team Page**: Meet the talented team members with their bios and skills
- **Contact Page**: Contact form with services and FAQ section
- **Responsive Design**: Beautiful UI that works on all devices
- **Modern Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: React functional components with hooks
- **Package Manager**: npm

## Project Structure

```
team-ayan-music-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with Header & Footer
│   ├── page.tsx            # Home page
│   ├── team/
│   │   └── page.tsx        # Our Team page
│   ├── portfolio/
│   │   └── page.tsx        # Portfolio & Services page
│   └── contact/
│       └── page.tsx        # Contact & Form page
├── components/
│   ├── Header.tsx          # Navigation header
│   └── Footer.tsx          # Footer component
├── styles/
│   └── globals.css         # Global styles
├── public/                 # Static assets
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript config
├── tailwind.config.js      # Tailwind CSS config
├── next.config.js          # Next.js config
└── postcss.config.js       # PostCSS config
```

## Installation

1. **Navigate to project directory**
   ```bash
   cd "team ayan 2"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   Visit [http://localhost:3000](http://localhost:3000)

## Available Routes

- `/` - Home page
- `/portfolio` - Portfolio & Services
- `/team` - Our Team page
- `/contact` - Contact & Inquiries

## Building for Production

```bash
npm run build
npm start
```

## Customization

### Update Team Members
Edit the `teamMembers` array in `/app/team/page.tsx` to add/modify team members.

### Update Portfolio Projects
Edit the `projects` array in `/app/portfolio/page.tsx` to showcase your work.

### Change Colors
Edit color scheme in `tailwind.config.js`:
- `primary`: Main color (currently black)
- `secondary`: Secondary color (currently blue)
- `accent`: Highlight color (currently gold)

### Update Contact Information
Edit contact details in `/app/contact/page.tsx`:
- Email addresses
- Phone numbers
- Location details

## Features Breakdown

### Header Component
- Sticky navigation with responsive mobile menu
- Logo with branding
- Links to all main pages

### Home Page
- Hero section with call-to-action buttons
- Featured works showcase
- Why choose us section
- Contact CTA

### Team Page
- Team member cards with photos, roles, and skills
- Team values section
- Collaboration CTA

### Portfolio Page
- Project showcase with categories
- Service offerings
- Stats/achievements section
- Project CTA

### Contact Page
- Contact information cards
- Contact form with validation
- FAQ section
- Map placeholder

## Future Enhancements

- Add image uploads for team members and projects
- Implement backend for form submission
- Add blog section
- Add audio player for music samples
- Add testimonials/reviews section
- SEO optimization
- Analytics integration

## License

This project is proprietary to Team Ayan.

## Support

For questions or support, contact us at info@teamayan.com

---

**Built with ❤️ for Team Ayan**
