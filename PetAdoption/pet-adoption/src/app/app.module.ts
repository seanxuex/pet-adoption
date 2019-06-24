import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialModule } from './angular-material.module';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { SavedPageComponent } from './components/saved-page/saved-page.component';
import { SettingsPageComponent } from './components/settings-page/settings-page.component';
import { EffectsModule } from '@ngrx/effects';
import { PetAdoptionEffects } from './store/effects';
import { StoreModule } from '@ngrx/store';
import { featureReducer } from './store/reducer';
import { stateName } from './store/state';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    SavedPageComponent,
    SettingsPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularMaterialModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(stateName, featureReducer),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([PetAdoptionEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
