import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // 85.4 add OnNavigate first, followed by loadedFeature
  loadedFeature = 'recipe';
  
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
