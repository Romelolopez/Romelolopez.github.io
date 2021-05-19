
import React from "react"

class Incart extends React.Component{
    constructor(props) {
        super(props)
        this.state = {list : []}
        
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event) {
        let index = event.target.parentNode.id
        this.props.addItem(index)
    
    }

    handleUpdate(event){
        //let index = event.target.parentNode.id
        let filteredGrocery =  this.props.groceryList.filter((item) => {
            if (item.isPurchased === true){
                return true
            } else {
                return false
            } 
        })  
        
        //let filteredGrocery = this.props.groceries.filter((item, index) => item.isPurchased ? true:false)
        
        this.setState({
            list: filteredGrocery
        })  
    }



    render(){
        
    return(
    <div>
        
        <div>
                <h3>Update Cart:</h3>
                <button onClick={this.handleUpdate}>UPDATE CART</button>
                {this.state.list.map((grocery, index) => <li key={index}>Purchased Item: {grocery.item}, Quantitiy: {grocery.quantity}, Units: {grocery.units} </li>)}
        </div>
    </div>
        )
    }
}

export default Incart 