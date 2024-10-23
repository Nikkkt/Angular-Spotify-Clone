import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { TopNavComponent } from '../../components/top-nav/top-nav.component'
import { SongCardComponent } from '../../components/song-card/song-card.component'
import { SearchBarService } from '../../services/searchbar.service';
import { BrowseCardComponent } from '../../components/browse-card/browse-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TopNavComponent, SongCardComponent, BrowseCardComponent, CommonModule, NgFor, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  public browserAll = [
    { bgColor: 'red', color: 'white', title: 'Podcasts' },
    { bgColor: 'green', color: 'white', title: 'Made for you' },
    { bgColor: 'purple', color: 'white', title: 'Charts' },
    { bgColor: 'blue', color: 'white', title: 'Live streams' },
    { bgColor: 'pink', color: 'white', title: 'Bollywood' },
    { bgColor: 'lightblue', color: 'white', title: 'Punjabi' },
    { bgColor: 'orange', color: 'white', title: 'Tamil' },
    { bgColor: 'yellow', color: 'white', title: 'Telugu' },
    { bgColor: 'black', color: 'white', title: 'Marathi' },
    { bgColor: 'orangered', color: 'white', title: 'Hip-Hop' },
    { bgColor: 'darkgray', color: 'white', title: 'Workout' },
    { bgColor: 'smokewhite', color: 'white', title: 'R&B' },
  ];
  public songCards = [
    {
      song_id: 1,
      thumbnail: 'assets/album.jpg',
      title: 'Romantic Songs',
      description: 'Relax and indulge with beautiful piano pieces',
      song_link: '../../assets/dangerous.mp3',
    },
    {
      song_id: 2,
      thumbnail: 'assets/album.jpg',
      title: 'Peaceful Songs',
      description: 'Relax and indulge with beautiful piano pieces',
      song_link: '',
    },
    {
      song_id: 3,
      thumbnail: 'assets/album.jpg',
      title: 'DJ Songs',
      description: 'Relax and indulge with beautiful piano pieces',
      song_link: '',
    },
    {
      song_id: 4,
      thumbnail: 'assets/album.jpg',
      title: 'Party Mashup Songs',
      description: 'Relax and indulge with beautiful piano pieces',
      song_link: '',
    },
    {
      song_id: 5,
      thumbnail: 'assets/album.jpg',
      title: 'HeartBreak Songs',
      description: 'Relax and indulge with beautiful piano pieces',
      song_link: '../../assets/Bezubaan.mp3',
    },
    {
      song_id: 6,
      thumbnail: 'assets/album.jpg',
      title: 'Spiritual Songs',
      description: 'Relax and indulge with beautiful piano pieces',
      song_link: '',
    },
    {
      song_id: 7,
      thumbnail: 'assets/album.jpg',
      title: 'Religional Songs',
      description: 'Relax and indulge with beautiful piano pieces',
      song_link: '',
    },
    {
      song_id: 8,
      thumbnail: 'assets/album.jpg',
      title: 'English Mashups',
      description: 'Relax and indulge with beautiful piano pieces',
      song_link: '',
    },
    {
      song_id: 9,
      thumbnail: 'assets/album.jpg',
      title: 'Motivational Songs',
      description: 'Relax and indulge with beautiful piano pieces',
      song_link: '',
    },
  ];
  constructor(public sb: SearchBarService) {}

  ngOnInit(): void {}

  onInputFilterRes($event: string) {
    const res = this.browserAll.filter(
      (element) => element.title.toLowerCase() === $event.toLowerCase().trim()
    );
    console.log(res);
  }

  onNavigation(pageName: string) {
    if (pageName === 'search') {
      this.sb.isSearchVisible.next(true);
    } else {
      this.sb.isSearchVisible.next(false);
    }
  }

  onScroll(event: WheelEvent) {
    event.preventDefault();
    const scrollAmount = event.deltaY > 0 ? -300 : 300;
    const scrollContainer = (event.target as HTMLElement).closest('.playlist_card_collections');
  
    if (scrollContainer) {
      scrollContainer.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }
}