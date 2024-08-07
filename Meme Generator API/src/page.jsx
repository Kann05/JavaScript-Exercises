import React, { useState, useEffect } from 'react';

export default function Header() {
    const [meme, setmeme] = useState([]);
    const [getRandomMeme, setRandomMeme] = useState(null);
   

   
    
    useEffect(() => {
        fetch(`https://api.imgflip.com/get_memes`)
            .then(res => res.json())
            .then(data => setmeme(data.data.memes));
            
    }, []); 

    function generateMeme(){
        const randomIndex = Math.floor(Math.random() * meme.length);
        setRandomMeme(meme[randomIndex])
       
    }

    
    return (
        <div>
            <fieldset>
            <button onClick={generateMeme}>Generate Meme</button>
            <br/>
            <br/>
            <br/>
            {getRandomMeme && (
                <div>
                    <img src={getRandomMeme.url} style={{maxHeight: '200px', maxWidth: '200px'}}></img>
                </div>
            )}
            </fieldset>
        </div>
        
    );
}
