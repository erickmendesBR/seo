import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';

  constructor() {
    console.log("Construiu");
    
  }
}
