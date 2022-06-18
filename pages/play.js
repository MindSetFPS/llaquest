import Image from "next/image"

import Ackerman from "../1/Ackerman2.png"

export default function Play(){

    const pro = ['Seiya', 'Jirall', 'Duki', 'Messi']

    return(
        <div className="" >
            <div className="-z-10 fixed overflow-hidden h-screen w-screen " >
                <Image
                    alt="Mountains"
                    src={Ackerman}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    />
            </div>
            <h1 className="z-10 h-screen w-screen flex justify-center align-middle items-center " >
                <div className="text-center" >
                    <h1 className="text-white text-4xl " >¿Cual es su nombre?</h1>
                    <div>
                        {
                            pro.map( (p) => <div  > <button className="mt-2 border-2 border-white rounded-md w-72 text-2xl text-white hover:bg-white hover:text-black transition" >  {p}   </button> </div> )
                        }
                        
                    </div>
                </div>

            </h1>
        </div>
    )
}