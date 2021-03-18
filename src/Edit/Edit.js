import React, { Component } from "react";
import { Redirect } from "react-router-dom"

export default class Edit extends Component {
  render() {
    const recipeDetail = this.props.recipes.find((recipe) => {
        return recipe.id == this.props.match.params.id;
    });

    return (
      <div>
          <h1>Edit This Recipe</h1>
          <button onClick={()=>this.props.deleteRecipe(recipeDetail.id)}>Delete Recipe</button>
            <form onSubmit={(event)=>this.props.editRecipe(event,recipeDetail.id)}>
                <div className="formLine">
                    <input type="text" name="recName" defaultValue={recipeDetail.recName} placeholder="Recipe Name" />
                    <input type="text" name="recNameMore" defaultValue={recipeDetail.recNameMore} placeholder="Additional Recipe Name" />
                </div>
                <div className="formLine">
                    <input type="text" name="strIngredient1" defaultValue={recipeDetail.strIngredient1} placeholder="Ingredient" />
                    <input type="text" name="strMeasure1" defaultValue={recipeDetail.strMeasure1} placeholder="Measure" />
                </div>
                <div className="formLine">
                    <input type="text" name="strIngredient2" defaultValue={recipeDetail.strIngredient2} placeholder="Ingredient" />
                    <input type="text" name="strMeasure2" defaultValue={recipeDetail.strMeasure2} placeholder="Measure" />
                </div>
                <div className="formLine">
                    <input type="text" name="strIngredient3" defaultValue={recipeDetail.strIngredient3} placeholder="Ingredient" />
                    <input type="text" name="strMeasure3" vadefaultValueue={recipeDetail.strMeasure3} placeholder="Measure" />
                </div>
                <div className="formLine">
                    <input type="text" name="strIngredient4" defaultValue={recipeDetail.strIngredient4} placeholder="Ingredient" />
                    <input type="text" name="strMeasure4" defaultValue={recipeDetail.strMeasure4} placeholder="Measure" />
                </div>
                <div className="formLine">
                    <input type="text" name="strIngredient5" defaultValue={recipeDetail.strIngredient5} placeholder="Ingredient" />
                    <input type="text" name="strMeasure5" defaultValue={recipeDetail.strMeasure5} placeholder="Measure" />
                </div>
                <div>
                    <input type="text" name="txtDirections1" defaultValue={recipeDetail.txtDirections1} placeholder="Directions 1" />
                </div>
                <div>
                    <input type="text" name="txtDirections2" vadefaultValueue={recipeDetail.txtDirections2} placeholder="Directions 2" />
                </div>
                <div>
                    <input type="text" name="txtDirections3" defaultValue={recipeDetail.txtDirections3} placeholder="Directions 3" />
                </div>
                <div>
                    <input type="text" name="txtDirections4" defaultValue={recipeDetail.txtDirections4} placeholder="Directions 4" />
                </div>
                <div>
                    <input type="text" name="strRecipeImage" defaultValue={recipeDetail.strRecipeImage} placeholder="Image URL" />
                </div>
                <input type="submit" value="Update Recipe" />
            </form>
      </div>
    );
  }
}