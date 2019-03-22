import { Component, OnInit, Input, OnChanges, SimpleChange} from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit, OnChanges{

  constructor() { }
  // private _flour = 0;
  // private _water = 0;
  // private _totalWeight = 0;
  // private _waterProp = 0;
  // private _flourProp = 0;
 // 50 # bread flour, 10 # all purpose flour, 10 quarts water, 1 # Salt, 2 # konsui
    @Input() konsui : number;
    @Input() salt : number;
    @Input() breadFlour : number;
    @Input() flour : number; 
    @Input() water : number;  
    @Input() waterWeight : number;
    @Input() totalWeight : number;
    @Input() flourProp : number;
    @Input() waterProp : number;
setNewRecipe(val, prop){
  if(val){
    if(prop === 'flour'){
      this.waterWeight = val / (this.totalWeight * this.flourProp) * this.waterWeight;
      this.waterWeight = (Math.round(this.waterWeight * 4) / 4).toFixed(2);
      this.water = (this.waterWeight / 2.09).toFixed(2)
      this.totalWeight = parseFloat(val) + parseFloat(this.waterWeight);
    }else if(prop === 'water'){
      this.waterWeight = (Math.round(val * 2.09 * 4) / 4).toFixed(2)
      this.flour = this.waterWeight / (this.totalWeight * this.waterProp) * this.flour;
      this.flour = (Math.round(this.flour * 4) / 4).toFixed(2);
      this.totalWeight = parseFloat(this.flour) + parseFloat(this.waterWeight);
    }else if(prop === 'weight'){
      this.flour = this.flourProp * val;
      this.flour = (Math.round(this.flour * 4) / 4).toFixed(2);
      this.waterWeight = this.waterProp * val;
      this.waterWeight = (Math.round(this.waterWeight * 4) / 4).toFixed(2);
      this.water = (Math.round(this.waterWeight / 2.09 * 4) / 4).toFixed(2);
    }
  }
}

    convertWaterQuartsToPounds(){

    }
    ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
      this.waterWeight = (this.water * 2.09).toFixed(2);
      this.totalWeight = parseInt(this.flour) + parseInt(this.waterWeight);
      this.flourProp = this.flour / this.totalWeight;
      this.waterProp = this.waterWeight / this.totalWeight;
    }
  // @Input()
  //   set totalWeight(totalWeight: number) {
  //     this._totalWeight = totalWeight;
  //   }

  //   get totalWeight(): number { return this._totalWeight; }

  // @Input()
  //   set flour(flour: number) {
  //     this._flour = flour;
  //   }
  
  //   get flour(): number { return this._flour; }

  //   @Input()
  //   set water(water: number) {
  //     this._water = water/this._totalWeight;
  //   }
  
  //   get water(): number { return this._water; }
  // @Input()
  //   set waterProp(waterProp: number) {
  //     this._waterProp = this._water/this._totalWeight;
  //   }
  
  //   get waterProp(): number { return this._waterProp; }

    

  //   @Input()
  //   set flourProp(flourProp: number) {
  //     this._flourProp = this._flour/this._totalWeight;
  //   }
  
  //   get flourProp(): number { return this._water; }
  
  ngOnInit() {
  }

}