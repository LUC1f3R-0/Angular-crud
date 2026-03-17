import { Component, signal } from "@angular/core";

@Component({
  selector: 'home-app',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent {
  count = signal(0);
  
  increase() {
    this.count.update(i => i + 1);
  }
  
  decrease() {
    this.count.update(d => d + 1);
  }
  
  reset() {
    this.count.set(0);
  }
}