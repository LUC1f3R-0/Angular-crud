import { Component, Input, signal } from "@angular/core";

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() linkText = 'Read more';
  @Input() link = '#';
  @Input() console = '';

  showExtra = signal(false);
  
  clicked() {
    this.showExtra.update(c => !c);
  }
}