import { Injectable, HttpService } from "@nestjs/common";
import { Planet } from "@starwars/api-interface";
import { Observable, zip } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';


@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}
  getData(params?): Observable<Planet[]> {
    return this.httpService.get(environment.swapi + 'planets', {params}).pipe(
      map(response => response.data)
    );
  }
  getResidents(ids: number[]): Observable<any[]> {
    const req = ids.map(id => this.httpService.get(environment.swapi + 'people/' + id + '/').pipe(map(res => res.data)));
    return zip(...req);
  }
  getFilms(ids: number[]): Observable<any[]> {
    const req = ids.map(id => this.httpService.get(environment.swapi + 'films/' + id + '/').pipe(map(res => res.data)));
    return zip(...req);
  }
}
