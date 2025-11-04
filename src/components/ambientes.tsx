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
        <div className='flex flex-col gap-6 md:gap-8'>
            <div className='flex justify-center p-4 md:p-6 text-white gap-6 sm:gap-8 md:gap-12 lg:gap-16'>
                <Cloud className='cursor-pointer transition-colors duration-200 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28' onClick={playWind} size={80} />
                <CloudLightning className='cursor-pointer transition-colors duration-200 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28' onClick={playThunder} size={80} />
                <CloudRain className='cursor-pointer transition-colors duration-200 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28' onClick={playRain} size={80} />
                <Cloud className='cursor-pointer transition-colors duration-200 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28' onClick={playWind} size={80} />
            </div>
            <div className='flex justify-center p-4 md:p-6 text-white gap-6 sm:gap-8 md:gap-12 lg:gap-16'>
                <Cloud className='cursor-pointer transition-colors duration-200 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28' onClick={playWind} size={80} />
                <CloudLightning className='cursor-pointer transition-colors duration-200 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28' onClick={playThunder} size={80} />
                <CloudRain className='cursor-pointer transition-colors duration-200 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28' onClick={playRain} size={80} />
            </div>
        </div>
    )
}