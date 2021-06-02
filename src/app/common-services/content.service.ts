import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from "rxjs";

@Injectable()
export class ContentService {

  constructor(private _http : Http) {}

  getContent(contentLang:string, contentView:string): Observable<any> {
    // return this._http.get('http://192.168.1.3:8084/content?lang='+contentLang+'&view='+contentView)
    return this._http.get('http://192.168.1.5:8084/content?lang='+contentLang+'&view='+contentView)
    // return this._http.get('http://192.168.40.103:8084/content?lang='+contentLang+'&view='+contentView)
    // return this._http.get('http://192.168.40.115:8084/content?lang='+contentLang+'&view='+contentView)
      .map( (resp : Response) => {
        return resp.json();
      });
  }

  getAddress(mapLat: string, mapLong: string): Observable<any> {
    return this._http.get('http://maps.googleapis.com/maps/api/geocode/json?latlng='+mapLat+','+mapLong+'&sensor=true;')
      .map( (resp : Response) => {
        return resp.json();
      });
  }
}
