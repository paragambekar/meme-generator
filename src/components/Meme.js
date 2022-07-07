import data from "../memesData"

export default function Meme(){
   
   

    function getMemeImage(){
        var item = data.data.memes[Math.floor((Math.random()*100))];
        console.log("item",item);
        const url = item.url;
        console.log("Clicked",url);
    }

    return (
        <main>

            <div className="form">
                <input className="form--input"
            type="text" placeholder="Add text.."/>
                <input className="form--input" type="text" placeholder="Add text.."/>
                <button onClick={getMemeImage} className="form--button">Get a new meme image 🖼️</button> 

            </div>
           
        </main>
    )
}