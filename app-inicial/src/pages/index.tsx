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
    
    //  <body className="
    // flex justify-center items-center flex-col bg-red-300
    // h-screen w-screen">
    //   <p className='font-bold text-3xl'>Pra Fazê!</p>
    //   <div className= " flex flex-col   h-[32rem] w-[32rem] rounded-xl border-2 border-black border-solid bg-white font-mono font-semibold text-base p-2 gap-2">
    //         <div className="grid gap-2" >
    //             <input  className="border-black border-solid border-2 rounded-lg h-10 p-2" type="text" placeholder='Insira uma tarefa' />
    //             <button className="h-10 rounded-lg border-2 border-black border-solid">Adicionar</button>
    //         </div>
    //         <div className="h-screen rounded-lg border-2 border-black border-solid p-2">
    //             {array.map((item, index)=>())}
    //         </div>
    //         <div className="flex flex-row border-black border-solid border-2 rounded-lg h-20 p-2 gap-2 space-x-4">
    //           <p className="mx-6"><span>#</span> Itens restantes</p>
    //           <button>Tudo</button>
    //           <button>Ativas</button>
    //           <button>Completas</button>
    //           <button><img src="" alt="" /></button>
    //         </div>
    //     </div>
    // </body>
  )
}
