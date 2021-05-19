import React from 'react'
import List from "./List"
import Incart from "./Incart"


class Grocery extends React.Component {
	constructor(props) {
		super(props);
		//The state object is where you store property values that belongs to the component.
		this.state = {
			purchase: [],
			groceryList: [{ id: 0, item: "milk", units: "three", quantity: 0, isPurchased: false },
			{ id: 1, item: "seeds", units: "three", quantity: 1, isPurchased: false },
			{ id: 2, item: "bread", units: "three", quantity: 1, isPurchased: false }],

			item: '',
			units: '',
			quantity: 0,
			isPurchased: false,
		};
		//handleChange is equal to any future instance of handleChange
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.removeItem = this.removeItem.bind(this);
		this.getItem = this.getItem.bind(this);
	}

	handleChange(event) {
		//You can control the values of more than one input field by adding a name attribute to each element.
		let n = event.target.name;
		let value = event.target.value;
		this.setState({ [n]: value })
	}

	handleSubmit(event) {
		const newItem = {
			id: this.state.groceryList.length + 1,
			item: this.state.item,
			units: this.state.units,
			quantity: this.state.quantity,
			isPurchased: false,
		};


		//Make copy, so you can update the state. (which you normally do not do)
		let cgl = [...this.state.groceryList, newItem]

		this.setState({
			//we populate grocerylist with cgl, the new version of the array. we make the changes outside and state it here.
			//YOU DONT WANT TO CHANGE THE STATE. we are setting the state. its in the name.
			//concat makes a new array, works the same as cgl
			//this.state.groceryList.concat([newItem]) 
			groceryList: cgl,
			item: '',
			units: '',
			quantity: 0,
			isPurchased: false,
		}, () => console.log(this.state.groceryList));
		event.preventDefault();
	}


	removeItem(index) 
	{
		console.log(index)
		//Make a copy of groceryList
		let gCopy = this.state.groceryList.slice()
		//Take the selected index out
		gCopy.splice(index, 1)
		//Set the state to copy
		this.setState({
			groceryList: gCopy,
		})
		console.log(this.state.groceryList)
	}

	getItem(index)
	{	
		console.log(index)
		//let index = event.target.parentNode.id
		let newArry = this.state.groceryList.slice()
        newArry[index].isPurchased = !newArry[index].isPurchased
        this.setState({groceryList: newArry})
		console.log(newArry[0].isPurchased)
		console.log("newarry"+this.state.groceryList)
	}

	render() {
		return (
			<div>
				<h1>Grocery List</h1>

				<form onSubmit={this.handleSubmit}>
					<label>
						Item:
						<input type="text" name="item" value={this.state.item} onChange={this.handleChange} />
					</label>
					<br></br>
					<label>
						Units
						<input type="text" name="units" value={this.state.units} onChange={this.handleChange} />
					</label>
					<br></br>
					<label>
						Quantity
						<input type="text" name="quantity" value={this.state.quantity} onChange={this.handleChange} />
					</label>
					<br></br>
					<input type="submit" value="Submit" />
				</form>

				<List groceryList={this.state.groceryList} removeItem={this.removeItem} getItem={this.getItem} />
				<Incart groceryList={this.state.groceryList} addItem={this.handleToggle} />

			</div>

		);
	}
}

export default Grocery
