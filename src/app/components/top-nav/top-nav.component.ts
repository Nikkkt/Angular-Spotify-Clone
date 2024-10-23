import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SearchBarService } from '../../services/searchbar.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-top-nav',
  imports: [CommonModule, NgFor, NgIf],
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
  standalone: true,
})
export class TopNavComponent implements OnInit {
  public isSearchFieldVisible: boolean = false;
  @Output() public inputFilterRes: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router, private sb: SearchBarService) {}

  ngOnInit(): void {
    this.sb.isSearchVisible.subscribe((status) => {
      this.isSearchFieldVisible = status;
    });
  }

  onNavigateToLogin() {
    this.router.navigate(['/', 'login']);
  }

  filterBrowsingList(inputElement: HTMLInputElement) {
    this.inputFilterRes.emit(inputElement.value);
  }
}