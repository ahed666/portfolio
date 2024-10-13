import { RiReactjsLine } from "react-icons/ri"
import { RiVuejsLine } from "react-icons/ri"
import { FaPhp } from "react-icons/fa6"
import { TbBrandJavascript } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { delay, motion } from "framer-motion";
const iconVariants=(duration)=>({
   initial:{y:-10},
   animate:{
    y:[10,-10],
    transition:{
        duration:duration,
        ease:"linear",
        repeat:Infinity,
        repeatType:"reverse",
    },
   },
});

const Technologies = () => {
    return (
        <div className="border-b border-neutral-900 pb-20">
            <h1 className="my-20 text-center text-4xl">Technologies</h1>
            <div className="flex flex-wrap justify-center items-center gap-4">
               
                <motion.div
                 variants={iconVariants(2.5)}
                 initial="initial"
                 animate="animate"
                 className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaPhp className="text-7xl text-white" />
                </motion.div>

                <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaLaravel className="text-7xl text-red-700" />
                </motion.div>

                <motion.div
                variants={iconVariants(3.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiVuejsLine className="text-7xl text-green-500" />
                </motion.div>


                <motion.div
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>

                <motion.div 
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbBrandJavascript className="text-7xl  text-yellow-500" />
                </motion.div>

                <motion.div 
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMysql className="text-7xl text-cyan-900" />
                </motion.div>

                <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiTailwindCssFill className="text-7xl text-cyan-400" />
                </motion.div>
                

            </div>

        </div>
    )
}

export default Technologies
