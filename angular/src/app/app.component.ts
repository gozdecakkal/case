import { Component } from '@angular/core';
import {TmdbService } from './tmdbservice';

import { PrimeNGConfig } from 'primeng/api';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    movies: any[];
    moviesById: any[];
    isVisibleAll: boolean = true;
    videos:any[];
    cast:any[];
    url: SafeResourceUrl

    constructor(private tmdbService: TmdbService, private primengConfig: PrimeNGConfig,private sanitizer:DomSanitizer) { }

    ngOnInit() {
        this.tmdbService.getPopularMovies().then(data => {
            this.movies = data
            return this.movies;
        });

        this.primengConfig.ripple = true;
    }

    detailOfMovie(movieId) {
        this.isVisibleAll = false
        this.moviesById = this.movies.filter(item => item.id === movieId)

        this.tmdbService.getVideoByMovie(movieId).then(data => {
            this.videos = data
            this.videos.forEach(item=>{
                item["url"]= this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${item.key}`)
            })
            return this.videos;
        });

        this.tmdbService.getCastByMovie(movieId).then(data => {
            this.cast = data
            return this.cast;
        });

    }


}
