import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LoaderService } from 'src/app/core/components/header/service/loader.service';
import { Ijob } from 'src/app/shared/interfaces/job.interface';
import { FavoritesService } from '../../../services/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoritesComponent implements OnInit {
  favorites: BehaviorSubject<Ijob[]> = new BehaviorSubject([] as Ijob[]);
  favoritesIds: number[] = [];

  constructor(
    private favoriteService: FavoritesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('favorites')) {
      for (let favorite of JSON.parse(localStorage.getItem('favorites')!)) {
        this.favoriteService.getFavorite(favorite).subscribe((value) => {
          let arr: Ijob[] = this.favorites.getValue();
          arr.unshift(value);
          this.favorites.next(arr);
        });
      }
    }

    this.favoritesIds = JSON.parse(localStorage.getItem('favorites')!);
  }

  onClickChangeHeart(job: Ijob) {
    if (job.heartSrc !== 'assets/images/icons/heart.svg') {
      job.heartSrc = 'assets/images/icons/heart.svg';
      this.favoritesIds.splice(this.favoritesIds.indexOf(job.id), 1);
      localStorage.setItem('favorites', JSON.stringify(this.favoritesIds));
    } else {
      job.heartSrc = 'assets/images/icons/filled-heart.svg';
      this.favoritesIds.unshift(job.id);
      localStorage.setItem('favorites', JSON.stringify(this.favoritesIds));
    }
  }

  checkDate(job: Ijob): boolean {
    if (Date.now() - job.date < 86400000) {
      return true;
    } else {
      return false;
    }
  }

  getPostDate(job: Ijob): string {
    if (Math.floor((Date.now() - job.date) / 86400000) < 1) {
      return Math.floor((Date.now() - job.date) / 3600000) + ' hours ago';
    } else {
      return Math.floor((Date.now() - job.date) / 86400000) + ' days ago';
    }
  }

  openJob(job: Ijob): void {
    this.router.navigate([`/main/jobs/${job.id}`]);
  }
}
