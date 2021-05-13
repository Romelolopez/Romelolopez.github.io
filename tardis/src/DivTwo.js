import React from "react"
import DivThree from "./DivThree"
import Tardis from "./Tardis"

class DivTwo extends Tardis {

    render() {
        return(
            <div class="two">
                <DivThree />
                <DivThree />
            </div>
        )
    }
}


export default DivTwo 