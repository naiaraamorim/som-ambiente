import { Cloud, CloudLightning, CloudRain } from "lucide-react"

export default function Ambientes(){
    return(
        <div className="flex flex-col">
            <div className="container px-4 py-8">
                <Cloud className="inline-block mr-2" />
                <CloudLightning className="inline-block mr-2" />
                <CloudRain className="inline-block mr-2" />
            </div>
            <div>

            </div>
        </div>
    )
}