
# 🌿 MindMate - Your Personal Mental Wellness Companion

A compassionate mental health and wellness app designed to provide daily emotional support, mood tracking, and crisis resources in a safe, cozy digital space.

## 🎯 Project Overview

MindMate is a comprehensive mental wellness application built for individuals seeking daily emotional support and mental health resources. The app combines mood tracking, AI-powered conversations, journaling, gratitude practices, and crisis intervention resources in an intuitive, calming interface.

### 🏆 Hackathon Submission Features

- **Mood Tracking & Analytics** - Visual mood journaling with progress insights
- **AI Wellness Buddy** - Supportive conversational AI for emotional guidance
- **Reflection Journal** - Private space for thoughts and self-reflection
- **Gratitude Garden** - Daily gratitude practice with visual rewards
- **Mindful Doodles** - Creative expression through digital art therapy
- **Crisis Resources** - 24/7 emergency support and helpline access
- **Achievement System** - Milestone badges for consistent wellness practices
- **Profile & Progress** - Personal stats, streaks, and goal tracking

## 🛠 Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom gradients and animations
- **UI Components**: Shadcn/UI component library
- **Icons**: Lucide React icon pack
- **Routing**: React Router DOM
- **State Management**: React Hooks + TanStack Query
- **Notifications**: Sonner toast notifications

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd mindmate-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:8080` to view the application

### Building for Production

```bash
npm run build
# or
yarn build
```

The built files will be available in the `dist/` directory.

## 📱 App Navigation & Features

### Core Pages

- **`/`** - Splash Screen with app introduction
- **`/onboarding`** - User onboarding flow
- **`/dashboard`** - Main dashboard with quick actions
- **`/mood-tracker`** - Mood logging and analytics
- **`/ai-chat`** - AI wellness conversations
- **`/reflection-journal`** - Private journaling space
- **`/gratitude-tracker`** - Daily gratitude practice
- **`/doodle-space`** - Digital art therapy
- **`/private-notes`** - Secure note-taking
- **`/challenges`** - Wellness challenges and goals
- **`/crisis-resources`** - Emergency support resources
- **`/profile`** - User profile and statistics

### Key Components

- **MilestoneBadge** - Achievement system for user progress
- **Floating Bubbles** - Ambient background animations
- **Toast Notifications** - User feedback system
- **Responsive Design** - Mobile-first approach

## 🎨 Design System

### Color Palette
- **Primary**: Soft pastels with calming gradients
- **Accent Colors**: Bubblegum pink, Electric mint, Cosmic lilac
- **Background**: Warm whites and subtle gradients
- **Text**: Graphite for high contrast readability

### Typography
- Clean, readable fonts optimized for wellness content
- Consistent sizing hierarchy
- High contrast for accessibility

### Animations
- Gentle floating animations
- Smooth transitions between states
- Calming pulse effects for interactive elements

## 🔒 Privacy & Security

- All user data stored locally in browser
- No external data transmission for personal content
- Crisis resources connect to verified mental health services
- Privacy-first approach to sensitive mental health data

## 📊 User Experience Features

### Accessibility
- High contrast color combinations
- Screen reader compatible
- Keyboard navigation support
- Touch-friendly interface design

### Responsive Design
- Mobile-first development approach
- Tablet and desktop optimization
- Consistent experience across devices

### Performance
- Fast loading times with Vite bundling
- Optimized images and assets
- Efficient React component structure

## 🆘 Crisis Support Integration

The app includes immediate access to:
- National Suicide Prevention Lifeline (988)
- Crisis Text Line (741741)
- SAMHSA National Helpline
- National Domestic Violence Hotline
- Emergency services (911)

All crisis resources are tested and verified for accessibility.

## 🏗 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Shadcn UI components
│   └── MilestoneBadge.tsx
├── pages/              # Route components
│   ├── Dashboard.tsx
│   ├── MoodTracker.tsx
│   ├── AIBuddyChat.tsx
│   ├── CrisisResources.tsx
│   └── ...
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── App.tsx             # Main app component
├── main.tsx            # App entry point
└── index.css           # Global styles
```

## 🧪 Testing & Quality Assurance

### Manual Testing Checklist
- [ ] All navigation buttons function correctly
- [ ] Mood tracking saves and displays data
- [ ] Crisis resources open correct phone/text actions
- [ ] Profile page displays user information
- [ ] All animations perform smoothly
- [ ] Responsive design works on mobile/tablet/desktop

### Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge

## 🚀 Deployment

The app is configured for easy deployment on:
- **Vercel** (recommended for React apps)
- **Netlify**
- **GitHub Pages**
- Any static hosting service

### Environment Variables
No environment variables required for basic functionality.

## 🎯 Future Enhancements

- Backend integration for data persistence
- User authentication system
- Advanced AI conversation capabilities
- Social features for peer support
- Integration with wearable devices
- Multilingual support

## 📝 License

This project is created for hackathon submission and educational purposes.

---

*MindMate - Because mental health matters, and you're never alone in your journey* 🌟
