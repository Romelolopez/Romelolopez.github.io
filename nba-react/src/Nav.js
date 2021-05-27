import React from "react"
import {Link} from "react-router-dom"

class Nav extends React.Component 
{

    render() 
    {
        return (
            <div>
            <nav>
                
                <div className="nav">
                <h3>BallDontLie.io</h3>
                    {/* <Link to="/NBA"><div>ALL NBA</div></Link> */}
                    <Link to="/Front"><div>Home</div></Link>
                    <Link to="/Player"><div>Career Stats (All Players)</div></Link>
                    <Link to="/SearchPlayer"><div>Individual Player Stat Search (Year)</div></Link>
                    <Link to="/SearchSeason"><div>Team Season Search</div></Link>
                </div>
            </nav>
            </div> 

        )
    }
}

export default Nav