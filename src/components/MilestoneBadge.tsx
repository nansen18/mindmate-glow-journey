
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Star, Award, Heart, Sparkles } from "lucide-react";

interface MilestoneBadgeProps {
  type: "reflection" | "gratitude" | "mood" | "consistency";
  count: number;
  className?: string;
}

const MilestoneBadge = ({ type, count, className = "" }: MilestoneBadgeProps) => {
  const [showAnimation, setShowAnimation] = useState(false);

  const milestones = {
    reflection: [1, 3, 7, 14, 30],
    gratitude: [1, 5, 10, 21, 50],
    mood: [1, 7, 14, 30, 60],
    consistency: [3, 7, 14, 21, 30]
  };

  const getMilestoneLevel = () => {
    const levels = milestones[type];
    return levels.filter(level => count >= level).length;
  };

  const getNextMilestone = () => {
    const levels = milestones[type];
    return levels.find(level => count < level) || levels[levels.length - 1];
  };

  const getBadgeInfo = () => {
    const level = getMilestoneLevel();
    const configs = {
      reflection: {
        icon: Sparkles,
        colors: ["from-lavender-mist to-cosmic-lilac", "from-cosmic-lilac to-bubblegum-pink", "from-bubblegum-pink to-sunshine-peach"],
        titles: ["Thoughtful Soul", "Deep Thinker", "Wisdom Seeker", "Reflection Master", "Mindful Sage"]
      },
      gratitude: {
        icon: Heart,
        colors: ["from-sunshine-peach to-lemon-zest", "from-bubblegum-pink to-sunshine-peach", "from-electric-mint to-sky-glow"],
        titles: ["Grateful Heart", "Thankful Spirit", "Appreciation Angel", "Gratitude Guru", "Blessing Counter"]
      },
      mood: {
        icon: Star,
        colors: ["from-sky-glow to-electric-mint", "from-electric-mint to-sunshine-peach", "from-lavender-mist to-cosmic-lilac"],
        titles: ["Mood Tracker", "Feeling Explorer", "Emotion Expert", "Mood Master", "Feeling Sage"]
      },
      consistency: {
        icon: Award,
        colors: ["from-lemon-zest to-sunshine-peach", "from-sunshine-peach to-bubblegum-pink", "from-cosmic-lilac to-lavender-mist"],
        titles: ["Consistent Star", "Daily Champion", "Habit Hero", "Routine Royalty", "Consistency King/Queen"]
      }
    };

    const config = configs[type];
    const colorIndex = Math.min(level - 1, config.colors.length - 1);
    
    return {
      icon: config.icon,
      color: level > 0 ? config.colors[colorIndex] : "from-gray-200 to-gray-300",
      title: level > 0 ? config.titles[level - 1] : "Getting Started",
      level
    };
  };

  useEffect(() => {
    if (milestones[type].includes(count)) {
      setShowAnimation(true);
      setTimeout(() => setShowAnimation(false), 3000);
    }
  }, [count, type]);

  const badgeInfo = getBadgeInfo();
  const Icon = badgeInfo.icon;

  if (badgeInfo.level === 0) return null;

  return (
    <div className={`relative ${className}`}>
      {showAnimation && (
        <div className="absolute -inset-2 animate-ping">
          <div className="absolute inset-0 bg-gradient-to-r from-electric-mint/50 to-cosmic-lilac/50 rounded-full"></div>
        </div>
      )}
      
      <Badge 
        className={`bg-gradient-to-r ${badgeInfo.color} text-white border-0 px-3 py-1 text-xs font-semibold shadow-lg hover:scale-105 transition-transform duration-300`}
      >
        <Icon className="w-3 h-3 mr-1" />
        {badgeInfo.title}
        {showAnimation && (
          <span className="ml-1 animate-bounce">✨</span>
        )}
      </Badge>

      {showAnimation && (
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs bg-white/90 px-2 py-1 rounded-lg shadow-lg animate-fade-in">
          🎉 Milestone unlocked!
        </div>
      )}
    </div>
  );
};

export default MilestoneBadge;
