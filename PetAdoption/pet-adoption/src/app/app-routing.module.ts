import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { SettingsPageComponent } from './components/settings-page/settings-page.component';
import { SavedPageComponent } from './components/saved-page/saved-page.component';

const routes: Routes = [
  {
    path: '',
    component: SearchPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'search',
    component: SearchPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'saved',
    component: SavedPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'setting',
    component: SettingsPageComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
