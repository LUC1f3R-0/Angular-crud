import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'about-app',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})

export class AboutComponent{
  name = new FormControl('', { nonNullable: true });
  
  submit() {
    console.log("this.name.value");
  }
}