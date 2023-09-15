import { useState } from "react"
import TodoList from "../components/TodoList"

export default function Home(){
const [textInput, setTextInput] = useState("") 
const [array, setArray] =  useState(['Primeira prosição'])

function adicionar(){
  setArray(array=>[... array, textInput])
}

  return (
    <div>
      <TodoList></TodoList>
    </div>
  
  )
}
