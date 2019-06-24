import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { State } from 'src/app/store/state';
import { Store, select } from '@ngrx/store';
import { PetAdoptionActions, PetAdoptionSelectors } from 'src/app/store';
import { PetProfileModel } from 'src/app/models/pet-profile';
import { trigger, animate, transition, keyframes } from '@angular/animations';
import * as kf from './keyframes';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
  animations: [
    trigger('cardAnimator', [
      transition('* => zoomOutLeft', animate(500, keyframes(kf.zoomOutLeft))),
      transition('* => zoomOutRight', animate(500, keyframes(kf.zoomOutRight))),
    ])
  ],
})
export class SearchPageComponent implements OnInit {
  public unfilteredList: PetProfileModel[];
  public filteredList: PetProfileModel[];
  public preferredAnimalType = '';
  public preferredAnimalMinAge = 0;
  public preferredAnimalMaxAge = 20;
  public currentPetProfile: PetProfileModel;
  public savedList = [];

  public currentImg = '';
  public currentName = '';
  public currentSex = '';
  public currentAge: number;
  public currentProfile = '';

  public animationState: string;

  constructor(
    private store$: Store<State>,
    private _snackBar: MatSnackBar
    ) { }

  ngOnInit() {
    this.store$.pipe(select(PetAdoptionSelectors.selectCurrentPet)).subscribe(currentPet => {
      if (currentPet && 
        this.filteredList != null && this.filteredList.length > 0 && this.filteredList.includes(currentPet)) {
        this.currentPetProfile = currentPet;
        this.setCurrent();
      }
    });

    this.store$.pipe(select(PetAdoptionSelectors.selectPetList)).subscribe(petList => {
      if (petList != null && petList.length > 0) {
        this.unfilteredList = petList;
        this.filteredList = petList;
      }

      if (this.unfilteredList == null || this.unfilteredList.length == 0) {
        this.store$.dispatch(new PetAdoptionActions.GetPetListRequest());
      }

      this.store$.pipe(select(PetAdoptionSelectors.selectUserSettings)).subscribe(userSettings => {
        if (userSettings) {
          this.preferredAnimalType = userSettings.typePreference;
          this.preferredAnimalMaxAge = userSettings.ageRange.max;
          this.preferredAnimalMinAge = userSettings.ageRange.min;
          if (this.unfilteredList && this.unfilteredList.length > 0) {
            this.filteredList = this.unfilteredList.filter((petProfile) => {
              return (petProfile.type == this.preferredAnimalType && 
                      petProfile.age >= this.preferredAnimalMinAge && 
                      petProfile.age <= this.preferredAnimalMaxAge);
            });

            if (!this.currentPetProfile || !this.filteredList.includes(this.currentPetProfile)) {
              this.currentPetProfile = this.filteredList[0];
              this.setCurrent();
            }
          }
        }

        if (this.preferredAnimalType == '') {
          this.store$.dispatch(new PetAdoptionActions.GetUserSettingRequest());
        }
      });
    });

    this.store$.pipe(select(PetAdoptionSelectors.selectSavedPetList)).subscribe(savedList => {
      if (savedList) {
        this.savedList = savedList;
      }
    });

  }

  setCurrent() {
    if (this.currentPetProfile) {
      this.currentAge = this.currentPetProfile.age;
      this.currentImg = this.currentPetProfile.img;
      this.currentName = this.currentPetProfile.name;
      this.currentSex = this.currentPetProfile.sex;
      this.currentProfile = this.currentPetProfile.profile;
    }
  }

  like() {
    if (!this.savedList.includes(this.currentPetProfile)) {
      this.store$.dispatch(new PetAdoptionActions.SavePetProfileRequest({ petProfileToSave: this.currentPetProfile }));
    }
    this.startAnimation('zoomOutRight');
    this._snackBar.open('Liked and saved', '', {
      duration: 500,
      verticalPosition: 'top'
    });
    setTimeout(() => {
      this.getNextCurrentProfile()
    }, 400);
  }

  disLike() {
    this.startAnimation('zoomOutLeft');
    this._snackBar.open('Not interested', '', {
      duration: 500,
      verticalPosition: 'top'
    });
    setTimeout(() => {
      this.getNextCurrentProfile()
    }, 400);
  }


  getNextCurrentProfile() {
    const index = this.filteredList.indexOf(this.currentPetProfile);
    if (index == this.filteredList.length - 1) {
      this.currentPetProfile = this.filteredList[0];
    } else {
      this.currentPetProfile = this.filteredList[index + 1];
    }
    this.store$.dispatch(new PetAdoptionActions.SetCurrent({ newCurrent: this.currentPetProfile }));
    this.setCurrent();
  }

  startAnimation(state: string) {
    if (!this.animationState) {
      this.animationState = state;
    }
  }

  resetAnimationState() {
    this.animationState = '';
  }
}
