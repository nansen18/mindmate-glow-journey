
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, MessageCircle, Heart, Clock } from "lucide-react";

const CrisisResources = () => {
  const navigate = useNavigate();

  const emergencyContacts = [
    {
      name: "National Suicide Prevention Lifeline",
      number: "988",
      description: "24/7 free and confidential support",
      type: "call"
    },
    {
      name: "Crisis Text Line",
      number: "Text HOME to 741741",
      description: "24/7 crisis support via text",
      type: "text"
    },
    {
      name: "SAMHSA National Helpline",
      number: "1-800-662-4357",
      description: "Mental health and substance abuse",
      type: "call"
    },
    {
      name: "National Domestic Violence Hotline",
      number: "1-800-799-7233",
      description: "24/7 confidential support",
      type: "call"
    }
  ];

  const quickActions = [
    {
      title: "Call Emergency Services",
      number: "911",
      description: "For immediate medical emergencies",
      color: "from-red-400 to-red-500",
      urgent: true
    },
    {
      title: "Talk to Someone Now",
      number: "988",
      description: "Suicide & Crisis Lifeline",
      color: "from-bubblegum-pink to-cosmic-lilac",
      urgent: false
    }
  ];

  const handleCall = (number: string) => {
    window.location.href = `tel:${number}`;
  };

  return (
    <div className="min-h-screen p-6 pb-20 relative">
      {/* Background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-24 h-24 bg-gradient-to-br from-electric-mint/10 to-sky-glow/10 rounded-full animate-pulse-gentle"></div>
        <div className="absolute bottom-40 left-8 w-20 h-20 bg-gradient-to-br from-bubblegum-pink/10 to-sunshine-peach/10 rounded-full animate-pulse-gentle" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={() => navigate("/dashboard")}
          className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-300"
        >
          <ArrowLeft className="w-5 h-5 text-graphite" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-graphite">Crisis Resources</h1>
          <p className="text-graphite/70 text-sm">Immediate support when you need it most</p>
        </div>
      </div>

      {/* Comforting Message */}
      <Card className="card-gradient rounded-3xl mb-6 border-2 border-bubblegum-pink/30">
        <CardContent className="p-6 text-center">
          <Heart className="w-12 h-12 text-bubblegum-pink mx-auto mb-4 animate-pulse" />
          <h2 className="text-xl font-semibold text-graphite mb-3">You Are Not Alone</h2>
          <p className="text-graphite/80 leading-relaxed">
            It's okay to ask for help. These feelings are temporary, and support is available 24/7. 
            You matter, and there are people who care about you and want to help.
          </p>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="space-y-4 mb-8">
        <h3 className="text-lg font-semibold text-graphite flex items-center gap-2">
          <Clock className="w-5 h-5 text-cosmic-lilac" />
          Immediate Help
        </h3>
        
        <div className="space-y-3">
          {quickActions.map((action, index) => (
            <Button
              key={index}
              onClick={() => handleCall(action.number)}
              className={`w-full h-16 rounded-2xl bg-gradient-to-r ${action.color} text-white shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-between p-6 ${action.urgent ? 'animate-pulse' : ''}`}
            >
              <div className="text-left">
                <div className="font-semibold text-lg">{action.title}</div>
                <div className="text-white/80 text-sm">{action.description}</div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-6 h-6" />
                <span className="font-bold text-xl">{action.number}</span>
              </div>
            </Button>
          ))}
        </div>
      </div>

      {/* Emergency Contacts */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-graphite">24/7 Support Lines</h3>
        
        <div className="space-y-3">
          {emergencyContacts.map((contact, index) => (
            <Card key={index} className="card-gradient rounded-2xl">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-graphite mb-1">{contact.name}</h4>
                    <p className="text-sm text-graphite/70 mb-2">{contact.description}</p>
                    <p className="font-bold text-cosmic-lilac text-lg">{contact.number}</p>
                  </div>
                  <Button
                    onClick={() => handleCall(contact.number)}
                    className="ml-4 bg-gradient-to-r from-lavender-mist to-cosmic-lilac text-white hover:scale-105 transition-all duration-300"
                  >
                    {contact.type === "call" ? <Phone className="w-4 h-4 mr-2" /> : <MessageCircle className="w-4 h-4 mr-2" />}
                    {contact.type === "call" ? "Call" : "Text"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Safety Tips */}
      <Card className="card-gradient rounded-2xl mt-8">
        <CardHeader>
          <CardTitle className="text-lg text-graphite">Safety Reminders</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-bubblegum-pink rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-sm text-graphite/80">If you're having thoughts of self-harm, please reach out immediately</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-sunshine-peach rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-sm text-graphite/80">These resources are free, confidential, and available 24/7</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-electric-mint rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-sm text-graphite/80">You can also reach out to trusted friends, family, or healthcare providers</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CrisisResources;
