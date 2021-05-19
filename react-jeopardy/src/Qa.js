import React from 'react'

import './App.css'


class Qa extends React.Component {
    
    render()
    {
        return (
            <div className="qa">
                <div>
                    <p>Category: {this.props.category}</p>
                </div>
                <div>
                    <p>Value: {this.props.value}</p>
                </div>
                <div>
                    <p>Question: {this.props.question}</p>
                </div>
                <div>
                    <button id="answer" onClick = {this.props.showAnswer}>Answer</button> 
                </div>

                <div>{this.props.sA ? this.props.answer: null}</div>
                
            </div>
        )
    }
}
export default Qa