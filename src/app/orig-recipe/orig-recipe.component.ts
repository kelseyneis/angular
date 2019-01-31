import { Component, OnInit } from '@angular/core';

import { CopyInputService } from '../copy-input.service';

@Component({
  selector: 'app-orig-recipe',
  templateUrl: './orig-recipe.component.html',
  styleUrls: ['./orig-recipe.component.css']
})
export class OrigRecipeComponent implements OnInit {
  name: string = "Sally";
  constructor(private copyInputService: CopyInputService) { }

  ngOnInit() {
  }

}