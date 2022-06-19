export default function Questions({player, bucketURL, playerList}){
    function checkIfCorrect(clicked, image){
        if(clicked == image){
            //reload component
            console.log('you guessed!')
        }else{
            console.log('you are wrong!')
        }
    }


    return(
        <div className="z-10 h-screen w-screen flex align-middle items-center  " >
            <div className=" " >
                <h1 className="text-white text-7xl" >¿Cual es su nombre?</h1>
                <div>
                    {
                        playerList.map((p) => 
                            <div key={p} className="  mt-2 
                            border-2 border-white rounded-md
                            text-2xl text-white 
                            " >
                                <button 
                                    className=""
                                    onClick={() => checkIfCorrect(p, player)}
                                >
                                    {p}
                                </button>
                            </div>
                        )
                    }  
                </div>
            </div>
        </div>
    )
}