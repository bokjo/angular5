import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import {  } from 'events';

@Component({
  selector: 'star-rating',
  templateUrl: './star.component.html',
  styleUrls: ['./start.component.css']
})

export class StarComponent implements OnChanges {
  @Input() rating: number;
  starWidth: number;
  @Output() notifyRating: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void {
    this.starWidth = this.rating * 120 / 5;
  }

  onClick() {
    this.notifyRating.emit(`The rating is: ${this.rating}`);
  }

}
