import React from 'react';
import { Play, Pause, Undo2 } from 'lucide-react'
import alarmeSound from './assets/sons/alarme.wav'

export default function Pomodoro() {

  const alarmeAudio = React.useRef< HTMLAudioElement | null>(null);

  const [timePomodoro, setTimePomodoro] = React.useState(20 * 60); // estado do tempo do pomodoro em segundos
  const [isAtivo, setIsAtivo] = React.useState(false); // estado de não-ativo do pomodoro
  const [intervalo, setIntervalo] = React.useState< number | null>(null); // estado do intervalo do pomodoro
  const [isAlarmePlaying, setIsAlarmePlaying] = React.useState(false); // estado do som do alarme

  function play(){
    if(!isAtivo){
      const i = setInterval(() => {
        setTimePomodoro(prev =>{
          if (prev <= 1){
            clearInterval(i);
            setIsAtivo(false);
            tocarAlarme();
            return 0;
          }
          return prev - 1; 
        })
      }, 1000)
      setIntervalo(i);
      setIsAtivo(true);
    }
  }

  function pause(){
    if(isAtivo && intervalo){
      clearInterval(intervalo);
      setIntervalo(null);
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
  }

  function tocarAlarme(){
    if(!alarmeAudio.current){
      alarmeAudio.current = new Audio(alarmeSound);
    }
    // reseta o audio para o inicio caso tenha tocado antes
    alarmeAudio.current.currentTime = 0;
    alarmeAudio.current.play();
  }

  return (
    <div className="flex flex-col gap-4 sm:gap-6 items-center">
        <div className="w-full bg-secundario opacity-70 rounded-lg p-4 text-center">
            <span className="text-white text-xl sm:text-2xl">{Math.floor(timePomodoro / 60)}:{String(timePomodoro % 60).padStart(2, '0')}</span>
        </div>
          <div className="flex justify-center gap-2 sm:gap-4">
             <Play 
              className="cursor-pointer text-white hover:text-contraste1 transition-colors duration-200 w-6 h-6 sm:w-8 sm:h-8" 
              onClick={play}
            />
            <Pause 
              className="cursor-pointer text-white hover:text-contraste1 transition-colors duration-200 w-6 h-6 sm:w-8 sm:h-8" 
              onClick={pause}
            />
            <Undo2 
              className="cursor-pointer text-white hover:text-contraste1 transition-colors duration-200 w-6 h-6 sm:w-8 sm:h-8" 
              onClick={restart}
            />
          </div>
    </div>
  );
}