import { Cloud, CloudLightning, CloudRain } from "lucide-react"

export default function Ambientes(){
    return(
        <div className="flex flex-col min-h-screen">
            <div className="container mx-auto px-4 py-8">
                <Cloud className="inline-block mr-2" />
                <CloudLightning className="inline-block mr-2" />
                <CloudRain className="inline-block mr-2" />
            </div>
        </div>
    )
}