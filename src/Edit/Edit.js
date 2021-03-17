import React, { Component } from "react";
import { Redirect } from "react-router-dom"

export default class Edit extends Component {
    constructor() {
        super()
        this.state = {}
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    componentDidMount() {
        const recipeDetail = this.props.recipes.find((recipe) => {
            return recipe.id == this.props.match.params.id;
        });  
        this.setState({...recipeDetail})
    }

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
                    <input type="text" onChange={this.handleChange} name="recName" value={this.state.recName} placeholder="Recipe Name" />
                    <input type="text" onChange={this.handleChange} name="recNameMore" value={this.state.recNameMore} placeholder="Additional Recipe Name" />
                </div>
                <div className="formLine">
                    <input type="text" onChange={this.handleChange} name="strIngredient1" value={this.state.strIngredient1} placeholder="Ingredient" />
                    <input type="text" onChange={this.handleChange} name="strMeasure1" value={this.state.strMeasure1} placeholder="Measure" />
                </div>
                <div className="formLine">
                    <input type="text" onChange={this.handleChange} name="strIngredient2" value={this.state.strIngredient2} placeholder="Ingredient" />
                    <input type="text" onChange={this.handleChange} name="strMeasure2" value={this.state.strMeasure2} placeholder="Measure" />
                </div>
                <div className="formLine">
                    <input type="text" onChange={this.handleChange} name="strIngredient3" value={this.state.strIngredient3} placeholder="Ingredient" />
                    <input type="text" onChange={this.handleChange} name="strMeasure3" value={this.state.strMeasure3} placeholder="Measure" />
                </div>
                <div className="formLine">
                    <input type="text" onChange={this.handleChange} name="strIngredient4" value={this.state.strIngredient4} placeholder="Ingredient" />
                    <input type="text" onChange={this.handleChange} name="strMeasure4" value={this.state.strMeasure4} placeholder="Measure" />
                </div>
                <div className="formLine">
                    <input type="text" onChange={this.handleChange} name="strIngredient5" value={this.state.strIngredient5} placeholder="Ingredient" />
                    <input type="text" onChange={this.handleChange} name="strMeasure5" value={this.state.strMeasure5} placeholder="Measure" />
                </div>
                <div>
                    <input type="text" onChange={this.handleChange} name="txtDirections1" value={this.state.txtDirections1} placeholder="Directions 1" />
                </div>
                <div>
                    <input type="text" onChange={this.handleChange} name="txtDirections2" value={this.state.txtDirections2} placeholder="Directions 2" />
                </div>
                <div>
                    <input type="text" onChange={this.handleChange} name="txtDirections3" value={this.state.txtDirections3} placeholder="Directions 3" />
                </div>
                <div>
                    <input type="text" onChange={this.handleChange} name="txtDirections4" value={this.state.txtDirections4} placeholder="Directions 4" />
                </div>
                <div>
                    <input type="text" onChange={this.handleChange} name="strRecipeImage" value={this.state.strRecipeImage} placeholder="Image URL" />
                </div>
                <input type="submit" value="Update Recipe" />
            </form>
      </div>
    );
  }
}