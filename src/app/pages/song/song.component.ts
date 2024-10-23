import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { SongDataService } from '../../services/song-data.service';

@Component({
  selector: 'app-song',
  standalone: true,
  imports: [],
  templateUrl: './song.component.html',
  styleUrl: './song.component.scss'
})
export class SongComponent implements OnInit {
  public songData!: any;
  constructor(
    private sd: SongDataService,
    private route: Router,
    private acivatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.acivatedRoute.params.pipe(map((d) => window.history.state)).subscribe((data) => (this.songData = data));
    if (this.songData?.link === '') {
      this.route.navigate(['/']);
      window.alert(
        `No Song Available For Selected Album with ${this.songData.id}`
      );
    }
  }
}