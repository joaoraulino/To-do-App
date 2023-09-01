export default function Quadrado(props:any) {
    return (
        <div className= " flex flex-col   h-[32rem] w-[32rem] rounded-xl border-2 border-black border-solid bg-white font-mono font-semibold text-base p-2 gap-2">
            <div className="grid gap-2" >
                <input className="border-black border-solid border-2 rounded-lg h-10 p-2" type="text" placeholder='Insira uma tarefa' />
                <button className="h-10 rounded-lg border-2 border-black border-solid">Adicionar</button>
            </div>
            <div className="h-screen rounded-lg border-2 border-black border-solid p-2">
                <ul>
                    <li>Aomossar</li>
                </ul>
            </div>
            <div className="border-black border-solid border-2 rounded-lg h-20 p-2"></div>
        </div>
        
    )
}