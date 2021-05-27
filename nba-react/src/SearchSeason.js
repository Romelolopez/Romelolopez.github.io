import React from 'react'


class SearchSeason extends React.Component
{
    render()
    {       
        return (       
            <div>
                <div className="search">
                    <p>Search Your Team Season: </p>
                    <input type="text" name="tName" value={this.props.tName} placeholder={"Example: Knicks"} onChange={this.props.handleChange} /><br></br>
                    <input type="text" name="tYear" value={this.props.tYear} placeholder={"Example: 2020"}onChange={this.props.handleChange} /><br></br>
                    <button onClick={this.props.aboutTeam}>Get Stats!</button>
                </div>
                
                <p>{this.props.errorMsg}</p>

                
                <div className="mainDiv">

                    <div className="pacDiv">
                        <span className="heads">Date</span><br></br>
                            {this.props.teamData.map(sts => 
                                <div className="pacMan">
                                    <div className="date">
                                        <span>{sts.date.substring(5, 10)}</span><hr></hr>  
                                    </div> 
                                </div>
                            )} 
                    </div>
                        
                    <div className="pacDiv">
                        <span className="heads">Home Team</span><br></br>
                            {this.props.teamData.map(sts => 
                                <div className="pacMan">
                                    <div className="date2">
                                        <span>{sts.home_team["abbreviation"]}</span><hr></hr> 
                                    </div>  
                                </div>
                            )} 
                    </div>
                        
                    <div className="pacDiv">
                        <span className="heads">Visitor Team</span><br></br>
                            {this.props.teamData.map(sts => 
                                <div className="pacMan">
                                    <div className="date2">
                                        <span>{sts.visitor_team["abbreviation"]}</span><hr></hr> 
                                    </div>  
                                </div>
                            )} 
                    </div>
                    
                    <div className="pacDiv">
                        <span className="heads">Score</span><br></br>
                            {this.props.teamData.map(sts => 
                                <div className="pacMan">

                                    <div className="date2">
                                        <span>{sts.home_team_score} - {sts.visitor_team_score}</span><hr></hr> 
                                    </div>  

                                </div>
                            )} 
                    </div>                    

                    <div className="pacDiv">
                        <span className="heads">Result</span><br></br>
                            {this.props.teamData.map(sts => 
                                <div className="pacMan">
                                    <div className="date2">
                                        <span>{sts.home_team_score > sts.visitor_team_score?'W':'L'}</span><hr></hr> 
                                    </div>  
                                </div>
                            )} 
                    </div>
                </div>
            </div>
        )
    }
    
}

export default SearchSeason