import { Play, Pause, Undo2 } from 'lucide-react'

export default function Pomodoro() {

  return (
    <div className="flex flex-col min-h-screen">
          <div className="container mx-auto px-4 py-8">
            <h1 className="">
              <Play className="inline-block mr-2" />
              <Pause className="inline-block mr-2" />
              <Undo2 className="inline-block mr-2" />
            </h1>
          </div>
    </div>
  );
}