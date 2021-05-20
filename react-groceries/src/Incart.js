
import React from "react"

class Incart extends React.Component{
    
    handleSubmit =(event)=>{
        let index = event.target.parentNode.id
        this.props.removeItem(index)
    }


    render(){
        /*we use/set filteredGrocery in render because we want to 
        automactically get the items that isPurcahsed is true.
        we then use map to display those items*/
        let filteredGrocery =  this.props.groceryList.filter((item) => {
            if (item.isPurchased === true){
                return true
            } else {
                return false
            } 
        })  
    return(
    <div>
        
        <div>
                <h3>In Cart:</h3>
                {filteredGrocery.map((grocery, index) => 
                <li key={index}>Purchased Item: {grocery.item}, Quantitiy: {grocery.quantity}, Units: {grocery.units}</li>)}
        </div>
    </div>
        )
    }
}

export default Incart 