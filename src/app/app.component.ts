import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from "./test/test.component";
import { CardComponent } from "./card/card.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'secondWeek';
}
