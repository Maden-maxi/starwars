import { Controller, Get, Query } from "@nestjs/common";

import { Planet } from "@starwars/api-interface";

import { AppService } from "./app.service";
import { Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("planets")
  getData(@Query() params): Observable<Planet[]> {
    return this.appService.getData(params);
  }
  @Get('people')
  getPeople(@Query() params): Observable<any> {
    return this.appService.getResidents(params.ids.split(','));
  }
  @Get('films')
  getFilms(@Query() params): Observable<any> {
    return this.appService.getFilms(params.ids.split(','));
  }
}
