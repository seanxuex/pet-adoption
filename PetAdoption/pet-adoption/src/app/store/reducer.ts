import { initialState, State } from './state';
import { Actions, ActionTypes } from './actions';
import { Action } from 'rxjs/internal/scheduler/Action';

export function featureReducer(state = initialState, action: Actions): State {
    switch (action.type) {
        case ActionTypes.SAVE_USER_SETTING_REQUEST: {
            return {
                ...state,
                userSettings: action.payload.newUserSettings
            };
        }
        
        case ActionTypes.SAVE_PET_PROFILE_REQUEST: {
            return {
                ...state,
                savedPetList: [
                    ...state.savedPetList,
                    action.payload.petProfileToSave
                ]
            }

        }

        case ActionTypes.GET_PET_LIST_SUCCESS: {
            return {
                ...state,
                petList: action.payload.petList
            }
        }

        case ActionTypes.GET_USER_SETTING_SUCCESS: {
            return {
                ...state,
                userSettings: action.payload.newUserSettings
            }
        }

        case ActionTypes.SET_CURRENT: {
            return {
                ...state,
                currentPet: action.payload.newCurrent
            }
        }

        default: {
            return state;
        }
    }
    
}