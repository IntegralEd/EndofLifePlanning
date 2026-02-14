# WishesMadeClear.com

A minimal, static website for marketing in-person end of life planning workshops and capturing email signups.

## Brand Positioning

**Calm, caring, planful guidance** for adults of any age who want to reduce burden, prevent conflict, and leave clear instructions.

### Brand Personality

- **Steady and respectful**: Quiet confidence without urgency tactics
- **Practical, not clinical**: Focus on guidance, not professional advice
- **Warm, not sentimental**: Approachable but not emotional
- **Clear, not euphemistic**: Direct language about end of life planning

## Overview

This site helps people take proactive steps in end of life planning by offering in-person workshops that guide participants through documenting their wishes for medical directives, estate planning, financial accounts, and personal property.

### Visual Design

- **Low saturation backgrounds** (Linen Cream, Sage Mist) for readability
- **Deep plum and mulberry** accents communicate seriousness and trust
- **Generous spacing** and structured layouts (cards, sections)
- **WCAG AA compliant** color contrast throughout
- **Reduced motion support** for accessibility

## Features

- **Hero Section**: Clear value proposition and workshop description
- **Interactive Carousel**: 6 flip-card prompts addressing common questions
- **Misconceptions Section**: Addresses 4 common myths about end of life planning
- **Service Cards**: 4 workshop topic areas (Medical, Legal, Financial, Property)
- **Mailing List Signup**: Netlify form integration for email capture
- **Fully Responsive**: Mobile-first design that works on all devices
- **Accessible**: Semantic HTML, ARIA labels, keyboard navigation

## Design System

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| **Linen Cream** | `#FCFDDA` | Primary background |
| **Sage Mist** | `#E0ECCB` | Alternate section background |
| **Deep Plum** | `#40204D` | Primary brand color, headings |
| **Deep Mulberry** | `#602543` | Secondary brand, links |
| **Sage Dark** | `#536C29` | Buttons, supportive actions |
| **White** | `#FFFFFF` | Card surfaces |

All color combinations meet WCAG AA contrast requirements for accessibility.

### Typography

- **Headings**: [Newsreader](https://fonts.google.com/specimen/Newsreader) (serif, warm authority)
- **Body/UI**: [Source Sans 3](https://fonts.google.com/specimen/Source+Sans+3) (excellent readability)
- **Base size**: 18px body text with 1.65 line-height
- **Max content width**: 68 characters for optimal readability

### Component Guidelines

- **Cards**: 16-18px border radius, subtle shadows, structured layouts
- **Buttons**: Deep plum primary, sage for supportive actions
- **Focus states**: High-visibility rings using lavender accent
- **Motion**: Respects `prefers-reduced-motion` for accessibility

## Tech Stack

- **Astro 4.15**: Static site generator for optimal performance
- **TypeScript**: Type-safe content management
- **Netlify**: Hosting and form handling
- **Vanilla CSS**: No frameworks, just clean, maintainable styles
- **Google Fonts**: Newsreader + Source Sans 3

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

### Content Tone Guidelines

When editing copy, maintain the brand voice:

- ✅ **Use**: "Workshops guide you to..." language consistently
- ✅ **Use**: "Prepare drafts and decisions to finalize with licensed professionals"
- ❌ **Avoid**: "We provide professional advice" phrasing
- ❌ **Avoid**: Urgency tactics or sentimental language
- ❌ **Avoid**: Euphemisms - be clear and direct

Keep microcopy short, respectful, and practical.

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

### Standards Met
- ✅ **Semantic HTML**: Proper heading hierarchy, landmark regions
- ✅ **Keyboard navigation**: Arrow keys for carousel, tab/enter for all controls
- ✅ **ARIA labels**: Descriptive labels for all interactive elements
- ✅ **Color contrast**: All text meets WCAG AA minimum (4.5:1 for body, 3:1 for large text)
- ✅ **Focus indicators**: High-visibility focus rings on all interactive elements
- ✅ **Reduced motion**: Respects `prefers-reduced-motion` system setting
  - Carousel flip animation becomes instant reveal
  - Hover transforms disabled
  - Smooth scrolling removed

### Color Contrast Ratios

All text/background combinations exceed WCAG AA requirements:
- Deep Plum (#40204D) on Linen Cream (#FCFDDA): 11.5:1 ✓
- Deep Plum on White (#FFFFFF): 12.6:1 ✓
- White text on Deep Plum: 12.6:1 ✓
- White text on Sage Dark (#536C29): 4.9:1 ✓

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
