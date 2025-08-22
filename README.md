# AI Travel Concierge

A modern, AI-powered travel planning web application built with React, TypeScript, and Vite. This application helps travelers discover destinations, plan trips, and get personalized travel recommendations through an interactive chat interface.

## 🌟 Features

- **AI-Powered Chat Assistant**: Get personalized travel recommendations using OpenAI
- **Destination Discovery**: Browse curated destinations from Airtable database
- **Interactive Search**: Find destinations by category, location, or activity
- **Real-time Chat**: Instant responses with typing indicators and error handling
- **Responsive Design**: Beautiful UI that works on all devices
- **Modern Tech Stack**: Built with React 18, TypeScript, Tailwind CSS, and shadcn/ui

## 🏗️ Architecture

### Frontend
- **React 18** with TypeScript for type safety
- **Vite** for fast development and building
- **Tailwind CSS** for styling with custom design system
- **shadcn/ui** for accessible, reusable components
- **TanStack Query** for server state management
- **React Router** for client-side routing

### Backend
- **Express.js** API server
- **Airtable** integration for destination data
- **OpenAI** integration for AI-powered responses
- **CORS** enabled for cross-origin requests

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Airtable account and API key
- OpenAI API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MarkBojeHording/AI-Travel-Concierge.git
   cd AI-Travel-Concierge
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Edit `.env.local` and add your API keys:
   ```env
   # API Server Configuration
   PORT=3001
   
   # Airtable Configuration
   AIRTABLE_API_KEY=your_airtable_api_key_here
   AIRTABLE_BASE_ID=your_airtable_base_id_here
   
   # OpenAI Configuration
   OPENAI_API_KEY=your_openai_api_key_here
   
   # Frontend Configuration
   VITE_API_BASE_URL=http://localhost:3001
   ```

4. **Start the development servers**
   ```bash
   # Start both frontend and backend
   npm run dev:all
   
   # Or start them separately:
   # Frontend only
   npm run dev
   
   # Backend only
   npm run dev:server
   ```

5. **Open your browser**
   - Frontend: http://localhost:8080
   - Backend API: http://localhost:3001
   - Health check: http://localhost:3001/health

## 📊 Airtable Setup

Create a table called `Destinations` with the following fields:

| Field Name | Type | Description |
|------------|------|-------------|
| Name | Single line text | Destination name |
| Description | Long text | Destination description |
| Image | URL | Image URL |
| Category | Single select | Adventure, Cultural, Luxury, Nature, Scenic |
| Location | Single line text | Location/country |
| Rating | Number | Rating (0-5) |
| Duration | Single line text | Trip duration |
| Price | Single line text | Price range |

## 🔧 API Endpoints

### Destinations
- `GET /api/fetchDestinations` - Fetch all destinations from Airtable

### AI Chat
- `POST /api/generateResponse` - Generate AI response for user prompts

## 🎨 Customization

### Styling
The application uses a custom design system with:
- Custom color gradients (`gradient-ocean`, `gradient-sunset`, `gradient-tropical`)
- Custom shadows and animations
- Responsive breakpoints
- Dark mode support

### Components
All UI components are built with shadcn/ui and can be customized in `src/components/ui/`.

## 🚀 Deployment

### Vercel Deployment
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy!

### Environment Variables for Production
Make sure to set these in your deployment platform:
- `AIRTABLE_API_KEY`
- `AIRTABLE_BASE_ID`
- `OPENAI_API_KEY`
- `VITE_API_BASE_URL` (your production API URL)

## 🧪 Testing

The application includes:
- Error handling with fallback data
- Loading states and skeleton screens
- Responsive design testing
- API error recovery

## 📝 Development Scripts

```bash
npm run dev          # Start frontend only
npm run dev:server   # Start backend only
npm run dev:all      # Start both frontend and backend
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues:
1. Check the console for error messages
2. Verify your environment variables are set correctly
3. Ensure your API keys are valid
4. Check the API server is running

## 🔮 Future Enhancements

- [ ] User authentication
- [ ] Trip planning and booking
- [ ] Real-time chat with travel agents
- [ ] Mobile app version
- [ ] Advanced AI features
- [ ] Multi-language support
