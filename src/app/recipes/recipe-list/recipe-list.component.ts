import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is description of test recipe', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/carrot-cake.jpg'),
    new Recipe('A Test Recipe 2','This is description of test recipe  2', 'assets/img/cake.jpg')
  ];

s
  constructor() { }

  ngOnInit() {
  }

}
