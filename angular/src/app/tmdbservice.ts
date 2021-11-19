import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Constant} from '../constant/constant'



@Injectable()
export class TmdbService {

    private url: string = Constant.url;

    constructor(private http: HttpClient) { }

    getPopularMovies() {
        return this.http.get<any>(`${this.url}/tmdb/movies`)
        .toPromise()
        .then(res => { return res; });
    }

    getVideoByMovie(movieId) {
        return this.http.get<any>(`${this.url}/tmdb/videos/${movieId}`)
        .toPromise()
        .then(res => { return res; });
    }

    getCastByMovie(movieId) {
        return this.http.get<any>(`${this.url}/tmdb/casts/${movieId}`)
        .toPromise()
        .then(res => { return res; });
    }


    

 
}