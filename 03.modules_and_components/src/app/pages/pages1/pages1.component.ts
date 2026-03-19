import { Component, signal } from "@angular/core";

@Component({
  selector: 'page1-app',
  standalone: true,
  templateUrl: './pages1.component.html',
  styleUrls: ['./pages1.component.css'],
})

export class PagesOneComponent {
  isClicked = signal(false);
  
  clicked() {
    this.isClicked.update(v => !v);
  }
}