import React, {useEffect, useState} from 'react'

export default function Header(){

    const [listNames, namesFunction] = useState([]);
    const [stories, storiesFunction] = useState([]);
    const [name, getNames] = useState('');
    const [getstories, getstoriesfunc] = useState('')
    

    function addItem(){
        if (name && getstories){
            namesFunction((prevListNames) => [...prevListNames, name])
        storiesFunction((prevStories) => [...prevStories, getstories])
        getNames('');
        getstoriesfunc('');

        document.getElementById('name').value = '';
        document.getElementById('story').value = '';
        }
        else {
            if (name){
                alert('fill out the Story')
            }
            else {
                alert("Fill out the name")
            }
        }
        
    }


    

    return (
        <>
        
        <input value={name} onChange={(item) => getNames(item.target.value)} id='name' placeholder='Name' required></input>
        <input value={getstories} onChange={(item) => getstoriesfunc(item.target.value)} id='story' placeholder='Story' required></input>
        <button onClick={addItem}>Submit Story</button>

        {listNames.map((name, index) => (
            <div key={index}>
             <h3>Story {index + 1}</h3>
             <p><strong>Name:</strong> {name}</p>
             <p><strong>Story:</strong> {stories[index]}</p>
            </div>
        ))}
        
        </>
    )
}