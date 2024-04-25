import { Injectable } from "@angular/core";
import { AlbumGateway } from "../../../domain/models/Album/gateway/albumGateway";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Album } from "../../../domain/models/Album/album";

@Injectable ({
    providedIn: 'root'
})
export class AlbumApiService extends AlbumGateway {
    private _url = 'https://jsonplaceholder.typicode.com/albums/';
    constructor(private http: HttpClient) {
        super();
    }
    getByID(id: string): Observable<Album> {
        return this.http.get<Album>(this._url+id);
    }
    getAll(): Observable<Album[]> {
        return this.http.get<Array<Album>>(this._url);
    }
    saveNew(_alb:Album): Observable<void> {
        throw new Error('Method not implemented.')
    }
}