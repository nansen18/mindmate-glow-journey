
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SplashScreen from "./pages/SplashScreen";
import OnboardingFlow from "./pages/OnboardingFlow";
import Dashboard from "./pages/Dashboard";
import MoodTracker from "./pages/MoodTracker";
import AIBuddyChat from "./pages/AIBuddyChat";
import ReflectionJournal from "./pages/ReflectionJournal";
import GratitudeTracker from "./pages/GratitudeTracker";
import DoodleSpace from "./pages/DoodleSpace";
import PrivateNotes from "./pages/PrivateNotes";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div className="floating-bubbles">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/onboarding" element={<OnboardingFlow />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/mood-tracker" element={<MoodTracker />} />
          <Route path="/ai-chat" element={<AIBuddyChat />} />
          <Route path="/reflection-journal" element={<ReflectionJournal />} />
          <Route path="/gratitude-tracker" element={<GratitudeTracker />} />
          <Route path="/doodle-space" element={<DoodleSpace />} />
          <Route path="/private-notes" element={<PrivateNotes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
