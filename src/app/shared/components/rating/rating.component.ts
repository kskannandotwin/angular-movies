import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-rating',
  imports: [MatIconModule, CommonModule],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent implements OnInit {

  ngOnInit(): void {
    this.maxRatingArray = Array(this.maxRating).fill(0);
  }
  @Input({ required: true })
  maxRating!: number;

  @Input()
  selectedRating: number = 0;

  clickedRating: number = 0;

  maxRatingArray: any[] = [];

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
  }
}
