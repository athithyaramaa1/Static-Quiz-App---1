import { Component } from "react";
import './Quiz.css'
import Home from "./Home";

class Quiz extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="quiz-contain">
            <Home />
            <h2 style={{textAlign:"center", fontSize:'4rem'}}>Question</h2>
            <p style={{textAlign:'left', marginLeft:'-500px'}}>1 of 15</p>
            <br />
            <p>Which is the only mammal that can jump?</p>
            <br />
            <br />
            <br />
            <div className="optionsContainer">
                <button>Dog</button>
                <button>Elephant</button>
                <button>Goat</button>
                <button>Lion</button>
            </div>
            <br />
            <br />
            <br />
            <div className="buttons">
                <div><button className="button1">Previous</button></div>
                <div><button className="button2">Next</button></div>
                <div><button className="button3">Quit</button></div>
            </div>
            </div>
        )
    }
}

export default Quiz
