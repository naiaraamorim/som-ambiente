import { Cloud, CloudLightning, CloudRain } from "lucide-react"

export default function Ambientes(){

    function playRain(){
        alert("Playing Rain Sound")
    }

    function playThunder(){
        alert("Playing Thunder Sound")
    }

    function playWind(){
        alert("Playing Wind Sound")
    }

    return(
        <div className="flex flex-col">
            <div className="container px-4 py-8 text-white">
                <Cloud className="inline-block mr-2" onClick={playWind} />
                <CloudLightning className="inline-block mr-2" onClick={playThunder} />
                <CloudRain className="inline-block mr-2" onClick={playRain} />
            </div>
            <div>

            </div>
        </div>
    )
}