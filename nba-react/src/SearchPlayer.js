import React from 'react'


class SearchPlayer extends React.Component{

    render()
    {

        return (
            
            <div >
                <div className="search">
                    <p>Search Your Favorite Players:</p>
                    <input type="text" name="sName" value={this.props.sName} placeholder="Example: LeBron James" onChange={this.props.handleChange} />
                    <input type="text" name="sYear" value={this.props.sYear} placeholder="Example: 2020" onChange={this.props.handleChange} />
                    <button onClick={this.props.aboutPlayer}>Get Stats!</button>
                    <p>{this.props.errorMsg}</p>
                </div>
                
                {this.props.ivStats.map(sts =>
        
                <div key={sts.player_id} id={sts.player_id} className="pStats">
                    <p>Points: {sts.pts}</p>
                    <p>Assist: {sts.ast}</p>
                    <p>Rebounds: {sts.reb}</p>
                    <p>Steals: {sts.stl}</p>
                    <p>Blocks: {sts.blk}</p>
                    <p>Defensive Rebounds: {sts.oreb}</p>
                    <p>Offensive Rebounds: {sts.dreb}</p>
                    <p>Field Goal Attempts: {sts.fga}</p>
                    <p>Field Goals Made: {sts.fgm}</p>
                    <p>Field Goal Percentage: {sts.fg_pct}</p>
                    <p>3Point Field Goal Attempts: {sts.fg3a}</p>
                    <p>3Point Field Goals Made: {sts.fg3m}</p>
                    <p>3Point Field Goal Percentage: {sts.fg3_pct}</p>
                    <p>Free Throw Attempts: {sts.fta}</p>
                    <p>Free Throws Made: {sts.ftm}</p>
                    <p>Free Throw Percentage: {sts.ft_pct}</p>
                    <p>Personal Fouls: {sts.pf}</p>
                    <p>Turnovers: {sts.turnover}</p>
                    <p>Minutes Per Game: {sts.min}</p>
                    <p>Games Played: {sts.games_played}</p>

                </div>
                
                )}
                
            </div>
            
            
        )
    }
    
}

export default SearchPlayer