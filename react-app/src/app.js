import React from 'react';

import axios from 'axios';

import AddNewItem from './components/add-item.js';

import Items from './components/items.js';



const API_SERVER = process.env.REACT_APP_API;

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  addItem = async (items) => {
    await axios.post(`${API_SERVER}/items`, items);
    this.getItems();
    console.log('inside add');
  }

  deleteItem = async (id) => {
    await axios.delete(`${API_SERVER}/items/${id}`);
    this.getItems();
    console.log('inside del');
  }

  updateItem = async (item) => {
    await axios.put(`${API_SERVER}/items/${item._id}`, item);
    this.getItems();
    console.log('inside update');
  }

  getItems = async () => {
    const response = await axios.get(`${API_SERVER}/items`);
    const items = response.data;
    this.setState({items});
    console.log('inside get');
  }

  async componentDidMount() {
    await this.getItems();
  }

  render() {
    return (
      <div>
        <h1>Our Items</h1>
        <AddNewItem handleAddItem={this.addItem} />
        <hr />
        <Items handleDelete={this.deleteItem} itemsList={this.state.items} />
      </div>
    );
  }
}

export default App;
