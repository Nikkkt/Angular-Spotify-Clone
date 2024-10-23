import { Component, Input } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-browse-card',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf],
  templateUrl: './browse-card.component.html',
  styleUrl: './browse-card.component.scss'
})
export class BrowseCardComponent {
  @Input() bgColor!: string;
  @Input() textColor!: string;
  @Input() title!: string;
  constructor() {}

  ngOnInit(): void {}
}
