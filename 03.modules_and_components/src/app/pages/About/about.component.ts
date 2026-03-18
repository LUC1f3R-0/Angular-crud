import { Component } from "@angular/core";
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: 'home-app',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent { }