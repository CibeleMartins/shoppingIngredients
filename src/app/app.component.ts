import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shoppIngredients';

  loadedFeature = 'recipe';
  
  renderListOrShopp(feature: string){
    this.loadedFeature = feature
  }
}
