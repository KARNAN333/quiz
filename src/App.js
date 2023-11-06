import { useState } from "react";
import "./App.css";
import QuizView from "./components/QuizView";
import ScoreView from "./components/ScoreView";

function App() {
  const questions = [
    {
      question: "How many bits make a Byte ?",
      answers: [{text:"16 bits"}, {text:"24 bits"}, {text:"8 bits",isCorrect: true}, {text:"12 bits"}],
    },
    {
      question: "Frst search engine on internet is _______",
      answers: [
        { text: "Google" },
        { text: "Aliweb", isCorrect: true },
        { text: "Yahoo" },
        { text: "Bing" },
      ],
    },
    {
      question: "The number of bit used by IPv6 address is ?",
      answers: [
        { text: "16" },
        { text: "32" },
        { text: "64" },
        { text: "128", isCorrect: true },
      ],
    },
    {
      question: "First web browser invented in 1990 is ?",
      answers: [
        { text: "Mosaic" },
        { text: "WorldWideWeb", isCorrect: true },
        { text: "Internet Explorer" },
        { text: "Nexus" },
      ],
    },
    {
      question: "Which technology is used to record cryptocurrency transactions ?",
      answers: [
        { text: "Blockchain technology", isCorrect: true },
        { text: "Mining" },
        { text: "Token" },
        { text: "Digital Wall" },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isQuizOver, setIsQuizOver] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (isCorrect) => {
    // check score
    if (isCorrect) setScore(score + 1);

    const next = currentQuestion + 1;
    if (next < questions.length) setCurrentQuestion(next);
    else setIsQuizOver(true);
  };

  const handleResetClick = () => {
    // fix: score not resetting
    setScore(0);

    setCurrentQuestion(0);
    setIsQuizOver(false);
  };

  return (
    <div className="App">
      {isQuizOver ? (
        <ScoreView handleResetClick={handleResetClick} score={score} />
      ) : (
        <QuizView
          questions={questions}
          currentQuestion={currentQuestion}
          handleAnswerClick={handleAnswerClick}
        />
      )}
    </div>
  );
}

export default App;
