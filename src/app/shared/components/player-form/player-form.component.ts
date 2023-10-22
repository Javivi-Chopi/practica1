import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Player } from 'src/app/core/interfaces/player';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss'],
})
export class PlayerFormComponent implements OnInit {

  form: FormGroup;
  mode: 'Edit' = 'Edit'

  @Input() set player(_player: Player | null) {
    if (_player) {
      this.mode = 'Edit'
      this.form.controls['photo'].setValue(_player.photo)
      this.form.controls['nameInGame'].setValue(_player.nameInGame)
      this.form.controls['name'].setValue(_player.name)
      this.form.controls['mainRol'].setValue(_player.mainRol)
      this.form.controls['age'].setValue(_player.age)
      this.form.controls['placeBirth'].setValue(_player.placeBirth)
      this.form.controls['description'].setValue(_player.description)
      this.form.controls['firstChampion'].setValue(_player.firstChampion)
      this.form.controls['secondChampion'].setValue(_player.secondChampion)
      this.form.controls['thirdChampion'].setValue(_player.thirdChampion)
    }
  }

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      // Optional beacouse maybe we dont find a great photo of the player
      id: [null],
      photo: [''],
      nameInGame: ['', [Validators.required]],
      name: ['', [Validators.required]],
      mainRol: ['', [Validators.required]],
      age: [0, [Validators.required]],
      placeBirth: ['', [Validators.required]],
      description: ['', [Validators.required]],
      firstChampion: ['', [Validators.required]],
      secondChampion: ['', [Validators.required]],
      thirdChampion: ['', [Validators.required]],
    });
  }

  ngOnInit() {}

  onFileSelected(event: any){
    const file = event.target.files[0]
    this.form.controls['photo'].setValue(file)
  }
}
