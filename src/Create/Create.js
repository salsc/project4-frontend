import React, { Component } from "react";

export default class Create extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.addRecipe}>
            <div className="formLine">
          <input type="text" name="recName" value="Recipe Name" />
          <input type="text" name="recNameMore" />
            </div>
            <div className="formLine">
          <input type="text" name="strIngredient1" />
          <input type="text" name="strMeasure1" />
            </div>
            <div className="formLine">
          <input type="text" name="strIngredient2" />
          <input type="text" name="strMeasure2" />
            </div>
            <div className="formLine">
          <input type="text" name="strIngredient3" />
          <input type="text" name="strMeasure3" />
            </div>
            <div className="formLine">
          <input type="text" name="strIngredient4" />
          <input type="text" name="strMeasure4" />
            </div>
            <div className="formLine">
          <input type="text" name="strIngredient5" />
          <input type="text" name="strMeasure5" />
            </div>
          <input type="text" name="txtDirections1" />
          <input type="text" name="txtDirections2" />
          <input type="text" name="txtDirections3" />
          <input type="text" name="txtDirections4" />
          <input type="text" name="strRecipeImage" />
          <input type="submit" value="Add Recipe" />
        </form>
      </div>
    );
  }
}