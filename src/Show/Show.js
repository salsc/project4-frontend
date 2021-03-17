import React, { Component } from "react";

export default class Show extends Component {
    render() {
        console.log('show', this.props)
        const recipeDetail = this.props.recipes.find((recipe) => {
            return recipe.id == this.props.match.params.id;
        });
        console.log('recipedetail', recipeDetail)

        return (
            <div>
                <h3>{recipeDetail.recName}</h3>
                <h4>{recipeDetail.recNameMore}</h4>
                <h5>Ingredients</h5>
                <ul>
                    <li>{recipeDetail.strIngredient1} {recipeDetail.strMeasure1}</li>
                    <li>{recipeDetail.strIngredient2} {recipeDetail.strMeasure2}</li>
                    <li>{recipeDetail.strIngredient3} {recipeDetail.strMeasure3}</li>
                    <li>{recipeDetail.strIngredient4} {recipeDetail.strMeasure4}</li>
                    <li>{recipeDetail.strIngredient5} {recipeDetail.strMeasure5}</li>
                </ul>
                <h5>Directions</h5>
                <ol>
                    <li>{recipeDetail.txtDirections1}</li>
                    <li>{recipeDetail.txtDirections2}</li>
                    <li>{recipeDetail.txtDirections3}</li>
                    <li>{recipeDetail.txtDirections4}</li>
                </ol>
                <img src={recipeDetail.strRecipeImage}></img>
            </div>
        );
    }
}