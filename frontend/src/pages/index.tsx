import Head from "next/head"
import Image from "next/image"
import { Inter } from "next/font/google"
import styles from "@/styles/Home.module.css"
import GameLayout from "@/components/Layout/GameLayout"
import SelectLayout from "@/components/Layout/SelectLayout"
import TalkScreen from "@/components/uiGroups/TalkScreen"
import Confession from "@/components/uiGroups/Confession"
import { useState,useContext } from "react"
import {AnswerContext} from "@/components/providers/AnswerContext"


const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  const [isInterMission, setIsInterMission] = useState<boolean>(true)
  const [isEnd, setIsEnd] = useState<boolean>(false)
  const [isNotConfessionTime, setIsNotConfessionTime] = useState<boolean>(true)

  
  
  const clickChangeScreen = () => {
    setIsInterMission(!isInterMission)
  }
  const clickSetEnd = () => {
    setIsEnd(true)
  }
  const clickSetConfession = () => {
    setIsNotConfessionTime(!isNotConfessionTime)
  }

  const {isCompleted, setIsCompleted}= useContext(AnswerContext)
console.log(isCompleted);
  return (
    <>
      
      {!isCompleted ? (
        <SelectLayout>
          <div></div>
        </SelectLayout>
      ) : 
      isNotConfessionTime ? (
        <GameLayout situation="/ジェシーの部屋2.jpeg">
          <TalkScreen
            text="疲れちゃった。そこのホテルで休憩しない？"
            clickSetConfession={clickSetConfession}
          />
        </GameLayout>
      ) : isEnd ? (
        <Confession text="END" />
      ) : isInterMission ? (
        <Confession clickChangeScreen={clickChangeScreen} text="♡告白タイム♡" />
      ) : (
        <GameLayout situation="/放課後の教室.jpeg">
          <TalkScreen clickSetEnd={clickSetEnd} text="ちょっとタバコ吸い行かない？" />
        </GameLayout>
      )
      }
    </>
  )
}

