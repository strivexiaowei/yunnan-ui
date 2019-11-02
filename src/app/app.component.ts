import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'yunnan-ui';
  menu = [
    { name: 'Button', url: 'button' },
    { name: 'Drag-scroll', url: 'drag-scroll' },
    { name: 'Search-select', url: 'search-select' },
    { name: 'Scratch-card', url: 'scratch-card' },
    { name: 'htmltopdf', url: 'htmltopdf' }
  ];
  constructor() {}
}
