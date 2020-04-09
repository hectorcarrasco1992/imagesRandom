import React from 'react'
import { Component } from 'react';

let imageArray=[
    "./images/car1.jpeg", 
    "./images/car2.jpeg", 
    "./images/car3.jpeg", 
    "./images/car5.jpeg", 
    "./images/car6.jpeg", 
    "./images/car7.jpeg", 
    "./images/car8.jpeg", 
    "./images/car9.jpeg",
    "./images/car10.jpeg",
]

class Cars extends Component{
    constructor(){
        super()
        this.state={
            image:'./images/car1.jpeg'
        }
    }

    gimmePic=()=>{
        this.setState({image:imageArray[Math.floor(Math.random() * 10)]})

    }
    render(){
        return (
            <div>
                <img src={this.state.image} alt="..."/>
                <button onClick={this.gimmePic}> Change Pic</button>
            </div>

        )
    }
}

export default Cars