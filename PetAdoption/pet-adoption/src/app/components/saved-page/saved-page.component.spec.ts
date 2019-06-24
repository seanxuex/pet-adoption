import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedPageComponent } from './saved-page.component';
import { PetAdoptionState, PetAdoptionReducer } from 'src/app/store';
import { MockStore } from '@ngrx/store/testing';
import { StoreModule, Store } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { PetAdoptionService } from 'src/app/services/pet.service';
import { testFilteredList } from 'src/app/tests/test-data';

describe('SavedPageComponent', () => {
  let component: SavedPageComponent;
  let fixture: ComponentFixture<SavedPageComponent>;
  let store: MockStore<PetAdoptionState.State>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedPageComponent ],
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
    
    fixture = TestBed.createComponent(SavedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set proper current profile', () => {
    const profile = testFilteredList[0];
    component.setCurrent(profile);
    expect(component.currentAge).toEqual(testFilteredList[0].age);
    expect(component.currentImg).toEqual(testFilteredList[0].img);
    expect(component.currentName).toEqual(testFilteredList[0].name);
    expect(component.currentProfile).toEqual(testFilteredList[0].profile);
    expect(component.currentSex).toEqual(testFilteredList[0].sex);
  });
});
