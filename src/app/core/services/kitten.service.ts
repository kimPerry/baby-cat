import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { Kitten } from '../../state/kitten/kitten.model';

@Injectable()
export class KittenService {
    private kittenUrl = 'api/kittens';
    constructor(private httpClient: HttpClient) { }

    getKittens(): Observable<Array<Kitten>> {
        return this.httpClient.get<Kitten[]>(this.kittenUrl);
    }

    getKitten(id: number): Observable<Kitten> {
        return this.getKittens().pipe(
            map(kittens => kittens.find(kitten => kitten.id === id))
        );
    }

    save(kitten: Kitten): Observable<Kitten> {
        if (kitten.id) {
            return this.put(kitten);
        }
        return this.post(kitten);
    }

    delete(kitten: Kitten): Observable<Kitten> {
        const url = `${this.kittenUrl}/${kitten.id}`;

        return this.httpClient
            .delete<void>(url)
            .pipe(switchMap(() => of(kitten)));
    }

    private post(kitten: Kitten): Observable<Kitten> {
        return this.httpClient.post<Kitten>(this.kittenUrl, kitten);
    }


    private put(kitten: Kitten): Observable<Kitten> {
        const url = `${this.kittenUrl}/${kitten.id}`;

        return this.httpClient
            .put(url, kitten)
            .pipe(switchMap(() => of(kitten)));
    }
}