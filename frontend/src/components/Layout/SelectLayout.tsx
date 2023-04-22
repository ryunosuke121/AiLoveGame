import { ReactElement, useState } from "react";
import Head from "next/head";


type LayoutProps = {
  readonly children: ReactElement
}

interface Question {
  question: string;
  genre: string;
  options: string[];
}

interface Answer {
  genre: string;
  answer: string;
}

const questions: Question[] = [
  {
    question: '見た目の性別は?',
    genre: '性別',
    options: ['男性', '女性'],
  },
  {
    question: 'どこの国風?',
    genre: '国',
    options: ['日本人', '北米', '南米', 'ヨーロッパ'],
  },
  {
    question: '何歳くらい?',
    genre: '年齢',
    options: ['18', '20', '22', '24' , '26'],
  },
  // 他の質問と回答のセットを追加
];



const Select = ({ children }: LayoutProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Answer[]>([]);

  const handleOptionClick = (option: string) => {
    const genre = questions[currentQuestionIndex].genre; 
    setSelectedAnswers([...selectedAnswers, { genre, answer: option }]);

  if (currentQuestionIndex < questions.length - 1) {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  } else {
    // すべての質問に回答した後の処理
    console.log('回答完了:', selectedAnswers);
  }
};

const currentQuestion = questions[currentQuestionIndex];

  return (
    <>
      <div className = "bg-custom-pink text-custom-pink h-screen w-screen">
        <div className="text-4xl ">
          理想の女性を作ってみよう！
        </div>
        <div className = "text-xl">
          まずは見た目から！
          どれか一つを選択してね
        </div>
      <h1>{currentQuestion.question}</h1>
      <ul className="grid grid-cols-3 gap-4 text-white text-center">
        {currentQuestion.options.map((option, index) => (
          <li key={index} 
              onClick={() => handleOptionClick(option)}
              className={`bg-custom-select-pink p-4 rounded-2xl`}>
            {option}
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default Select;