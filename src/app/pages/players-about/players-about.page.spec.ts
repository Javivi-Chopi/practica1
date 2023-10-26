import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayersAboutPage } from './players-about.page';

describe('PlayersAboutPage', () => {
  let component: PlayersAboutPage;
  let fixture: ComponentFixture<PlayersAboutPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PlayersAboutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
