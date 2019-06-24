import { MemoizedSelector, createFeatureSelector, createSelector } from '@ngrx/store';
import { stateName, State } from './state';
import { PetProfileModel } from '../models/pet-profile';
import { UserSettingModel } from '../models/user-setting';

export const getCurrentPet = (state: State): PetProfileModel => state ? state.currentPet: null;

export const getUserSettings = (state: State): UserSettingModel => state ? state.userSettings: null;

export const getPetList = (state: State): PetProfileModel[] => state ? state.petList: null;

export const getSavedPetList = (state: State): PetProfileModel[] => state ? state.savedPetList: null;

export const selectState: MemoizedSelector<object, State> = createFeatureSelector<State>(stateName);

export const selectCurrentPet: MemoizedSelector<object, PetProfileModel> = createSelector(selectState, getCurrentPet);

export const selectUserSettings: MemoizedSelector<object, UserSettingModel> = createSelector(selectState, getUserSettings);

export const selectPetList: MemoizedSelector<object, PetProfileModel[]> = createSelector(selectState, getPetList);

export const selectSavedPetList: MemoizedSelector<object, PetProfileModel[]> = createSelector(selectState, getSavedPetList);


