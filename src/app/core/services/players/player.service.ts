import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, lastValueFrom } from 'rxjs';
import { Player } from '../../interfaces/player';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  id: number = 5
  private _players: BehaviorSubject<Player[]> = new BehaviorSubject<Player[]>([]);
  public players$: Observable<Player[]> = this._players.asObservable();

  // We use it in about-player for check the data its ok
  private _ready = new BehaviorSubject<boolean>(false);
  public ready$ = this._ready.asObservable();

  constructor() {
    this.init();
  }
  async init(){
    await lastValueFrom(this.getAll());
  }

  getAll(): Observable<Player[]> {
    return new Observable((observer) => {
      var players: Player[] = [
        {
          id: 1,
          photo: 'https://www.giants.pro/medios/2023/05/Th3Antonio.png',
          inGameName: 'The3Antonio',
          name: 'Antonio Espinosa',
          mainRol: 'Top Laner',
          description: `A true institution of the country and a symbol of our organization. The 'Peluquillas' returns to its natural habitat
          the Giants toplane. After winning four Super Leagues, he will seek to make history as the player with the most national titles in history.`,
          age: 24,
          placeBirth: 'Spain',
          firstChampion: 'Darius',
          secondChampion: 'Sett',
          thirdChampion: 'Garen',
        },
        {
          id: 2,
          photo: 'https://www.giants.pro/medios/2023/05/Attila.png',
          inGameName: 'Attila',
          name: 'Amadeu Dias de Carvalho',
          mainRol: 'ADCarry',
          description: `The person without whom the Giants botlane would not be understood. The Portuguese shooter faces a new season with the intention 
          of settling pending scores in his favorite championship, a Super League that he has won three times.`,
          age: 26,
          placeBirth: 'Portugal',
          firstChampion: 'Tristana',
          secondChampion: 'Jinx',
          thirdChampion: 'Sivir',
        },
        {
          id: 3,
          photo: 'https://www.giants.pro/medios/2023/05/Decay.png',
          inGameName: 'Decay',
          name: 'Nicolas Gawron',
          mainRol: 'Mid Laner',
          description: `Originally from France, Decay returns to the Giants midlane to continue exploiting his great 
          champion pool and confirm the good feelings he left us in the last Super League split.`,
          age: 24,
          placeBirth: 'Spain',
          firstChampion: 'Sylas',
          secondChampion: 'Vex',
          thirdChampion: 'Lux',
        },
        {
          id: 4,
          photo: 'https://www.giants.pro/medios/2023/05/Xerxe.png',
          inGameName: 'Xerxe',
          name: 'Andrei Dragomir',
          mainRol: 'Jungler',
          description: `He is one of the most privileged minds in the European League of Legends. After making his debut in 2016 and going through 
          elite clubs in Europe and America, he will put all his experience at the service of Giants.`,
          age: 23,
          placeBirth: 'Romania',
          firstChampion: 'Viego',
          secondChampion: 'Shaco',
          thirdChampion: 'Ivern',
        },
        {
          id: 5,
          photo: 'https://www.giants.pro/medios/2023/05/Whiteinn.png',
          inGameName: 'Whiteinn',
          name: 'Alexandru Kolozsvari',
          mainRol: 'Support',
          description: `Whiteinn returns to Spain to repeat the great feats he achieved in the past. He knows what it's like to win the Super 
          League title and has played for top-level clubs in Europe.`,
          age: 22,
          placeBirth: 'Romania',
          firstChampion: 'Nautilus',
          secondChampion: 'Blitzcrank',
          thirdChampion: 'Braum',
        },
      ];
       
      this._players.next(players);
      observer.next(players);
      observer.complete();
      this._ready.next(true);
    });
  }

  getPlayer(id: number): Observable<Player> {
    return new Observable((observer) => {
      const players = this._players.value;
      const user = players.find((player) => player.id === id);
      if (!user) {
        observer.error();
      } else {
        observer.next(user);
      }
      observer.complete();
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
      player.id = ++this.id
      players.push(player)
      this._players.next(players)
      observer.next(player)
      observer.complete()
    })
  }

  deletePlayer(player:Player): Observable<Player>{
    return new Observable((observer) => {
      var players = [...this._players.value]
      var index = players.findIndex((deletePlayer) => deletePlayer.id == player.id)
      players.splice(index, 1)
      this._players.next(players)
      observer.next(player)
      observer.complete()
    })
  }
}
