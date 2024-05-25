import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import data from '../data/data.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  items = data;
  cores = ['var(--light-red)', 'var(--orangey-yellow)', 'var(--green-teal)', 'var(--cobalt-blue)'];

  getBackgroundColor(index: number): string {
    return this.cores[index % this.cores.length];
  }
}
