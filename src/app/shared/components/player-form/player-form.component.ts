import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Player } from 'src/app/core/interfaces/player';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss'],
})
export class PlayerFormComponent implements OnInit {

  form: FormGroup;
  mode: 'Edit' | "Add" = 'Edit'

  @Input() set player(_player: Player | null) {
    if (_player) {
      this.mode = "Edit"
      this.form.controls['id'].setValue(_player.id)
      this.form.controls['photo'].setValue(_player.photo)
      this.form.controls['inGameName'].setValue(_player.inGameName)
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

  constructor(private _formBuilder: FormBuilder, private _modal: ModalController) {
    this.form = this._formBuilder.group({
      id: [null],
      photo: [''],
      inGameName: ['', [Validators.required]],
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

  validateAndSubmit(form: FormGroup){
    if (form.valid)
      this.submit();
  }

  back(){
    this._modal.dismiss(null, "close")
  }

  delete(){
    this._modal.dismiss(this.form.value, "delete")
  }

  submit(){
    this._modal.dismiss(this.form.value, "ok")
  }
}
