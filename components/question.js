import { useState } from "react"

export default function Questions({player, bucketURL, playerList, onSelection, children, onReachedMaxScore, level}){

    const [score, setScore] = useState('0')

    function checkIfCorrect(clicked, image){
        if(clicked == image){
            //reload component
            //add 1 point
            console.log('you guessed!')
            setScore(score + 1)
            onSelection()
            if( score > 5 ){
                onReachedMaxScore()
                setScore(0)
            }
        }else{
            console.log('you are wrong!')
            setScore(0)
            //restart score
        }
    }

    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }

    var randomizedList = shuffle(playerList)

    console.log('playerList: ', playerList)

    return(
        <div className="z-10 h-screen w-screen flex align-middle items-center  " >
            <div className=" " >
                <h1 className="text-white " >Nivel: { level + 1 }</h1>
                <h1 className="text-white text-7xl" >¿Cual es su nombre?</h1>
                <div>
                    {
                        randomizedList.map((p, i) => 
                            <div key={i} className="  
                            " >
                                <button 
                                    className="mt-2 
                                    border-2 border-white rounded-md
                                    text-2xl text-white
                                    hover:bg-white
                                    hover:text-black
                                    transition 
                                    w-72
                                    "
                                    onClick={() => checkIfCorrect(p, player)}
                                >
                                    {p}
                                </button>
                            </div>
                        )
                    }  
                </div>
                <div className="font-bold text-green-500 text-4xl tex-center " >
                    Score: { score }
                </div>
            </div>
        </div>
    )
}