import { Cloud, CloudLightning, CloudRain } from "lucide-react"
import { useRef, useState } from "react"
import chuvaSound from './assets/sons/chuva.wav'
import chuvaTrovaoSound from './assets/sons/chuvaTrovao.wav'
import trovaoSound from './assets/sons/trovao.mp3'

export default function Ambientes() {

    const chuvaAudio = useRef<HTMLAudioElement | null>(null);
    const chuvaTrovaoAudio = useRef<HTMLAudioElement | null>(null);
    const trovaoAudio = useRef<HTMLAudioElement | null>(null);

    const [isChuvaPlaying, setIsChuvaPlaying] = useState(false);
    const [isChuvaTrovaoPlaying, setIsChuvaTrovaoPlaying] = useState(false);
    const [isTrovaoPlaying, setIsTrovaoPlaying] = useState(false);

    function playRain() {
        if (!chuvaAudio.current) {
            chuvaAudio.current = new Audio(chuvaSound);
            chuvaAudio.current.loop = true;
        }
        if (isChuvaPlaying) {
            chuvaAudio.current.pause();
            setIsChuvaPlaying(false);
        } else {
            chuvaAudio.current.play();
            setIsChuvaPlaying(true);
        }
    }

    function playThunder() {
        if (!trovaoAudio.current) {
            trovaoAudio.current = new Audio(trovaoSound);
            trovaoAudio.current.loop = true;
        }
        if (isTrovaoPlaying) {
            trovaoAudio.current.pause();
            setIsTrovaoPlaying(false);
        } else {
            trovaoAudio.current.play();
            setIsTrovaoPlaying(true);
        }
    }

    function playWind() {
        if (!chuvaTrovaoAudio.current) {
            chuvaTrovaoAudio.current = new Audio(chuvaTrovaoSound);
            chuvaTrovaoAudio.current.loop = true;
        }
        if (isChuvaTrovaoPlaying) {
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
                <div
                    className={`cursor-pointer rounded-2xl p-3 sm:p-4 transition-all duration-200 ${isChuvaPlaying
                        ? 'bg-secundario shadow-lg'
                        : 'hover:bg-terciario hover:bg-opacity-30'
                        }`}
                    onClick={playRain}
                >
                    <Cloud className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" />
                </div>
                <div
                    className={`cursor-pointer rounded-2xl p-3 sm:p-4 transition-all duration-200 ${isTrovaoPlaying
                        ? 'bg-secundario shadow-lg'
                        : 'hover:bg-terciario hover:bg-opacity-30'
                        }`}
                    onClick={playThunder}
                >
                    <CloudLightning className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" />
                </div>
                <div
                    className={`cursor-pointer rounded-2xl p-3 sm:p-4 transition-all duration-200 ${isChuvaTrovaoPlaying
                        ? 'bg-secundario shadow-lg'
                        : 'hover:bg-terciario hover:bg-opacity-30'
                        }`}
                    onClick={playWind}
                >
                    <CloudRain className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" />
                </div>
            </div>
            <div className='flex justify-center p-4 md:p-6 text-white gap-6 sm:gap-8 md:gap-12 lg:gap-16'>

            </div>
        </div>
    )
}