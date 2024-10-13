import {PROJECTS} from "../constants";
import {motion} from "framer-motion"
const Projects = () => {
  return (
    <div className="border-b border-t-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl" >Projects</h1>
        {PROJECTS.map((Project,index)=>(
            <div key={index} className="flex flex-wrap mb-8 lg:justify-center">
                <motion.div 
                 whileInView={{opacity:1,x:0}}
                 initial={{opacity:0,x:-100}}
                 transition={{duration:1}}
                className="w-full lg:w-1/4">
                   <img src={Project.image} alt={Project.title} width={150} height={150} className="mb-6 rounded" />
                </motion.div>
                <motion.div
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:100}}
                transition={{duration:1}} 
                className="w-full lg:w-3/4 max-w-xl">
                    <h6 className="mt-2 font-semibold">{Project.title}</h6>
                    <p className="mb-4 text-neutral-400">{Project.description}</p>
                    {Project.technologies.map((technologie,index)=>(
                        <span key={index} className="mr-2 rounded px-2 bg-neutral-900 py-1 text-sm font-medium text-purple-800">
                            {technologie}
                        </span>
                    ))}

                </motion.div>

            </div>
        ))}      
    </div>
  )
}

export default Projects
