import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { of, zip } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class StarwarsService {
    people;
    films
    people$;
    films$;
    data$;
    constructor(private http: HttpClient) {}
    update(element) {
        const peopleReq = element.residents.length ?
            this.getNames('people', element.residents)
            :
            of([]);
        const filmsReq = element.films.length
            ?
            this.getNames('films', element.films)
            :
            of([]);

        this.data$ = zip(peopleReq, filmsReq).pipe(
            map(([people, films]) => {
                return {people, films};
            })
        )
        
        
    }
    reset() {
        this.films = [];
        this.people = [];
    }
    getPlanets(p) {
        let params = {};
        if (p) {
            params = p;
        }
        return this.http.get('api/planets/', {params});
    }
    getNames(entity, data) {
        const ids = data.map(item => item.replace(/[^\d]/g, '')).join(',');
        let params = {};
        if (ids) {
            params = new HttpParams({fromObject: {ids}});
        }
        
        return this.http.get('api/' + entity, {params});
    }
    
}
