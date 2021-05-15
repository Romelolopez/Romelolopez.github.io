
import React from "react"


class List extends React.Component{
    constructor(props) {
        super(props)
        this.state = {list : []}
        this.handleSubmit = this.handleSubmit.bind(this); 
        //this.handleUpdate = this.handleUpdate.bind(this);
      }
  
    handleSubmit(event) {
        
        let index = event.target.parentNode.id
        
        this.props.removeItem(index)
        console.log("index" + index)
        //console.log(event.target.parentNode.attributes[1].value)
        //console.log(this.props.groceryList[index].isPurchased)
    }


    render(){
        
    return(
    <div>
        <div>
            <p>Items Needed</p>
            {this.props.groceryList.map((obj, index) =>
            <p key={obj.id} id={index} value={obj.isPurchased}>{obj.item} {obj.units} {obj.quantity} <button onClick={this.handleSubmit}>In Cart</button></p>
            )}
        </div>
    </div>
        )
    }
}

export default List 