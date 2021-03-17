import React, { Component } from "react";
import { Redirect } from "react-router-dom"

export default class Create extends Component {
  render() {
    return (
      <div>
          <h1>Create New Recipe</h1>
            <form onSubmit={this.props.addRecipe}>
                <div className="formLine">
                    <input type="text" name="recName" placeholder="Recipe Name" />
                    <input type="text" name="recNameMore" placeholder="Recipe Name Additional" />
                </div>
                <div className="formLine">
                    <input type="text" name="strIngredient1" placeholder="Ingredient" />
                    <input type="text" name="strMeasure1" placeholder="Measure" />
                </div>
                <div className="formLine">
                    <input type="text" name="strIngredient2" placeholder="Ingredient" />
                    <input type="text" name="strMeasure2" placeholder="Measure" />
                </div>
                <div className="formLine">
                    <input type="text" name="strIngredient3" placeholder="Ingredient" />
                    <input type="text" name="strMeasure3" placeholder="Measure" />
                </div>
                <div className="formLine">
                    <input type="text" name="strIngredient4" placeholder="Ingredient" />
                    <input type="text" name="strMeasure4" placeholder="Measure" />
                </div>
                <div className="formLine">
                    <input type="text" name="strIngredient5" placeholder="Ingredient" />
                    <input type="text" name="strMeasure5" placeholder="Measure" />
                </div>
                <div>
                    <input type="text" name="txtDirections1" placeholder="Directions 1" />
                </div>
                <div>
                    <input type="text" name="txtDirections2" placeholder="Directions 2" />
                </div>
                <div>
                    <input type="text" name="txtDirections3" placeholder="Directions 3" />
                </div>
                <div>
                    <input type="text" name="txtDirections4" placeholder="Directions 4" />
                </div>
                <div>
                    <input type="text" name="strRecipeImage" placeholder="Image URL" />
                </div>
                <input type="submit" value="Add Recipe" />
            </form>
      </div>
    );
  }
}