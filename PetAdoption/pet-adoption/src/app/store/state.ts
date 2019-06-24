import { UserSettingModel } from '../models/user-setting';
import { PetProfileModel } from '../models/pet-profile';

export interface State {
    currentPet: PetProfileModel;
    userSettings: UserSettingModel;
    petList: PetProfileModel[];
    savedPetList: PetProfileModel[];
}

export const initialState: State = {
    currentPet: null,
    userSettings: null,
    petList: [],
    savedPetList: []
}

export const stateName = 'petAdoption';