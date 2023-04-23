import { ReactElement, useState, useEffect } from "react";
import Head from "next/head";
import { useAnswerContext } from '@/components/providers/AnswerContext';



interface Question {
  question: string;
  genre: string;
  options: string[];
}



const questions: Question[] = [
  {
    question: 'Q1 見た目の性別は?',
    genre: '性別',
    options: ['男性', '女性'],
  },
  {
    question: 'Q2 どこの国風?',
    genre: '国',
    options: ['日本人', '北米', '南米', 'ヨーロッパ'],
  },
  {
    question: 'Q3 何歳くらい?',
    genre: '年齢',
    options: ['18', '20', '22', '24' , '26'],
  },
  {
    question: 'Q4 体型は?',
    genre: '体型',
    options: ['スリム', '標準', 'ぽっちゃり'],
  },
  {
    question: 'Q5 髪型は?',
    genre: '髪型',
    options: ['ベリーショート', 'ショート', 'ミディアム', 'ロング' , 'ベリーロング'],
  },
  {
    question: 'Q6 髪色は?',
    genre: '髪色',
    options: ['黒髪', '茶髪', '金髪', '赤髪'],
  },
  {
    question: 'Q7 どんなタイプの子?',
    genre: 'タイプ',
    options: ['清楚系', '可愛い系', 'かっこいい系', '綺麗系' , 'ストリート系'],
  },
  {
    question: 'Q8 大まかな性格は?',
    genre: '性格',
    options: ['外向的', '内向的', '積極的', '消極的',  ],
  },
  {
    question: 'Q9 性格は?',
    genre: 'タイプ',
    options: ['ツンデレ', 'デレデレ', 'ツンツン'],
  },
  {
    question: 'Q10 詳しい性格は?',
    genre: '詳細性格',
    options: ['積極的で楽観的', '社交的で話好き', '穏やかで静か'],
  },
  {
    question: 'プレイしたい場面を選択してね',
    genre: '場面',
    options: ['学校', '自宅', '遊園地'],
  },
  // 他の質問と回答のセットを追加
];



const Select = (props:any) => {
  const {setSelectedAnswers,selectedAnswers}=props
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [message, setMessage] = useState(0);
  const {isCompleted,setIsCompleted} = useAnswerContext();

  const handleOptionClick = (option: string) => {
    const genre = questions[currentQuestionIndex].genre; 
    setSelectedAnswers([...selectedAnswers, { genre, answer: option }]);

  if (currentQuestionIndex < questions.length - 1) {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  } 

  if (currentQuestionIndex > 5) {
    setMessage(1);
  } 
};
useEffect(() => {
  if (selectedAnswers.length === questions.length) {
    // すべての質問に回答した後の処理
    console.log('回答完了:', selectedAnswers);
    setIsCompleted(true);
  }
}, [selectedAnswers]);

const currentQuestion = questions[currentQuestionIndex];

  return (
    <>
      <div className = "bg-custom-pink text-custom-pink h-screen w-screen ">
        <div className="text-4xl text-center p-4">
          理想の人を作ってみよう！
        </div>
        <div className = "text-xl text-center">
        {message === 0 ? "まずは見た目から！" : "次は性格を決めよう！"}
        </div>
        <div className = "text-xl text-center">
          どれか一つを選択してね
        </div>
      <div className = "text-xl p-6" >
        {currentQuestion.question}
      </div>
      <ul className="grid grid-cols-2 gap-4 text-white text-center p-6">
        {currentQuestion.options.map((option, index) => (
          <li key={index} 
              onClick={() => handleOptionClick(option)}
              className={"bg-custom-select-pink p-4 rounded-2xl hover:animate-bounce"}>
            {option}
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default Select;
