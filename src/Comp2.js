import React from "react";
import { useState } from 'react';
import MarvelService from "./service/MarvelService";

function Api() {

    const [text, setText] = useState([]);
    let myRef = React.createRef();
    const marvelService = new MarvelService();

    let addApi = () => {
        let addApiValue = [];
        marvelService.getAllCharacters().then(res => {
            addApiValue = res.data;
            addApiValue.forEach(note => addApiValue.push(note.title));

            console.log(addApiValue)
        });
        console.log(addApiValue);
        let comeApi = [...text, addApiValue];

        setText(comeApi);
        console.log(comeApi)
        myRef.current.value = "";
    }
    return (
        <>
            <div>
                <textarea ref={myRef}></textarea>
            </div>
            <div>
                <button onClick={addApi}>Send messages</button>
            </div>
            <div>

                {/* {console.log(text.map((item, index) => <p key={index.toString()}>{item}</p>))} */}

            </div>
        </>
    )
}

export default Api;