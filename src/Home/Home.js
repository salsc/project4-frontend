import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    console.log('home recipes',this.props.recipes)
    const allRecipes = this.props.recipes.map((recipe) => {
      return (
        <li key={recipe.id}>
          <Link to={`/detail/${recipe.id}`}>{recipe.recName}</Link>
        </li>
      );
    });
    return (
      <div>
        <h1>All Recipes</h1>
        <nav>
          <Link to="/new"><h3>Create a New Recipe</h3></Link>
        </nav>
        <ul>{allRecipes}</ul>
      </div>
    );
  }
}