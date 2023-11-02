import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, lastValueFrom, tap } from 'rxjs';
import { Player } from '../../interfaces/player';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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

  constructor(private _http: HttpClient) {
    this.init();
  }
  async init(){
    await lastValueFrom(this.getAll());
  }

  getAll(): Observable<Player[]> {
    return this._http.get<Player[]>(environment.URL_BASE+"/players").pipe(tap((users:any[]) => {
      this._players.next(users)
      this._ready.next(true)
    })) 
  }

  getPlayer(id: number): Observable<Player> {
    return this._http.get<Player>(environment.URL_BASE + `/players/${id}`).pipe(tap())
  }

  updatePlayer(player: Player): Observable<Player> {
    return new Observable<Player>(obs => {
      this._http.patch<Player>(environment.URL_BASE + `/players/${player.id}`, player).subscribe(_ => {
        this.getAll().subscribe( _ => {
          this.getPlayer(player.id).subscribe( _user => {
            obs.next(_user)
          })
        })
      })
    })
  }

  addPlayer(player:Player): Observable<Player>{
    var _players: any = {
      id: player.id,
      photo: player.photo,
      inGameName: player.inGameName,
      name: player.name,
      mainRol: player.mainRol,
      description: player.description,
      age: player.age,
      placeBirth: player.placeBirth,
      firstChampion: player.firstChampion,
      secondChampion: player.secondChampion,
      thirdChampion: player.thirdChampion
    }
    return this._http.post<Player>(environment.URL_BASE + "/players/", _players).pipe(tap(_ => {
      this.getAll().subscribe()
    }))
  }

  deletePlayer(player:Player): Observable<Player>{
    return new Observable<Player>(obs => {
      this._http.delete<Player>(environment.URL_BASE + `/players/${player.id}`).subscribe( _ => {
        this.getAll().subscribe(_ => {
          obs.next(player)
        })
      })
    })
  }
}
