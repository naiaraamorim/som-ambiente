import React from 'react';
import { Play, Pause, Undo2 } from 'lucide-react'

export default function Pomodoro() {

  const [timePomodoro, setTimePomodoro] = React.useState(20 * 60); // estado do tempo do pomodoro em segundos
  const [isAtivo, setIsAtivo] = React.useState(false); // estado de não-ativo do pomodoro
  const [intervalo, setIntervalo] = React.useState< number | null>(null); // estado do intervalo do pomodoro

  function play(){
    if(!isAtivo){
      const i = setInterval(() => {
        setTimePomodoro(prev =>{
          if (prev <= 1){
            clearInterval(i);
            setIsAtivo(false);
            alert("Pomodoro finalizado");
            return 0;
          }
          return prev - 1;
        })
      }, 1000)
      setIntervalo(i);
      setIsAtivo(true);
      alert("Pomodoro iniciado")
    }
  }

  function pause(){
    if(isAtivo && intervalo){
      clearInterval(intervalo);
      setIntervalo(null);
      alert("Pomodoro pausado")
    }
    setIsAtivo(false);
  }

  function restart(){
    if(intervalo){
      clearInterval(intervalo);
      setIntervalo(null);
    }
    setTimePomodoro(20 * 60);
    setIsAtivo(false);
    alert("Pomodoro reiniciado")
  }

  return (
    <div className="flex flex-col">
        <div className="bg-gray-800 rounded-sm p-2 text-center">
            <span className="text-white text-lg ">{Math.floor(timePomodoro / 60)}:{String(timePomodoro % 60).padStart(2, '0')}</span>
        </div>
          <div className="container px-4 py-8">
            <h1 className="text-white">
              <Play className="inline-block mr-2" onClick={play} size={32}/>
              <Pause className="inline-block mr-2" onClick={pause} size={32}/>
              <Undo2 className="inline-block mr-2" onClick={restart} size={32}/>
            </h1>
          </div>
    </div>
  );
}