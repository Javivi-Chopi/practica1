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
          photo: "./assets/img/peepoimg.jpg",
          name: 'Adrián',
          surname: 'Perogil Fernández',
          description: "I'm Adrian, the support of Angular, with unparalleled tenacity, he fights every day against a villain, called . . . Juanarrow!.",
          account: 'https://github.com/imchopi',
        },
        {
          photo: "./assets/img/peepoimgreverse.jpg",
          name: 'Javier Miguel',
          surname: 'Martín Gallardo',
          description: "I'm Javier, the archmage of Ionic, I create numerous enigmas that only I can answer, you are not prepared!.",
          account: 'https://github.com/jotaeme890',
        },
      ];
      this._author.next(authors);
      observer.next(authors);
      observer.complete();
    });
  }
}
