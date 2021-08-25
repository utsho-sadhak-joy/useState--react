import React from 'react'
import './Style.css'
import {useState} from 'react'

const Home = () => {
    // const name = "joy";

    const [name, setName] = useState('puja');
    const [age, setAge] = useState(25);

    const handleClick = () => {
        // const name = "mim";
        // console.log(name);
        setName("Sadia");
        setAge(30);

    }

    return (
        <div className="house">
            <h1>Home Page</h1>
            <p> {name} is {age} years old.</p>
            <button style={{backgroundColor:'red'}} onClick={handleClick}>Click me</button>
        </div>
    )
}

export default Home

// This code is from the net ninja youtube chanel lesson 8