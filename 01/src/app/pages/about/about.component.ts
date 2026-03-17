import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'about-app',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})

export class AboutComponent { }