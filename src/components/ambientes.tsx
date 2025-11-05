import { Cloud, CloudLightning, CloudRain } from "lucide-react"
import { useRef, useState } from "react"
import chuvaSound from './assets/sons/chuva.wav'
import chuvaTrovaoSound from './assets/sons/chuvaTrovao.wav'
import trovaoSound from './assets/sons/trovao.mp3'

export default function Ambientes() {

    const chuvaAudio = useRef< HTMLAudioElement | null>(null);
    const chuvaTrovaoAudio = useRef< HTMLAudioElement | null>(null);
    const trovaoAudio = useRef< HTMLAudioElement | null>(null);

    const [isChuvaPlaying, setIsChuvaPlaying] = useState(false);
    const [isChuvaTrovaoPlaying, setIsChuvaTrovaoPlaying] = useState(false);
    const [isTrovaoPlaying, setIsTrovaoPlaying] = useState(false);

    function playRain() {
        if(!chuvaAudio.current){
            chuvaAudio.current = new Audio(chuvaSound);
            chuvaAudio.current.loop = true;
        }
        if(isChuvaPlaying){
            chuvaAudio.current.pause();
            setIsChuvaPlaying(false);
        } else {
            chuvaAudio.current.play();
            setIsChuvaPlaying(true);
        }
    }

    function playThunder() {
        if(!trovaoAudio.current){
            trovaoAudio.current = new Audio(trovaoSound);
            trovaoAudio.current.loop = true;
        }
        if(isTrovaoPlaying){
            trovaoAudio.current.pause();
            setIsTrovaoPlaying(false);
        } else {
            trovaoAudio.current.play();
            setIsTrovaoPlaying(true);
        }
    }

    function playWind() {
        if(!chuvaTrovaoAudio.current){
            chuvaTrovaoAudio.current = new Audio(chuvaTrovaoSound);
            chuvaTrovaoAudio.current.loop = true;
        }
        if(isChuvaTrovaoPlaying){
            chuvaTrovaoAudio.current.pause();
            setIsChuvaTrovaoPlaying(false);
        } else {
            chuvaTrovaoAudio.current.play();
            setIsChuvaTrovaoPlaying(true);
        }
    }

    return (
        <div className='flex flex-col gap-6 md:gap-8'>
            <div className='flex justify-center p-4 md:p-6 text-white gap-6 sm:gap-8 md:gap-12 lg:gap-16'>
                <Cloud className={`cursor-pointer rounded-2xl w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 ${isChuvaPlaying ? "bg-gray-800" : ""}`} onClick={playRain} size={80} />
                <CloudLightning className={`cursor-pointer rounded-2xl w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 ${isTrovaoPlaying ? "bg-gray-800" : ""}`} onClick={playThunder} size={80} />
                <CloudRain className={`cursor-pointer rounded-2xl w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 ${isChuvaTrovaoPlaying ? "bg-gray-800" : ""}`} onClick={playWind} size={80} />
            </div>
            <div className='flex justify-center p-4 md:p-6 text-white gap-6 sm:gap-8 md:gap-12 lg:gap-16'>
               
            </div>
        </div>
    )
}