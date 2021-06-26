import './App.css';
import { Component } from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };

    //this.bindMEthod = this.bindMEthod.bind(this);  // bind method so it can use this in it
  }

  async componentDidMount() {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const data_json = await data.json();
    this.setState({monsters: data_json});
  };

  setSearchField =  sf => {
   this.setState({searchField: sf.target.value});
  };

  // only for demo
  // bindMEthod(bm) {
  //   console.log("I am bind method")
  // };


  render() {
    const {monsters, searchField} = this.state;
    const filteredMonster = monsters.filter(m => m.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <SearchBox placeHolder='search monsters' handleFunc={this.setSearchField} ></SearchBox>
        <CardList monsters = {filteredMonster}></CardList>
      </div>
    );
  }
}

export default App;
