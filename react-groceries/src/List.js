
import React from "react"


class List extends React.Component{

    handleClick=(event)=>{
        let index = event.target.parentNode.id
        this.props.getItem(index)
        
    }

    handleSubmit=(event)=>{
        let index = event.target.parentNode.id
        this.props.removeItem(index)
        
        console.log("index" + index)
        console.log(event.target.parentNode.attributes[1].value)
        console.log(this.props.groceryList[index].isPurchased)
    }

    render(){
        
    return(
    <div>
        <div>
            <p>Items Needed</p>
            {this.props.groceryList.map((obj, index) =>
            <p key={obj.id} id={index} value={obj.isPurchased}>{obj.item} {obj.units} {obj.quantity} 
            <button onClick={this.handleSubmit}>Remove</button>
            <button onClick={this.handleClick}>{this.props.groceryList[index].isPurchased ? "Remove From Cart" : "Add To Cart"}</button>
            </p>
            )}
            
        </div>
    </div>
        )
    }
}

export default List 