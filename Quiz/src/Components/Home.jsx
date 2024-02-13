import { Component } from "react";
import './Home.css'
class Home extends Component {
    constructor() {
        super()
    }
    render(){
        return(
            <>
                <div>
                    <h1 className="nameofApp">QUIZ APP</h1>
                    <button>Play!</button>
                </div>
            </>
        )
    }
}

export default Home