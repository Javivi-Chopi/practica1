import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Player } from '../../interfaces/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private _players: BehaviorSubject<Player[]> = new BehaviorSubject<Player[]>([])
  public players$: Observable<Player[]> = this._players.asObservable()

  constructor() { }

  getAll(): Observable<Player[]>{
    return new Observable(observer => {
      setTimeout( () => {
        var players: Player[] = [
          {
            id: 1,
            photo:"https://www.giants.pro/medios/2023/05/Th3Antonio.png",
            nameInGame: "TH3ANTONIO",
            name: "Antonio Espinosa",
            mainRol: "Top Laner",
            description: `A true institution of the country and a symbol of our organization. The 'Peluquillas' returns to its natural habitat
            the Giants toplane. After winning four Super Leagues, he will seek to make history as the player with the most national titles in history.`,
            age: 24,
            placeBirth: "Spain"
          },
          {
            id: 2,
            photo:"https://www.giants.pro/medios/2023/05/Th3Antonio.png",
            nameInGame: "TH3ANTONIO",
            name: "Antonio Espinosa",
            mainRol: "Top Laner",
            description: `A true institution of the country and a symbol of our organization. The 'Peluquillas' returns to its natural habitat
            the Giants toplane. After winning four Super Leagues, he will seek to make history as the player with the most national titles in history.`,
            age: 24,
            placeBirth: "Spain"
          },
          {
            id: 3,
            photo:"https://www.giants.pro/medios/2023/05/Th3Antonio.png",
            nameInGame: "TH3ANTONIO",
            name: "Antonio Espinosa",
            mainRol: "Top Laner",
            description: `A true institution of the country and a symbol of our organization. The 'Peluquillas' returns to its natural habitat
            the Giants toplane. After winning four Super Leagues, he will seek to make history as the player with the most national titles in history.`,
            age: 24,
            placeBirth: "Spain"
          },
          {
            id: 4,
            photo:"https://www.giants.pro/medios/2023/05/Th3Antonio.png",
            nameInGame: "TH3ANTONIO",
            name: "Antonio Espinosa",
            mainRol: "Top Laner",
            description: `A true institution of the country and a symbol of our organization. The 'Peluquillas' returns to its natural habitat
            the Giants toplane. After winning four Super Leagues, he will seek to make history as the player with the most national titles in history.`,
            age: 24,
            placeBirth: "Spain"
          },
        ]
        this._players.next(players)
        observer.next(players)
        observer.complete()
      })
    })
  }
}
