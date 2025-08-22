# AI Travel Concierge

A modern, AI-powered travel recommendation platform built with React, TypeScript, and cutting-edge web technologies. This application helps users discover amazing destinations and get personalized travel recommendations through an intelligent chat interface.

## 🌟 Features

### **AI-Powered Travel Assistant**
- **Intelligent Chat Interface**: Get personalized travel recommendations through natural conversation
- **OpenAI Integration**: Powered by GPT-3.5-turbo for intelligent responses
- **Real-time Recommendations**: Instant travel advice and destination suggestions

### **Destination Discovery**
- **Airtable Integration**: Real-time destination data from curated travel database
- **Category Filtering**: Browse destinations by Adventure, Cultural, Luxury, Nature, and Scenic
- **Interactive Cards**: Beautiful masonry layout with hover effects and social sharing
- **Rich Content**: Detailed descriptions, ratings, pricing, and location information

### **Modern User Experience**
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Hardware-accelerated hover effects and transitions
- **Professional UI**: Built with shadcn/ui components and Tailwind CSS
- **Social Sharing**: Share destinations across multiple platforms

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Airtable account and API key
- OpenAI API key

### Installation

```bash
# Clone the repository
git clone https://github.com/MarkBojeHording/AI-Travel-Concierge.git
cd AI-Travel-Concierge

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your API keys
```

### Environment Variables

Create a `.env.local` file with the following variables:

```env
# Airtable Configuration
NEXT_PUBLIC_AIRTABLE_ACCESS_TOKEN=your_airtable_access_token
NEXT_PUBLIC_AIRTABLE_BASE_ID=your_airtable_base_id

# OpenAI Configuration
OPENAI_API_KEY=your_openai_api_key

# Server Configuration
PORT=3001
VITE_API_BASE_URL=http://localhost:3001
```

### Running the Application

```bash
# Start both frontend and backend servers
npm run dev:all

# Or start them separately
npm run dev          # Frontend only (Vite)
npm run dev:server   # Backend only (Express)
```

The application will be available at:
- **Frontend**: http://localhost:8081 (or next available port)
- **Backend API**: http://localhost:3001

## 🏗️ Architecture

### **Frontend (React + TypeScript)**
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui with Radix UI primitives
- **State Management**: TanStack Query for server state
- **Routing**: React Router DOM

### **Backend (Node.js + Express)**
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js with CORS support
- **API Integration**: Airtable SDK and OpenAI SDK
- **Development**: tsx for TypeScript execution

### **External Services**
- **Airtable**: Destination database and content management
- **OpenAI**: AI-powered travel recommendations
- **Vercel**: Deployment platform (recommended)

## 📁 Project Structure

```
AI-Travel-Concierge/
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # shadcn/ui components
│   │   ├── ChatWidget.tsx  # AI chat interface
│   │   ├── MasonryGrid.tsx # Destination grid
│   │   └── ...
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions and API client
│   ├── pages/              # Page components
│   └── ...
├── server/                 # Backend API
│   ├── config/             # Service configurations
│   ├── routes/             # API route handlers
│   └── index.ts           # Express server
├── public/                 # Static assets
└── ...
```

## 🔧 API Endpoints

### **Destinations**
- `GET /api/fetchDestinations` - Fetch all destinations from Airtable

### **AI Chat**
- `POST /api/generateResponse` - Generate AI travel recommendations

### **Health Check**
- `GET /health` - Server health status
- `GET /config` - Configuration status (debug)

## 🎨 Customization

### **Styling**
The application uses a custom design system with travel-themed colors and gradients:
- Ocean gradients for primary elements
- Tropical gradients for accents
- Sunset gradients for highlights
- Custom shadows and animations

### **Adding Destinations**
1. Set up an Airtable base with a "Destinations" table
2. Include fields: name, location, description, image, rating, duration, price, category
3. Update your environment variables with the new base ID

### **AI Customization**
- Modify the system prompt in `server/routes/ai.ts`
- Adjust response length and creativity settings
- Add custom travel knowledge or preferences

## 🚀 Deployment

### **Vercel (Recommended)**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard
```

### **Other Platforms**
The application can be deployed to any Node.js hosting platform:
- Netlify
- Railway
- Heroku
- DigitalOcean App Platform

## 🧪 Testing

```bash
# Run type checking
npm run type-check

# Validate configuration
npm run validate

# Test API endpoints
curl http://localhost:3001/health
curl http://localhost:3001/api/fetchDestinations
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Create an issue in this repository
- Check the documentation in the `/docs` folder
- Review the API endpoints and configuration

---

**Built with ❤️ for travelers worldwide**
