import { Component, OnInit, TemplateRef } from '@angular/core';
import { State } from 'src/app/store/state';
import { Store, select } from '@ngrx/store';
import { PetAdoptionSelectors } from 'src/app/store';
import { PetProfileModel } from 'src/app/models/pet-profile';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-saved-page',
  templateUrl: './saved-page.component.html',
  styleUrls: ['./saved-page.component.scss']
})
export class SavedPageComponent implements OnInit {

  public savedList = [];

  public currentImg = '';
  public currentName = '';
  public currentSex = '';
  public currentAge: number;
  public currentProfile = '';

  constructor(
    private store$: Store<State>,
    private dialog: MatDialog
    ) { }

  ngOnInit() {
    this.store$.pipe(select(PetAdoptionSelectors.selectSavedPetList)).subscribe(savedList => {
      if (savedList) {
        this.savedList = savedList;
      }
    });
  }

  popUpProfile(profile: PetProfileModel, template: TemplateRef<any>) {
    this.setCurrent(profile);
    this.dialog.open(template, { width: '400px', height: '500px' })
  }

  setCurrent(profile: PetProfileModel) {
    this.currentAge = profile.age;
    this.currentImg = profile.img;
    this.currentName = profile.name;
    this.currentSex = profile.sex;
    this.currentProfile = profile.profile;
  }
}
