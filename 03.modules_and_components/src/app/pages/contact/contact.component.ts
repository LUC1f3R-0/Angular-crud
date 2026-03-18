import { Component } from "@angular/core";
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: 'contact-app',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent { }