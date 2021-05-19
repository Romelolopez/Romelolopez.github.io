import React from 'react'

class Scores extends React.Component {
    constructor(props)//pulling from jep
    {
        super(props)//pulling from react library
        this.state = {count: 0}

        //this.reset = this.reset.bind(this)
        
    }

    increment(){
        this.setState({
            //updates, tells react this needs to be re-rendered 
            count: this.state.count + 100
        }, /*this is equal to bind(this)???*/ ()=>{
            //callback
            
            console.log(this.state.count)
        })
        
    }

    decrement(){
        this.setState({
            //updates, tells react this needs to be re-rendered 
            count: this.state.count - 100 < 0 ? 0 : this.state.count - 100
        })
        //same as ternary operator
        /* , this is equal to bind(this)??? ()=>{
            //callback
            if (this.state.count < 0)
            {
                this.setState({count: 0})
            }

            console.log(this.state.count)
        }) */
        
    }

    reset(){
        this.setState({count: 0})
    }

    render()
    {
        return (
            <div>
                <p className="count"> Score: {this.state.count} </p>
                <div className="score">
                    <button onClick={() => this.increment()} >Increase</button>
                    <button onClick={() => this.decrement()}>Decrease</button>
                    <button onClick={() => this.reset()}>Reset</button>
                </div>
            </div>
        )
    }
}

export default Scores