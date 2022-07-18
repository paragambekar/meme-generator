import React from "react";
import memesData from "../memesData";
import data from "../memesData"

export default function Meme(){
   
   const [meme, setMeme] = React.useState({
        topText : "",
        bottomText : "",
        randomImage : "http://i.imgflip.com/1bij.jpg"
   });

   const [allMemes, setAllMemes] = React.useState([])

   React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
   },[])

    function getMemeImage(){
        let item = allMemes[Math.floor((Math.random()*100))];
        console.log("item",item);
        const url = item.url;
        console.log("Clicked",url);

        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage : url
        }))
    }

    function handleChange(event){
        const {name,value} = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name] : value
        }))
    }

    return (
        <main>

            <div className="form">
                <input  className="form--input"
                        type="text" 
                        placeholder="Add text.."
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                        />

                <input className="form--input" 
                       type="text" 
                       placeholder="Add text.."
                       name="bottomText"
                       value={meme.bottomText}
                       onChange={handleChange}
                       />
                <button onClick={getMemeImage} 
                        className="form--button"
                        
                        >Get a new meme image 🖼️</button> 
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>

           
        </main>
    )
}