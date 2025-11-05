import React from 'react';
import { Play, Pause, Undo2 } from 'lucide-react'
import alarmeSound from './assets/sons/alarme.wav'

export default function Pomodoro() {

  const timePomodoroNumber = 25 * 60; // Tempo padrão de 25 minutos
  const timeDescansoNumber = 5 * 60; // Tempo padrão de 5 minutos
  const alarmeAudio = React.useRef<HTMLAudioElement | null>(null);

  const [isAtivo, setIsAtivo] = React.useState(false);
  const [intervalo, setIntervalo] = React.useState<number | null>(null);
  const [tempoAtual, setTempoAtual] = React.useState(timePomodoroNumber);
  const [modoPomodoro, setModoPomodoro] = React.useState(true);

  function play() {
    if (!isAtivo) {
      const i = setInterval(() => {
        setTempoAtual(prev => {
          if (prev <= 1) {
            clearInterval(i);
            setIsAtivo(false);
            tocarAlarme();
            trocarModo();
            return 0;
          }
          return prev - 1;
        })
      }, 1000)
      setIntervalo(i);
      setIsAtivo(true);
    }
  }

  function pause() {
    if (isAtivo && intervalo) {
      clearInterval(intervalo);
      setIntervalo(null);
    }
    setIsAtivo(false);
  }

  function restart() {
    if (intervalo) {
      clearInterval(intervalo);
      setIntervalo(null);
    }
    setTempoAtual(modoPomodoro ? timePomodoroNumber : timeDescansoNumber);
    setIsAtivo(false);
  }

  function tocarAlarme() {
    if (!alarmeAudio.current) {
      alarmeAudio.current = new Audio(alarmeSound);
    }
    // reseta o audio para o inicio caso tenha tocado antes
    alarmeAudio.current.currentTime = 0;
    alarmeAudio.current.play();
  }

  function trocarModo() {
    if (modoPomodoro) {
      setModoPomodoro(false)
      setTempoAtual(timeDescansoNumber);
    } else {
      setModoPomodoro(true)
      setTempoAtual(timePomodoroNumber);
    }
  }

  return (
    <div className="flex flex-col gap-2 sm:gap-4 items-center">
      <div className="w-full bg-secundario opacity-70 rounded-lg p-4 text-center">
        <p className="text-contraste1 text-sm font-medium">
          {modoPomodoro ? '📚 Hora do Estudo' : '☕️ Hora do Descanso'}
        </p>
        <span className="text-white text-xl sm:text-2xl">{Math.floor(tempoAtual / 60)}:{String(tempoAtual % 60).padStart(2, '0')}</span>
      </div>
      <div className="flex justify-center gap-2 sm:gap-4">
        <Play
          className="cursor-pointer text-white w-6 h-6 sm:w-8 sm:h-8"
          onClick={play}
        />
        <Pause
          className="cursor-pointer text-white w-6 h-6 sm:w-8 sm:h-8"
          onClick={pause}
        />
        <Undo2
          className="cursor-pointer text-white w-6 h-6 sm:w-8 sm:h-8"
          onClick={restart}
        />
      </div>
    </div>
  );
}