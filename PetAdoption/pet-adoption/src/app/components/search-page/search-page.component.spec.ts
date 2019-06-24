import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPageComponent } from './search-page.component';
import { StoreModule, Store } from '@ngrx/store';
import { PetAdoptionState, PetAdoptionReducer, PetAdoptionActions } from 'src/app/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { PetAdoptionService } from 'src/app/services/pet.service';
import { MockStore } from '@ngrx/store/testing';
import { testSavedList, testFilteredList } from 'src/app/tests/test-data';

describe('SearchPageComponent', () => {
  let component: SearchPageComponent;
  let fixture: ComponentFixture<SearchPageComponent>;
  let store: MockStore<PetAdoptionState.State>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPageComponent ],
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
    
    fixture = TestBed.createComponent(SearchPageComponent);
    component = fixture.componentInstance;
    component.filteredList = testFilteredList;
    component.savedList = testSavedList;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch list on creation', () => {
    const action = new PetAdoptionActions.GetPetListRequest();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should fetch settings on creation', () => {
    const action = new PetAdoptionActions.GetUserSettingRequest();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should show you next profile in the list when you swipe', () => {
    component.currentPetProfile = testFilteredList[0]
    component.getNextCurrentProfile();
    const action = new PetAdoptionActions.SetCurrent({ newCurrent: testFilteredList[1] });
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should show you first profile in the list when you swipe at the end of the list', () => {
    component.currentPetProfile = testFilteredList[2]
    component.getNextCurrentProfile();
    const action = new PetAdoptionActions.SetCurrent({ newCurrent: testFilteredList[0] });
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should not save currentPetProfile when like, if the list contains current', () => {
    component.savedList = testSavedList;
    component.currentPetProfile = testSavedList[0]
    component.like();
    const action = new PetAdoptionActions.SavePetProfileRequest({ petProfileToSave: testSavedList[0] });
    expect(store.dispatch).not.toHaveBeenCalledWith(action);
  });

  it('should  save currentPetProfile when like, if the list does not contains current', () => {
    component.currentPetProfile = {
      id: 10,
      img: ' ',
      name: 'new',
      type: 'dog',
      sex: 'M',
      profile: 'Hi',
      age: 10
    }
    component.like();
    const action = new PetAdoptionActions.SavePetProfileRequest({ petProfileToSave: component.currentPetProfile });
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
