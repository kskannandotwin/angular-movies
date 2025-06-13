import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-rating',
  imports: [MatIconModule, CommonModule],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent {

  @Input({ required: true, transform: (value: number) => Array(value).fill(0) })
  maxRating!: any[];

  @Input()
  selectedRating: number = 0;

  @Output()
  rated = new EventEmitter<number>();

  clickedRating: number = 0;

  handleMouseEnter(index: number): void {
    this.selectedRating = index + 1;
  }

  handleMouseLeave(): void {
    if (this.clickedRating !== 0) {
      this.selectedRating = this.clickedRating;
    } else {
      this.selectedRating = 0;
    }
  }

  handleClick(index: number): void {
    this.clickedRating = index + 1;
    this.selectedRating = this.clickedRating;
    this.rated.emit(this.clickedRating);
  }
}
