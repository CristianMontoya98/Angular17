import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlbumcComponent } from './UI/pages/albumc/albumc.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AlbumcComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
