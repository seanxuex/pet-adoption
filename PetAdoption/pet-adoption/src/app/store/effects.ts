import { Injectable } from "@angular/core";
import { PetAdoptionService } from '../services/pet.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of as observableOf } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { PetAdoptionActions } from '.';
import { SavePetProfileRequest } from './actions';

@Injectable()
export class PetAdoptionEffects {
    constructor (
        private actions: Actions,
        private service: PetAdoptionService
    ) {}

    @Effect()
    GetPetList: Observable<any> = this.actions.pipe(
        ofType<PetAdoptionActions.GetPetListRequest>(PetAdoptionActions.ActionTypes.GET_PET_LIST_REQUEST),
        switchMap(() => this.service.getPetList().pipe(
            map(result => new PetAdoptionActions.GetPetListSuccess({ petList: result })),
            catchError(error => observableOf(new PetAdoptionActions.GetPetListFailed({ error })))
        ))
    );

    @Effect()
    GetUserSetting: Observable<any> = this.actions.pipe(
        ofType<PetAdoptionActions.GetUserSettingRequest>(PetAdoptionActions.ActionTypes.GET_USER_SETTING_REQUEST),
        switchMap(() => this.service.getUserSettings().pipe(
            map(result => new PetAdoptionActions.GetUserSettingSuccess({ newUserSettings: result })),
            catchError(error => observableOf(new PetAdoptionActions.GetUserSettingFailed({ error })))
        ))
    );

}