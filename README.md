# Climax Learning Platform

DRM이 적용된 프리미엄 온라인 강의 판매 플랫폼

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Video**: Vimeo Premium (DRM)
- **Storage**: Cloudflare R2
- **Payment**: 토스페이먼츠
- **Hosting**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/climax-web.git
cd climax-web
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your actual API keys.

4. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
climax-web/
├── src/
│   ├── app/              # Next.js app router pages
│   ├── components/       # React components
│   │   ├── landing/      # Landing page sections
│   │   ├── layout/       # Layout components
│   │   └── ui/           # shadcn/ui components
│   └── lib/              # Utility functions
├── public/               # Static assets
└── PROJECT_PLAN.md       # Detailed project plan
```

## Environment Variables

Required environment variables are documented in `.env.local.example`.

Key services to set up:
- Supabase (Database & Auth)
- Vimeo Premium (Video DRM)
- Cloudflare R2 (File Storage)
- Toss Payments (Payment Gateway)

## Development Roadmap

See [PROJECT_PLAN.md](./PROJECT_PLAN.md) for the complete 6-step development plan.

### Current Progress

- [x] Step 1: Project Setup + Landing Page (Week 1-2)
- [ ] Step 2: Domain & Deployment (Week 3)
- [ ] Step 3: Database & Authentication (Week 4-5)
- [ ] Step 4: External Services & Payment (Week 6-8)
- [ ] Step 5: Admin Panel (Week 9-11)
- [ ] Step 6: Final Review & Launch (Week 12)

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## License

Private - All rights reserved

## Contact

For questions or support, contact: support@climax.co.kr
