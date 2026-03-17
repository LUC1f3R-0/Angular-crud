import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'about-app',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})

export class AboutComponent {
  name = new FormControl('', {nonNullable: true});
  
  clicked(){
    console.log("clicked")
  }
}