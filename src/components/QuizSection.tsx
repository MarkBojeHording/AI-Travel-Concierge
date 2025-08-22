import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, User, MapPin, Clock, DollarSign } from "lucide-react";

interface QuizQuestion {
  id: string;
  question: string;
  options: { id: string; label: string; icon?: any }[];
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 'travel-style',
    question: 'What\'s your preferred travel style?',
    options: [
      { id: 'adventure', label: 'Adventure & Outdoor', icon: MapPin },
      { id: 'relaxation', label: 'Relaxation & Spa', icon: User },
      { id: 'cultural', label: 'Cultural & Historical', icon: Clock },
      { id: 'luxury', label: 'Luxury & Fine Dining', icon: DollarSign }
    ]
  },
  {
    id: 'budget',
    question: 'What\'s your travel budget range?',
    options: [
      { id: 'budget', label: 'Budget-friendly ($500-1500)', icon: DollarSign },
      { id: 'mid-range', label: 'Mid-range ($1500-5000)', icon: DollarSign },
      { id: 'luxury', label: 'Luxury ($5000+)', icon: DollarSign }
    ]
  },
  {
    id: 'duration',
    question: 'How long is your ideal trip?',
    options: [
      { id: 'weekend', label: 'Weekend getaway (2-3 days)', icon: Clock },
      { id: 'week', label: 'One week', icon: Clock },
      { id: 'extended', label: 'Extended vacation (2+ weeks)', icon: Clock }
    ]
  }
];

const QuizSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const handleAnswer = (questionId: string, answerId: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answerId }));
    
    if (currentQuestion < quizQuestions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(prev => prev + 1);
      }, 300);
    } else {
      setTimeout(() => {
        setIsCompleted(true);
      }, 300);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setIsCompleted(false);
  };

  if (isCompleted) {
    return (
      <section className="py-20 px-6 bg-gradient-card">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-12 shadow-ocean">
            <div className="mb-8">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-ocean rounded-full flex items-center justify-center">
                <User className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Perfect! Your Travel Profile is Ready</h2>
              <p className="text-xl text-muted-foreground">
                Based on your preferences, we've curated personalized recommendations just for you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {Object.entries(answers).map(([questionId, answerId]) => {
                const question = quizQuestions.find(q => q.id === questionId);
                const answer = question?.options.find(o => o.id === answerId);
                return (
                  <div key={questionId} className="text-center">
                    <Badge variant="outline" className="mb-2">
                      {question?.question.split('\'')[1]?.split('?')[0] || questionId}
                    </Badge>
                    <p className="text-sm font-medium">{answer?.label}</p>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-ocean px-8"
              >
                View My Recommendations
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={resetQuiz}
                className="px-8"
              >
                Retake Quiz
              </Button>
            </div>
          </Card>
        </div>
      </section>
    );
  }

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  return (
    <section className="py-20 px-6 bg-gradient-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Let's Personalize
            <span className="block bg-gradient-sunset bg-clip-text text-transparent">
              Your Experience
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Answer a few quick questions to get tailored travel recommendations
          </p>
        </div>

        <Card className="p-8 shadow-ocean">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Question {currentQuestion + 1} of {quizQuestions.length}</span>
              <span className="text-sm text-muted-foreground">{Math.round(progress)}% Complete</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-gradient-ocean h-2 rounded-full transition-smooth"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">
              {quizQuestions[currentQuestion].question}
            </h3>
            <p className="text-muted-foreground">
              Choose the option that best describes your preference
            </p>
          </div>

          {/* Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quizQuestions[currentQuestion].options.map((option) => {
              const Icon = option.icon;
              return (
                <Button
                  key={option.id}
                  variant="outline"
                  className="h-auto p-6 flex items-center justify-between text-left hover:shadow-card transition-bounce group"
                  onClick={() => handleAnswer(quizQuestions[currentQuestion].id, option.id)}
                >
                  <div className="flex items-center space-x-4">
                    {Icon && (
                      <div className="w-12 h-12 bg-gradient-tropical rounded-full flex items-center justify-center group-hover:scale-110 transition-smooth">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    )}
                    <span className="font-medium">{option.label}</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-smooth" />
                </Button>
              );
            })}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default QuizSection;