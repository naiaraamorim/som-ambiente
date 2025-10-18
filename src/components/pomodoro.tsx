import { Play, Pause, Undo2 } from 'lucide-react'

export default function Pomodoro() {
  function play(){
    alert("Pomodoro started")
  }

  function pause(){
    alert("Pomodoro paused")
  }

  function restart(){
    alert("Pomodoro restarted")
  }

  return (
    <div className="flex flex-col">
          <div className="container px-4 py-8">
            <h1 className="">
              <Play className="inline-block mr-2" onClick={play} />
              <Pause className="inline-block mr-2" onClick={pause} />
              <Undo2 className="inline-block mr-2" onClick={restart} />
            </h1>
          </div>
    </div>
  );
}