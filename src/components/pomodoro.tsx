import React from 'react';
import { Play, Pause, Undo2 } from 'lucide-react'

export default function Pomodoro() {

  const [timePomodoro, setTimePomodoro] = React.useState(25*60);
  const [isAtivo, setIsAtivo] = React.useState(false); // estado de não-ativo do pomodoro
  const [intervalo, setIntervalo] = React.useState(0);

  function play(){
    if(!isAtivo){
      const i = setInterval(() => {
        setTimePomodoro(prev =>{
          if (prev <= 1){
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
    setIsAtivo(false);
    alert("Pomodoro pausado")
  }

  function restart(){
    alert("Pomodoro reiniciado")
  }

  return (
    <div className="flex flex-col">
          <div className="container px-4 py-8">
            <h1 className="text-white">
              <Play className="inline-block mr-2" onClick={play} />
              <Pause className="inline-block mr-2" onClick={pause} />
              <Undo2 className="inline-block mr-2" onClick={restart} />
            </h1>
          </div>
    </div>
  );
}