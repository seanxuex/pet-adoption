import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsPageComponent } from './settings-page.component';
import { MockStore } from '@ngrx/store/testing';
import { PetAdoptionState, PetAdoptionReducer, PetAdoptionActions } from 'src/app/store';
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PetAdoptionService } from 'src/app/services/pet.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/angular-material.module';

describe('SettingsPageComponent', () => {
  let component: SettingsPageComponent;
  let fixture: ComponentFixture<SettingsPageComponent>;
  let store: MockStore<PetAdoptionState.State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsPageComponent ],
      imports: [
        StoreModule.forRoot({
          [PetAdoptionState.stateName]: PetAdoptionReducer.featureReducer
        }),
        EffectsModule.forRoot([]),
        HttpClientModule,
        FormsModule,
        AngularMaterialModule
      ],
      providers: [PetAdoptionService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();

    fixture = TestBed.createComponent(SettingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch settings on creation', () => {
    const action = new PetAdoptionActions.GetUserSettingRequest();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should have save setting button', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain('Save Setting');
  });

  it('should save settings with proper settings on button click', () => {
    component.userId = 1;
    component.ageMin = 0;
    component.ageMax = 10;
    component.profile = ' ';
    component.animalType = 'dog';
    const userSetting = {
      id: component.userId,
      profile: component.profile,
      typePreference: component.animalType,
      ageRange: {
        min: component.ageMin,
        max: component.ageMax
      }
    }
    component.saveSetting();
    const action = new PetAdoptionActions.SaveUserSettingRequest({ newUserSettings: userSetting });
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
