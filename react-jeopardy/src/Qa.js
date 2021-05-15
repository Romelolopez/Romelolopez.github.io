import React from 'react'

import './App.css'


class Qa extends React.Component {
    constructor()
    {
        super()


        this.showAnswer = this.showAnswer.bind(this)
    }
// showAnswer is how to toggle the answer to show up 
    showAnswer()
    {
        let showit = document.getElementsByClassName("answer")[0]
        if(showit.style.display === "block")
        {
            showit.style.display = "none"
        }
        else
        {
            showit.style.display = "block"
        }
    }

    render()
    {
        return (
            <div>
                <div>
                    <h3>Category: {this.props.category}</h3>
                </div>
                <div>
                    <h3>Question: {this.props.question}</h3>
                </div>
                <div><button id="answer" onClick = {this.showAnswer}>Answer</button></div>

                <div className="answer">{this.props.answer} </div>
            </div>
        )
    }
}
export default Qa