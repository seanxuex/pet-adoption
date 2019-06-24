import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PetAdoptionService {
    private API_URL_PETS = 'https://s3-us-west-2.amazonaws.com/cozi-interview-dev/pets.json';
    private API_URL_SETTINGS = 'https://s3-us-west-2.amazonaws.com/cozi-interview-dev/settings.json';

    constructor(
        private http: HttpClient
    ) { }

    getPetList(): Observable<any> {
        return this.http.get(this.API_URL_PETS);
    }

    getUserSettings(): Observable<any> {
        return this.http.get(this.API_URL_SETTINGS);
    }
}