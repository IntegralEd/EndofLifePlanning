# WishesMadeClear.com

A minimal, static website for marketing in-person end of life planning workshops and capturing email signups.

## Overview

This site helps people take proactive steps in end of life planning by offering in-person workshops that guide participants through documenting their wishes for medical directives, estate planning, financial accounts, and personal property.

## Features

- **Hero Section**: Clear value proposition and workshop description
- **Interactive Carousel**: 6 flip-card prompts addressing common questions
- **Misconceptions Section**: Addresses 4 common myths about end of life planning
- **Service Cards**: 4 workshop topic areas (Medical, Legal, Financial, Property)
- **Mailing List Signup**: Netlify form integration for email capture
- **Fully Responsive**: Mobile-first design that works on all devices
- **Accessible**: Semantic HTML, ARIA labels, keyboard navigation

## Tech Stack

- **Astro 4.15**: Static site generator for optimal performance
- **TypeScript**: Type-safe content management
- **Netlify**: Hosting and form handling
- **Vanilla CSS**: No frameworks, just clean, maintainable styles

## Project Structure

```
EndofLifePlanning/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── CarouselCards.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── MailingListCTA.astro
│   │   ├── Misconceptions.astro
│   │   └── ServiceCards.astro
│   ├── content/             # Site copy and data
│   │   └── siteCopy.ts
│   ├── layouts/             # Page templates
│   │   └── Layout.astro
│   ├── pages/               # Routes
│   │   └── index.astro
│   └── styles/              # Global styles
│       ├── base.css
│       └── theme.css
├── astro.config.mjs         # Astro configuration
├── netlify.toml             # Netlify build settings
├── package.json
└── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/IntegralEd/EndofLifePlanning.git
cd EndofLifePlanning
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:4321`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (output to `dist/`)
- `npm run preview` - Preview production build locally

## Content Management

All site copy lives in `src/content/siteCopy.ts` for easy editing. No CMS required.

To update content:
1. Edit the appropriate section in `siteCopy.ts`
2. Save the file
3. Changes will hot-reload in dev mode

## Form Handling

The mailing list signup form uses Netlify Forms:
- No backend code required
- Submissions appear in Netlify dashboard
- Spam protection via honeypot field
- Can integrate with email services (Mailchimp, ConvertKit, etc.)

### Form Setup on Netlify

1. Deploy site to Netlify
2. Form submissions will appear in **Site Settings → Forms**
3. Configure email notifications in Netlify dashboard
4. Optional: Add integrations to send data to email marketing platforms

## Deployment

### Deploy to Netlify

1. Push code to GitHub repository
2. Connect repository to Netlify
3. Build settings are pre-configured in `netlify.toml`
4. Site will auto-deploy on every push to main branch

**Build Command**: `npm run build`
**Publish Directory**: `dist`

### Custom Domain

To use `wishesmadeclear.com`:
1. Add domain in Netlify dashboard
2. Update DNS records with your registrar
3. Netlify will provision SSL certificate automatically

## Accessibility

This site follows WCAG 2.1 Level AA guidelines:
- Semantic HTML structure
- Keyboard navigation support (arrow keys for carousel)
- ARIA labels for interactive elements
- Color contrast ratios meet accessibility standards
- Focus indicators for all interactive elements

## Browser Support

- Chrome, Firefox, Safari, Edge (last 2 versions)
- Mobile Safari, Chrome Mobile
- Graceful degradation for older browsers

## Future Enhancements

- [ ] Add workshop schedule/calendar
- [ ] Location-based workshop finder
- [ ] Testimonials section
- [ ] FAQ page
- [ ] Blog for end of life planning resources
- [ ] Multi-language support
- [ ] Analytics integration

## License

UNLICENSED - Internal use only

---

**Organization**: Integral Ed Services
**Contact**: For questions about workshops, visit the site or email info@wishesmadeclear.com
**Last Updated**: February 2026
