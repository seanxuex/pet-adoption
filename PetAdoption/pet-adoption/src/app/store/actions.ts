import { Action } from '@ngrx/store';
import { UserSettingModel } from '../models/user-setting';
import { PetProfileModel } from '../models/pet-profile';

export enum ActionTypes {
    GET_USER_SETTING_REQUEST = '[Pet Adoption] Get User Setting Request',
    GET_USER_SETTING_SUCCESS = '[Pet Adoption] Get User Setting Success',
    GET_USER_SETTING_FAILED = '[Pet Adoption] Get User Setting Failed',
    GET_PET_LIST_REQUEST = '[Pet Adoption] Get Pet List Request',
    GET_PET_LIST_SUCCESS = '[Pet Adoption] Get Pet List Success',
    GET_PET_LIST_FAILED = '[Pet Adoption] Get Pet List Failed',
    SAVE_USER_SETTING_REQUEST = '[Pet Adoption] Save User Setting Request',
    SAVE_USER_SETTING_SUCCESS = '[Pet Adoption] Save User Setting Success',
    SAVE_PET_PROFILE_REQUEST = '[Pet Adoption] Save Pet Profile Request',
    SAVE_PET_PROFILE_SUCCESS = '[Pet Adoption] Save Pet Profile Success',
    SET_CURRENT = '[Pet Adoption] Set Current Pet'
}

export class GetUserSettingRequest implements Action {
    readonly type = ActionTypes.GET_USER_SETTING_REQUEST;
}

export class GetUserSettingSuccess implements Action {
    readonly type = ActionTypes.GET_USER_SETTING_SUCCESS;
    constructor(public payload: { newUserSettings: UserSettingModel }) {}
}

export class GetUserSettingFailed implements Action {
    readonly type = ActionTypes.GET_USER_SETTING_FAILED;
    constructor(public payload: { error: string }) {}
}

export class GetPetListRequest implements Action {
    readonly type = ActionTypes.GET_PET_LIST_REQUEST;
}

export class GetPetListSuccess implements Action {
    readonly type = ActionTypes.GET_PET_LIST_SUCCESS;
    constructor(public payload: { petList: PetProfileModel[] }) {}
}

export class GetPetListFailed implements Action {
    readonly type = ActionTypes.GET_PET_LIST_FAILED;
    constructor(public payload: { error: string }) {}
}

export class SaveUserSettingRequest implements Action {
    readonly type = ActionTypes.SAVE_USER_SETTING_REQUEST;
    constructor(public payload: { newUserSettings: UserSettingModel }) {}
}

export class SavePetProfileRequest implements Action {
    readonly type = ActionTypes.SAVE_PET_PROFILE_REQUEST;
    constructor(public payload: { petProfileToSave: PetProfileModel}) {}
}

export class SetCurrent implements Action {
    readonly type = ActionTypes.SET_CURRENT;
    constructor(public payload: { newCurrent: PetProfileModel }) {}
}

export type Actions = 
    GetUserSettingRequest
    | GetUserSettingSuccess
    | GetUserSettingFailed
    | GetPetListRequest
    | GetPetListSuccess
    | GetPetListFailed
    | SaveUserSettingRequest
    | SavePetProfileRequest
    | SetCurrent;
