import { Component, OnInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { UserSettingModel } from 'src/app/models/user-setting';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/store/state';
import { PetAdoptionSelectors, PetAdoptionActions } from 'src/app/store';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent implements OnInit {

  public userProfile: UserSettingModel;
  public profile = '';
  public initialAnimalType = 'dog';
  public animalType = '';
  public ageMin: number;
  public ageMax: number;
  public sliderBool = false;
  public userId: number;

  @ViewChild('t', null) toggleButton: any;

  constructor (
    private store$: Store<State>,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    if (this.animalType) {
      this.initialAnimalType = this.animalType;
    }
    this.store$.pipe(select(PetAdoptionSelectors.selectUserSettings)).subscribe(userSettings => {
      if (userSettings) {
        this.userProfile = userSettings;
        this.userId = userSettings.id;
        this.profile = userSettings.profile;
        this.initialAnimalType = userSettings.typePreference;
        this.ageMax = userSettings.ageRange.max;
        this.ageMin = userSettings.ageRange.min;
      }
      if (this.userProfile == null) {
        this.store$.dispatch(new PetAdoptionActions.GetUserSettingRequest());
      }
    });
  }

  saveSetting() {
    if (this.ageMax < this.ageMin) {
      this._snackBar.open('The Max age needs to be greater than or equal to the Min age', '', {
        duration: 2000,
        verticalPosition: 'top'
      });

      return;
    }
    if (this.toggleButton.checked) {
      this.animalType = 'dog';
    } else {
      this.animalType = 'cat';
    }
    this.userProfile = {
      id: this.userId,
      profile: this.profile,
      typePreference: this.animalType,
      ageRange: {
        min: this.ageMin,
        max: this.ageMax
      }
    }
    this.store$.dispatch(new PetAdoptionActions.SaveUserSettingRequest({ newUserSettings: this.userProfile }));
    this._snackBar.open('User Settings Saved', '', {
      duration: 1000,
      verticalPosition: 'top'
    });
  }

}
