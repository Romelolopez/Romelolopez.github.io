import React from 'react'
import Player from "./Player"
import Nav from "./Nav"
import Front from "./Front"

import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import SearchPlayer from './SearchPlayer'
import SearchSeason from './SearchSeason'

class Nba extends React.Component{
    constructor()
    {
        super()
        this.state = {
            stats:[],
            ivStats: [],
            players:[],
            teamData: [],
            teamName: {},
            teamGames: "",
            count: 1,
            playerID: 0,
            playerName: "", 
            sName: "",
            sYear: "",
            tName: "",
            tYear: "",
            sID: 0, 
            year:1979,

            seasons: 0,
            pts: 0,
            ast: 0,
            reb: 0,
            errorMsg: "",
            errorMsgTeam: "",
            teamID: "",
            
        }
        
        this.playerNameF = this.playerNameF.bind(this)
        this.handleStats = this.handleStats.bind(this)
        this.previousPage = this.previousPage.bind(this)
        this.nextPage = this.nextPage.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.aboutPlayer = this.aboutPlayer.bind(this)
        this.individualStats = this.individualStats.bind(this)
        this.aboutTeam = this.aboutTeam.bind(this)
    }

    componentDidMount()
    {
        //await fetch is used because await keyword is present, the asynchronous function is paused until the request completes
        //when request completes, response is assigned with the response object of the reuquest
         fetch("https://www.balldontlie.io/api/v1/players/?page=" + this.state.count + "&per_page=10")
            .then((dataset) => dataset.json())
            .then(result => {
            this.setState({ players: result.data})           
        }) 
    } 

    aboutPlayer()
    {
        fetch(`https://www.balldontlie.io/api/v1/players?search=${this.state.sName}`)
            .then((dataset) => dataset.json())
            .then(result => {
            //get the id from the data returned then call individualStats() since we have the player ID now
            this.setState({ sID: result.data[0]["id"]}, () => this.individualStats())
            })
            .catch(err => {
                //controls error of name mispelling and system being unable to get ID above (result.data[0]["id"])
                this.setState({ errorMsg: 
                    "Please check spelling and make sure all feilds are entered."+ 
                    "If spelled correctly, players may have not played that year"}) 
            });
        
    }

    individualStats()
    {
        fetch(`https://www.balldontlie.io/api/v1/season_averages?season=${this.state.sYear}&player_ids[]=${this.state.sID}`)
            .then((dataset) => dataset.json())
            .then(result => {
            //populate "ivStats" with player specifc data
            this.setState({ ivStats: result.data}) 
            //Data can come back but empty. If year is wrong an empty array returns (length zero). This if statement checks that
            if (this.state.ivStats.length < 1)
            {
                this.setState({ errorMsg: 
                    "Please check spelling and make sure all feilds are entered."+ 
                    "If spelled correctly, players may have not played that year"}) 
            }
            else
            {
                this.setState({ errorMsg: ""})
            }
            })
            .catch(err => {
                //controls error of name mispelling and system being unable to get ID above (result.data[0]["id"])
                this.setState({ errorMsg: 
                    "Please check spelling and make sure all feilds are entered."+ 
                    "If spelled correctly, players may have not played that year"})
                //Empty the stats incase the last player is stats are still in the array
                this.setState({ ivStats: []}) 
            });
    }

