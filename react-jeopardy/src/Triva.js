import React from 'react'
import Qa from  "./Qa"
import Scores from "./Score"


class Triva extends React.Component{
    constructor()
    {
        super()
        this.state = {
            question:"",
            answer:"",
            category:"",
            value: ""
        }
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount()
    {
        //await fetch is used because await keyword is present, the asynchronous function is paused until the request completes
        //when request completes, response is assigned with the response object of the reuquest
        fetch("http://jservice.io/api/random")
            .then((dataset) => dataset.json())
            .then(data => {
            this.setState({ question: data[0].question})
            this.setState({ answer: data[0].answer})
            this.setState({ category: data[0].category.title})
    })
    document.getElementsByClassName("answer")[0].style.display = "none"
    }

    render()
    {
        return (
            <div>
                <button onClick={this.componentDidMount}>Get Question</button>
                <Qa category = {this.state.category} question={this.state.question} answer={this.state.answer}/>
                <Scores />
                <button onClick={() => window.location.reload()}>Reset</button>

                
            </div>

        )
    }
}

export default Triva