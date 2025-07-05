
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Palette, RotateCcw, Download } from "lucide-react";

const DoodleSpace = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentColor, setCurrentColor] = useState("#B9FBC0");
  const [brushSize, setBrushSize] = useState(3);
  const navigate = useNavigate();

  const colors = [
    "#B9FBC0", // Electric Mint
    "#FFB3C6", // Bubblegum Pink
    "#A0C4FF", // Sky Glow
    "#FFD6A5", // Sunshine Peach
    "#CABBE9", // Lavender Mist
    "#FDFFB6", // Lemon Zest
    "#E0AAFF", // Cosmic Lilac
    "#2E2E2E"  // Graphite
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
      }
    }
  }, []);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    draw(e);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.lineWidth = brushSize;
    ctx.strokeStyle = currentColor;
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.beginPath();
      }
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
  };

  const saveDrawing = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const link = document.createElement('a');
      link.download = 'mindful-doodle.png';
      link.href = canvas.toDataURL();
      link.click();
    }
  };

  return (
    <div className="min-h-screen p-6 relative">
      {/* Soft floating elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-16 right-8 w-16 h-16 bg-gradient-to-br from-lavender-mist/20 to-cosmic-lilac/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 left-8 w-12 h-12 bg-gradient-to-br from-electric-mint/20 to-sky-glow/20 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Header */}
      <div className="flex items-center mb-6">
        <Button
          variant="ghost"
          onClick={() => navigate("/dashboard")}
          className="p-2 rounded-full hover:bg-white/20"
        >
          <ArrowLeft className="w-6 h-6 text-graphite" />
        </Button>
        <h1 className="text-2xl font-bold text-graphite ml-4 flex items-center gap-2">
          <Palette className="w-6 h-6 text-cosmic-lilac" />
          Mindful Doodle Space
        </h1>
      </div>

      {/* Welcome message */}
      <Card className="card-gradient rounded-3xl mb-6 border-2 border-cosmic-lilac/30">
        <CardContent className="p-4 text-center">
          <p className="text-graphite/80">
            Let your mind wander and your heart express itself through gentle strokes. No judgment, just pure creativity. 🎨✨
          </p>
        </CardContent>
      </Card>

      {/* Drawing Tools */}
      <Card className="card-gradient rounded-2xl mb-4">
        <CardContent className="p-4">
          <div className="flex flex-wrap items-center gap-4">
            {/* Color Palette */}
            <div className="flex gap-2">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setCurrentColor(color)}
                  className={`w-8 h-8 rounded-full border-2 transition-all duration-300 ${
                    currentColor === color ? 'border-white scale-110 shadow-lg' : 'border-white/50'
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>

            {/* Brush Size */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-graphite/70">Size:</span>
              <input
                type="range"
                min="1"
                max="10"
                value={brushSize}
                onChange={(e) => setBrushSize(Number(e.target.value))}
                className="w-20"
              />
              <span className="text-sm text-graphite/70">{brushSize}px</span>
            </div>

            {/* Actions */}
            <div className="flex gap-2 ml-auto">
              <Button
                onClick={clearCanvas}
                variant="outline"
                size="sm"
                className="text-graphite/70"
              >
                <RotateCcw className="w-4 h-4 mr-1" />
                Clear
              </Button>
              <Button
                onClick={saveDrawing}
                size="sm"
                className="bg-gradient-to-r from-cosmic-lilac to-lavender-mist text-white"
              >
                <Download className="w-4 h-4 mr-1" />
                Save
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Canvas */}
      <Card className="card-gradient rounded-3xl mb-6">
        <CardContent className="p-4">
          <canvas
            ref={canvasRef}
            width={320}
            height={400}
            className="w-full border-2 border-white/30 rounded-2xl bg-white/90 cursor-crosshair touch-none"
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
          />
        </CardContent>
      </Card>

      {/* Encouragement */}
      <Card className="card-gradient rounded-2xl">
        <CardContent className="p-4 text-center">
          <p className="text-sm text-graphite/70">
            Every stroke is a breath, every color is an emotion. You're creating something beautiful - just like you. 🌈💜
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default DoodleSpace;
