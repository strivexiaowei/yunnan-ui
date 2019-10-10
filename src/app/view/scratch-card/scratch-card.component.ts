import { ScratchCard } from './../../../assets/js/scratchcard';
import { Component, OnInit, AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-scratch-card',
  templateUrl: './scratch-card.component.html',
  styleUrls: ['./scratch-card.component.scss']
})
export class ScratchCardComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {

  }
  ngAfterViewInit() {
    new ScratchCard({
      canvas: document.getElementById('canvas'),
      coverImg: '/assets/images/scratch-2x.jpg',
      pixelRatio: 2,
      doneCallback: () => {
        console.log('done');
      }
    }).init();
  }

}
