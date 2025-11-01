import { Cloud, CloudLightning, CloudRain } from "lucide-react"

export default function Ambientes() {

    function playRain() {
        alert("Playing Rain Sound")
    }

    function playThunder() {
        alert("Playing Thunder Sound")
    }

    function playWind() {
        alert("Playing Wind Sound")
    }

    return (
        <div className="flex flex-col gap-8 ">
            <div className="flex p-6 text-white gap-8">
                <Cloud className="cursor-pointer sm:h-16 sm:w-16 md:h-24 md:w-24" onClick={playWind} size={80} />
                <CloudLightning className="cursor-pointer" onClick={playThunder} size={80} />
                <CloudRain className="cursor-pointer" onClick={playRain} size={80} />
                <Cloud className="cursor-pointer" onClick={playWind} size={80} />
            </div>
            <div className="flex p-6 text-white gap-8">
                <Cloud className="cursor-pointer" onClick={playWind} size={80} />
                <CloudLightning className="cursor-pointer" onClick={playThunder} size={80} />
                <CloudRain className="cursor-pointer" onClick={playRain} size={80} />
            </div>
        </div>
    )
}