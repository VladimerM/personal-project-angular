import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { FavoritesService } from '../../../services/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoritesComponent implements OnInit {
  favorites: any = [];
  favoritesIds: any = [];

  constructor(
    private favoriteService: FavoritesService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    for (let favorite of JSON.parse(localStorage.getItem('favorites')!)) {
      this.favoriteService.getFavorite(favorite).subscribe((value) => {
        this.favorites.push(value);
        this.cdr.detectChanges();
      });
    }
    this.favoritesIds = JSON.parse(localStorage.getItem('favorites')!);
  }

  onClickChangeHeart(job: any) {
    job.heartSrc = 'assets/images/icons/heart.svg';
    job.heartFilled = !job.heartFilled;
    this.favoritesIds.splice(this.favoritesIds.indexOf(job.id), 1);
    localStorage.setItem('favorites', JSON.stringify(this.favoritesIds));
    this.favoriteService.editJobs(job.id, job).subscribe();
  }
}
