
import { HERO_CONTENT } from "../constants"
import profilePic from "../assets/ahedProfile.png"
import backgroundSVG from '../assets/backgroundImage.svg'; // Adjust the path as necessary
import { delay, motion } from "framer-motion";

const container=(delay)=>({
hidden:{x:-100,opacity:0},
visible:{x:0,opacity:1,
transition:{duration:0.5,delay:delay}},
});

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1 
                         variants={container(0)}
                         initial="hidden"
                         animate="visible"
                        className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 ">Ahed Naser Eddin</motion.h1>
                        <motion.span
                         variants={container(0.5)}
                         initial="hidden"
                         animate="visible"
                        className="bg-gradient-to-r from-pink-300 via-slate-500
                        to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                            Full Stack Web Developer</motion.span>
                        <motion.p
                         variants={container(1)}
                         initial="hidden"
                         animate="visible"
                         className="my-2 max-w-xl py-6 font-light tracking-lighter">{HERO_CONTENT}</motion.p>
                    </div>




                </div>
                <div className="w-full lg:w-1/2 lg:p-8"
                
                >
                    <motion.div
                       initial={{x:100,opacity:0}}
                       animate={{x:0,opacity:1}}
                       transition={{duration:1,delay:0.5}}
                    className="relative flex justify-end pr-4 xs:p-4 border-8 border-white items-center
                                                  bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 
                    bg-no-repeat rounded-full w-full h-full"    
                     
                    >
                       
                        
                        < motion.img 
                         initial={{x:100,opacity:0}}
                         animate={{x:0,opacity:1}}
                         transition={{duration:1,delay:1}}
                        src={profilePic} alt="Ahed Naser Eddin" className="transform scale-x-[-1] 
                        object-contain h-80 w-80 xs:h-60 xs:w-60 rounded-full bg-white" />
                    </motion.div>

                </div>
            </div>

        </div>
    )
}

export default Hero