    aboutTeam()
    {
        
            fetch("https://free-nba.p.rapidapi.com/teams", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "ENTER YOUR KEY",
                    "x-rapidapi-host": "free-nba.p.rapidapi.com"
                }
            })
            .then((dataset) => dataset.json())
            .then(response => {
                //loop through the data by its length 
                for(let i = 0; i < response.data.length; i++)
                {
                    //grab the name and id from each set of data and add it to the object
                    this.setState({teamName: {...this.state.teamName, [response.data[i].name]:response.data[i].id}})
                }
                //Have to call here so it can recieve tYear and teamName with data
                this.teamSeason()
                console.log(this.state.teamName)
            })
            .catch(err => {
                this.setState({ errorMsgTeam: 
                    "Please check spelling and make sure all feilds are entered."+ 
                    "If spelled correctly, players may have not played that year"}) 
            });
    }

    teamSeason = () =>
    {
        fetch(`https://www.balldontlie.io/api/v1/games?seasons[]=${this.state.tYear}&team_ids[]=${this.state.teamName[this.state.tName]}&per_page=82&postseason=false`)
            .then((dataset) => dataset.json())
            .then(result => {
            //get the id from the data returned then call individualStats() since we have the player ID now
            //this.setState({teamData: result.data})
            this.setState({teamData: result.data})
            console.log(this.state.teamData)
            if (this.state.teamData.length < 1)
            {
                this.setState({ errorMsgTeam: 
                    "Please check spelling and make sure all feilds are entered."+ 
                    "If spelled correctly, players may have not played that year"}) 
            }
            else
            {
                this.setState({ errorMsgTeam: ""})
            }
            })
            .catch(err => {
                this.setState({ errorMsgTeam: 
                    "Please check spelling and make sure all feilds are entered."+ 
                    "If spelled correctly, players may have not played that year"}) 
            });
            
    }
    

    handleStats()
    {
        //await fetch is used because await keyword is present, the asynchronous function is paused until the request completes
        //when request completes, response is assigned with the response object of the reuquest

        //PLAYERS ONLY HAVE POINTS IF THEY PLAYED THAT YEAR!!!!!!!!!!!!!!!!!!!!!!!!!!

            fetch(`https://www.balldontlie.io/api/v1/season_averages?season=${this.state.year}&player_ids[]=${this.state.playerID}`)
                .then((dataset) => dataset.json())
                .then(result => {
                    //fetch until the year 2020
                    if(this.state.year <= 2021) 
                    {
                        //move to the next year
                        this.setState({ 
                            year: this.state.year + 1
                        }, () => {
                            //call the fetch again once we move to the next year
                            this.handleStats()
                            //console.log(result.data)
                        })
                        //not every year has data(because they didnt play), so i handle the undefined with a log
                            if (typeof result.data[0] === 'undefined')
                            {
                                console.log("player did not play this year")
                            }
                            else
                            {
                                //get the data of the years they did play
                                this.setState({seasons: this.state.seasons + 1})
                                this.setState({pts: (this.state.pts + result.data[0]["pts"])})
                                this.setState({ast: (this.state.ast + result.data[0]["ast"])})
                                this.setState({reb: (this.state.reb + result.data[0]["reb"])})
                                //console.log("total points equal: " + this.state.pts)
                            }      
                    }
                    
                this.setState({ stats: result.data})      
            })
   
    }

    nextPage(){
        this.setState({
            //updates, tells react this needs to be re-rendered 
            count: this.state.count + 1
        }, ()=> {
            //callback
            this.componentDidMount()
            this.setState({year: 1979})
            console.log(this.state.count)

        })
        console.log("outside: "+this.state.count)
    }

    previousPage(){
        if (this.state.count > 1){
            this.setState({
                //updates, tells react this needs to be re-rendered 
                count: this.state.count - 1
            }, ()=> {
                //callback
                this.componentDidMount()
                this.setState({year: 1979})
                console.log(this.state.count)
            })
        }else{
            this.setState({
                //updates, tells react this needs to be re-rendered 
                count: 1
            })
        }
    }

    playerNameF(e){
        this.setState({playerName: e.currentTarget.innerHTML})
        this.setState({playerID: e.currentTarget.id}, 
            ()=> {
            this.handleStats()
            this.setState({year: 1979})
            this.setState({seasons: 0})
            this.setState({pts: 0})
            this.setState({ast: 0})
            this.setState({reb: 0})
            console.log("state is:"+this.state.playerID)
        })
    }

    handleChange(e){
        //You can control the values of more than one input field by adding a name attribute to each element.
        let n = e.currentTarget.name;
        let value = e.currentTarget.value;
        this.setState({[n]:value})
    }
    


    render()
    {
        return (
            
            <Router>
            <div className="players">
            <Nav />
            <Switch>
                
                <Route path="/Front" component={Front} />
                <Route path="/Player" 
                component={() => 
                <Player points={this.state.pts} assist={this.state.ast} rebounds={this.state.reb} 
                seasons={this.state.seasons} players={this.state.players} 
                playerName={this.state.playerName} playerNameF={this.playerNameF}
                previousPage={this.previousPage} nextPage={this.nextPage} ivStats={this.state.ivStats}/>} />
                {/*Must use render instead of componet*/}

                <Route path="/SearchPlayer" render={() => <SearchPlayer sName={this.state.sName} sYear={this.state.sYear}  
                handleChange={this.handleChange} aboutPlayer={this.aboutPlayer} ivStats={this.state.ivStats}
                errorMsg={this.state.errorMsg}/>} />

                <Route path="/SearchSeason" render={() => <SearchSeason tName={this.state.tName} tYear={this.state.tYear}  
                handleChange={this.handleChange} aboutTeam={this.aboutTeam} teamData={this.state.teamData}
                errorMsg={this.state.errorMsgTeam}/>} />
            </Switch>
            
            </div>
            </Router>
            
        )
    }
}

export default Nba
