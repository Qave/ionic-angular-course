import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    { 
      id: 'r1', 
      title: 'Schnitzel', 
      imageUrl: 'https://madrejsen.dk/wp-content/uploads/2018/01/Opskrift-p%C3%A5-hjemmelavet-Schnitzel-13.jpg', 
      ingredients: ['French Fries', 'Pork Meat', 'Salad'] },
    { 
      id: 'r2', 
      title: 'Spaghetti', 
      imageUrl: 'https://images.arla.com/recordid/896CFDCF-533E-46C0-9E5A8E4E41E45B6B/spaghetti-med-kylling-og-tomatsauce.jpg?crop=(0,167,0,-527)&w=1269&h=715&ak=6826258c&hm=da40d5e3', 
      ingredients: ['Pasta', 'Meat', 'Tomatoes'] }
  ];
  constructor() { }

  getAllRecipes(){
    return [...this.recipes];
  }
  getRecipe(id:string){
    return {...this.recipes.find(recipe => {
      return recipe.id === id;
    })};
  }
  deleteRecipe(recipeId: string){
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    })
  }
}
