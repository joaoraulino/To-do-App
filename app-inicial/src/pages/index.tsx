import Quadrado from '@/components/basico/Quadrado';

export default function Home(){
  return (
    <body className="
    flex justify-center items-center flex-col bg-red-300
    h-screen w-screen">
      <p className='font-bold text-3xl'>Pra Fazê!</p>
      <div>
        <Quadrado>
          
        </Quadrado>
      </div>
    </body>

  )
}
