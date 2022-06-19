import { useEffect, useContext, useState } from "react";
import Questions from "../images/components/question";
import Image from "next/image";

export default function Play(){
    const pro1 = ['Acce', 'Ackerman', 'Aloned', 'Andresx', 'Arce', 'Buggax', 'Dimitry', 'Gonto', 'Grell', 'Jauny', 'Jirall']
    const comodines = ['Duki', 'Messi','Goku', 'WillyRex', 'Misrra']
    
    const [bucketURL, setBucketURL] = useState('')
    const [proName, setProName] = useState('')
    
    function generateURL(){
        let name = Math.floor(Math.random() * (pro1.length - 0) ) + 0;
        let num = Math.floor(Math.random() * (2 - 1) ) + 1;
        setProName(pro1[name]) 
        setBucketURL(`https://ndvztwbadgizyjthrjjs.supabase.co/storage/v1/object/public/pictures/images/1/${ pro1[name] }%20${ num }.png`)
    }
    
    useEffect(() => {
        generateURL()
    }, [])
    
    return(
        <div>
            <div className="-z-10 fixed overflow-hidden h-screen w-screen " >
                <Image
                    alt="Mountains"
                    src={"https://ndvztwbadgizyjthrjjs.supabase.co/storage/v1/object/public/pictures/images/1/Seiya 1.png"}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </div>
            <Questions player={proName}  playerList={pro1}  />
        </div>
    )
}