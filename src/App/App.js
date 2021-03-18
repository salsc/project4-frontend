import axios from "axios";
import React, { Component } from 'react';
import {Route,Link,Switch,Redirect} from "react-router-dom";
import './App.css';
import Home from '../Home/Home';
import Show from '../Show/Show';
import Create from'../Create/Create';
import Edit  from '../Edit/Edit';

const url = 'http://localhost:3000/api/recipes'

class App extends Component {
  constructor(){
    super()
    this.state={
      recipes: [],
      submitted: false
    }
  }

  async getRecipes() {
    let response = await axios.get(url)
    console.log('response',response)
    this.setState({
      recipes: response.data.allRecipes
    })
  }
  componentDidMount = async() => {
    await this.getRecipes()
  }

  addRecipe = (e) => {
    e.preventDefault();
    axios
      .post(url, {
        recName: e.target.recName.value,
        recNameMore: e.target.recNameMore.value,
        strIngredient1: e.target.strIngredient1.value,
        strIngredient2: e.target.strIngredient2.value,
        strIngredient3: e.target.strIngredient3.value,
        strIngredient4: e.target.strIngredient4.value,
        strIngredient5: e.target.strIngredient5.value,
        strMeasure1: e.target.strMeasure1.value,
        strMeasure2: e.target.strMeasure2.value,
        strMeasure3: e.target.strMeasure3.value,
        strMeasure4: e.target.strMeasure4.value,
        strMeasure5: e.target.strMeasure5.value,
        txtDirections1: e.target.txtDirections1.value,
        txtDirections2: e.target.txtDirections2.value,
        txtDirections3: e.target.txtDirections3.value,
        txtDirections4: e.target.txtDirections4.value,
        strRecipeImage: e.target.strRecipeImage.value,
      })
      .then((response) => {
        console.log(response);
        let tempArray = this.state.recipes;
        tempArray.push(response.data.newRecipe);
        this.setState({
          recipes: tempArray,
          submitted: true
        });
      });
    this.props.history.push("/")
  };

  editRecipe = (e,id) => {
    e.preventDefault();
    axios
      .put(`${url}/detail/${id}`, {
        recName: e.target.recName.value,
        recNameMore: e.target.recNameMore.value,
        strIngredient1: e.target.strIngredient1.value,
        strIngredient2: e.target.strIngredient2.value,
        strIngredient3: e.target.strIngredient3.value,
        strIngredient4: e.target.strIngredient4.value,
        strIngredient5: e.target.strIngredient5.value,
        strMeasure1: e.target.strMeasure1.value,
        strMeasure2: e.target.strMeasure2.value,
        strMeasure3: e.target.strMeasure3.value,
        strMeasure4: e.target.strMeasure4.value,
        strMeasure5: e.target.strMeasure5.value,
        txtDirections1: e.target.txtDirections1.value,
        txtDirections2: e.target.txtDirections2.value,
        txtDirections3: e.target.txtDirections3.value,
        txtDirections4: e.target.txtDirections4.value,
        strRecipeImage: e.target.strRecipeImage.value,
      })
      .then((response) => {
        console.log(response);
        this.getRecipes()
      });
    this.props.history.push("/")
  };

  deleteRecipe = (id) => {
    axios
      .delete(`${url}/detail/${id}`)
      .then((response) => {
        console.log('delete',response);
        this.getRecipes()
      });
    this.props.history.push("/")
  };

  render() {
    console.log('state',this.state.recipes)
    return (
      <div className="App">
        <div className="App-header">
          <Link className="App-link" to='/'>
            <p id="title">Recipe App</p>
          </Link>
        </div>
        <main>
          <Switch>
            <Route
              exact
              path="/"
              component={() => (<Home recipes={this.state.recipes} />)}
            />
            <Route
              path="/new"
              component={() => (<Create addRecipe={this.addRecipe} />)}
            />
            <Route
              exact
              path="/detail/:id"
              component={(routerProps) => (
                <Show
                  {...routerProps}
                  recipes={this.state.recipes}
                />
              )}
            />
            <Route
              exact
              path="/detail/:id/edit"
              component={(routerProps) => (
                <Edit
                  {...routerProps}
                  recipes={this.state.recipes}
                  editRecipe={this.editRecipe}
                  deleteRecipe={this.deleteRecipe}
                />
              )}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;