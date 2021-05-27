import React from 'react'

class Player extends React.Component{

    render()
    {
        return (
            
            <div className="players">
                <div  className="pStats">
                    <p>Players:</p>
                        {this.props.players.map(obj =>
                        <p key={obj.id} id={obj.id} onClick={this.props.playerNameF}>{`${obj.first_name} ${obj.last_name}`}</p>
                        )}
                </div>
                <div className="buttons"><button onClick = {this.props.previousPage}>previous page</button><button onClick = {this.props.nextPage}>next page</button></div> 
                <div className="pStats">   
                    <p>{this.props.playerName} Career stats</p>
                    <p>Points: {(this.props.points/this.props.seasons).toFixed(2) === "NaN" ? " ": (this.props.points/this.props.seasons).toFixed(2)}</p>
                    <p>Assist: {(this.props.assist/this.props.seasons).toFixed(2) === "NaN" ? " ": (this.props.assist/this.props.seasons).toFixed(2)}</p>
                    <p>Rebounds: {(this.props.rebounds/this.props.seasons).toFixed(2) === "NaN" ? " ": (this.props.rebounds/this.props.seasons).toFixed(2)}</p>
                </div> 
            </div>
            
        )
    }
    
}

export default Player