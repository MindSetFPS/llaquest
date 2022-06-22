import { useEffect, useState } from "react";
import Questions from "../components/question";
import Image from "next/image";

export default function Play(){
    const level1 = ['Acce', 'Ackerman', 'Aloned', 'Andresx', 'Arce', 'Buggax', 'Dimitry', 'Gonto', 'Grell', 'Jauny', 'Jirall', 'Josedeodo', 'Leza', 'Newbie', 'Oddie', 'Pancake', 'Plugo', 'Pozzo', 'Rakyz', 'Relic', 'Seiya', 'Shadow', 'Slow', 'Sookie', 'Straight', 'Tierwulf', 'Wara', 'Whitelotus', 'Yeti']
    const level2 = ['AlanQ', 'Baula', 'Careta', 'Ceo', 'Chunilda', 'Cody', 'Cotopaco', 'Elmo', 'Fallen', 'Gonzo', 'JJ', 'Kala', 'Kalipso', 'Kiefer', 'Milky', 'Monrrow', 'Renn', 'Shuhari', 'Solidsnake', 'Toplop', 'froststrike']
    const level3 = ['1an', 'Biblos', 'Bola', 'Brayaron', 'Chiquito', 'Corsario', 'Crecre', 'Demizos', 'Emp', 'Fahren', 'Fix', 'Gavotto', 'Juliostito', 'Limitationss', 'Mantarraya', 'Mataz', 'Pan', 'Skeeto', 'Skin', 'Tyr', 'Tyrone', 'Unforgiven', 'Zerito', 'Zeypher', 'Zombyra', 'Zothve']
    const level4 = ['Bardito', 'Beto', 'Camilo', 'Dye', 'Enga', 'Flare', 'Follow', 'Genthix', 'Liquiddiego', 'Maggical', 'Mariome', 'Messi', 'Nerzhul', 'Pierre', 'QQ', 'Revehaza', 'Soren', 'Tommy', 'Twins', 'Xypherz', 'Zelt']
    const level5 = ['Akunma', 'Aquasonic', 'DCStar', 'Fatorix', 'Gastruks', 'Gralou', 'Horus', 'Igor', 'Igor', 'Jcyter', 'Khynm', 'Kz', 'Lesmart', 'Manu', 'Minibestia', 'Mister G', 'Nate', 'Nobody', 'Rafamaik', 'Snaker', 'Ukkyr', 'Zeicro']
    const level6 = ['Arfyss', 'Daiky', 'Enatsu', 'Feitan', 'Fragio', 'Icebox', 'Kindless', 'Koughi', 'Kouzze', 'Kreshtdoo', 'Lyg', 'Madblade', 'Mun', 'Pieck', 'Shmebu', 'Shyro', 'Snok', 'Symebo', 'Tulz', 'Wikko', 'Xuradel']
    const comodines = ['Duki','Goku', 'WillyRex', 'Misrra', 'Chispostin', 'Pozzo', 'Tucky']

    const levelsList = [level1, level2, level3, level4, level5, level6]

    // cada 5 puntos en el nivel, desbloqueas las personas del siguiente nivel, pero siguen saliendo las del anterior, y hay que adivinar todas si o si para ganar, 

    const [bucketURL, setBucketURL] = useState('')
    const [proName, setProName] = useState('')
    const [options, setOptions] = useState([])
    const [level, setLevel] = useState(0)
    
    function generateURL(){

        setOptions([])
        console.log('creating new url')
        console.log(levelsList[level][0])
        let name = Math.floor(Math.random() * (levelsList[level].length - 0) ) + 0;
        let num = Math.floor(Math.random() * (2 - 1) ) + 1;

        setOptions([
                levelsList[level][Math.floor(Math.random() * (levelsList[level].length - 0) ) + 0],
                levelsList[level][Math.floor(Math.random() * (levelsList[level].length - 0) ) + 0], 
                levelsList[level][Math.floor(Math.random() * (levelsList[level].length - 0) ) + 0], 
                levelsList[level][name],
        ])

        setProName(levelsList[level][name]) 
        setBucketURL(`https://ndvztwbadgizyjthrjjs.supabase.co/storage/v1/object/public/pictures/images/${ level + 1 }/${ levelsList[level][name] }%20${ num }.png`)
    }
    
    useEffect(() => {
        generateURL()
    }, [])
    
    return(
        <div>
            <div className="-z-10 fixed overflow-hidden h-screen w-screen " >
                <Image
                    alt="Mountains"
                    src={bucketURL || "https://ndvztwbadgizyjthrjjs.supabase.co/storage/v1/object/public/pictures/images/1/Seiya 1.png"}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </div>
            <Questions 
                player={proName}  
                playerList={options} 
                level={level}
                onSelection={generateURL} 
                onReachedMaxScore={ () => setLevel(level + 1)}
            />
        </div>
    )
}