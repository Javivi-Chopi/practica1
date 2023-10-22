import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { About } from '../../interfaces/about';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  constructor() {}

  private _author: BehaviorSubject<About[]> = new BehaviorSubject<About[]>([]);
  public authors$: Observable<About[]> = this._author.asObservable();

  getAuthors(): Observable<About[]> {
    return new Observable((observer) => {
      var authors: About[] = [
        {
          name: 'Adrián',
          surname: 'Perogil Fernández',
          account: 'https://github.com/imchopi',
        },
        {
          name: 'Javier Miguel',
          surname: 'Martín Gallardo',
          account: 'https://github.com/jotaeme890',
        },
      ];
      this._author.next(authors);
      observer.next(authors);
      observer.complete();
    });
  }
}
