import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  constructor() { }
 private _name = '';
 
  @Input()
  set name(name: string) {
    this._name = (name && name.trim());
  }
 
  get name(): string { return this._name; }
  ngOnInit() {
  }

}