import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Player } from '../../interfaces/player';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private _players: BehaviorSubject<Player[]> = new BehaviorSubject<Player[]>(
    []
  );
  public players$: Observable<Player[]> = this._players.asObservable();

  constructor() {}

  getAll(): Observable<Player[]> {
    return new Observable((observer) => {
      setTimeout(() => {
        var players: Player[] = [
          {
            id: 1,
            photo: 'https://www.giants.pro/medios/2023/05/Th3Antonio.png',
            nameInGame: 'TH3ANTONIO',
            name: 'Antonio Espinosa',
            mainRol: 'Top Laner',
            description: `A true institution of the country and a symbol of our organization. The 'Peluquillas' returns to its natural habitat
            the Giants toplane. After winning four Super Leagues, he will seek to make history as the player with the most national titles in history.`,
            age: 24,
            placeBirth: 'Spain',
            firstChampion: 'Darius',
            secondChampion: 'Draven',
            thirdChampion: 'Yuumi',
          },
          {
            id: 2,
            photo: 'https://www.giants.pro/medios/2023/05/Th3Antonio.png',
            nameInGame: 'Adrián Perogil',
            name: 'Adrián Perogil',
            mainRol: 'Support',
            description: `The best player in the world hehe god.`,
            age: 26,
            placeBirth: 'Spain',
            firstChampion: 'Rakan',
            secondChampion: 'Braum',
            thirdChampion: 'Alistar',
          },
          {
            id: 3,
            photo: 'https://www.giants.pro/medios/2023/05/Th3Antonio.png',
            nameInGame: 'TH3ANTONIO',
            name: 'Antonio Espinosa',
            mainRol: 'Top Laner',
            description: `A true institution of the country and a symbol of our organization. The 'Peluquillas' returns to its natural habitat
            the Giants toplane. After winning four Super Leagues, he will seek to make history as the player with the most national titles in history.`,
            age: 24,
            placeBirth: 'Spain',
            firstChampion: 'Darius',
            secondChampion: 'Draven',
            thirdChampion: 'Yuumi',
          },
          {
            id: 4,
            photo: 'https://www.giants.pro/medios/2023/05/Th3Antonio.png',
            nameInGame: 'TH3ANTONIO',
            name: 'Antonio Espinosa',
            mainRol: 'Top Laner',
            description: `A true institution of the country and a symbol of our organization. The 'Peluquillas' returns to its natural habitat
            the Giants toplane. After winning four Super Leagues, he will seek to make history as the player with the most national titles in history.`,
            age: 24,
            placeBirth: 'Spain',
            firstChampion: 'Darius',
            secondChampion: 'Draven',
            thirdChampion: 'Yuumi',
          },
        ];
        this._players.next(players);
        observer.next(players);
        observer.complete();
      });
    });
  }

  updatePlayer(player: Player): Observable<Player> {
    return new Observable((observer) => {
      var players = [...this._players.value];
      var index = players.findIndex((playerId) => playerId.id == player.id);
      if (index == -1) {
        observer.error()
      } else {
        players[index] = player
        observer.next(player)
        this._players.next(players)
      }
      observer.complete()
    });
  }

  addPlayer(player:Player): Observable<Player>{
    return new Observable((observer) => {
      var players = [...this._players.value];
      players.push(player)
      this._players.next(players)
      observer.next(player)
      observer.complete()
    })
  }
}
