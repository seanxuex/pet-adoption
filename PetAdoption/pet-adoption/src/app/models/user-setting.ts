export interface UserSettingModel {
    id: number;
    profile: string;
    typePreference: string;
    ageRange: {
        min: number;
        max: number;
    }
}