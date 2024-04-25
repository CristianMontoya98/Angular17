import { Component } from '@angular/core';
import { GetAlbumUseCases } from '../../../domain/usecase/get-album-use-case';
import { Observable } from 'rxjs';
import { Album } from '../../../domain/models/Album/album';
import { CircularProgressComponent } from '../../circular-progress/circular-progress.component';
@Component({
  selector: 'app-albumc',
  standalone: true,
  imports: [CircularProgressComponent],
  templateUrl: './albumc.component.html',
  styleUrl: './albumc.component.scss'
})
export class AlbumcComponent {
    constructor(private _getAlbumUseCase: GetAlbumUseCases) { }
    response$: Observable<Album> | undefined;
    datos?: Album;
    ngOnInit(): void {
      this.response$ = this._getAlbumUseCase.getAlbumById('20');
      this.response$.subscribe(
        (data: Album) => {
          this.datos = data;
        }
      );
    }
}
