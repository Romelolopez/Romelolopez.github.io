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
            value: "",
            sA: true
        }
        this.componentDidMount = this.componentDidMount.bind(this)
        this.showAnswer = this.showAnswer.bind(this)
    }

    showAnswer()
    {
        /* if (this.state.sA === false)
        {
            this.setState({sA: true})
        }
        else
        {
            this.setState({sA: false})
        }*/

        //bang operator (research)
        this.setState({sA: !this.state.sA}) 

        console.log(this.state.sA) 
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
            this.setState({ value: data[0].value})
    })
    //document.getElementsByClassName("answer")[0].style.display = "none"
    this.setState({sA: false})
    }
    
    render()
    {
        return (
            <div>
                <h1 className="title">Welcome to Jeopardy</h1>
                <Scores />
                <h1>LET'S PLAY</h1>
                <div className="question">
                <button className="question" onClick={this.componentDidMount}>Get Question</button>
                </div>
                <Qa category={this.state.category} question={this.state.question} answer={this.state.answer} 
                value={this.state.value} sA={this.state.sA} showAnswer={this.showAnswer}/>    
            </div>
        )
    }
}

export default Triva