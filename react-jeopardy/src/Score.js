import React from 'react'


window.score= 0

class Scores extends React.Component {
    constructor(props)//pulling from jep
    {
        super(props)//pulling from react library
        this.state = 
        {
        }
    }

    increaseB (){
        window.score= window.score+1
        console.log(window.score)
        document.getElementById("showScore").innerHTML = window.score
    }

    decreaseB(){
        window.score= window.score-1
        console.log(window.score)
        document.getElementById("showScore").innerHTML = window.score
    }

    render()
    {
        return (
            <div>
                <div>
                    <h2>
                        <button id="increase" onClick={this.increaseB} >Increase</button>
                    </h2>
                </div>
                <div>
                    <h2>
                        <button id="decrease" onClick={this.decreaseB}>Decrease</button>
                    </h2>
                </div>
                <div id="showScore">
                    <h2>
                        {window.score}
                    </h2>
                </div>
                {/* <div id="value1">{this.props.value1}</div> */}
            </div>
        )
    }
}

export default Scores