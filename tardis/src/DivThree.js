import React from "react"
//import DivOne from "./DivOne"

import Tardis from "./Tardis"

class DivThree extends Tardis {

    render() {
        return(
            
            <div onClick={this.changeIt} class="three">
                <h3>{this.state.tardis.name}</h3>
            </div>
            
        )
    }
}

export default DivThree