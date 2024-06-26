import { Observable } from "rxjs";
import { Album } from "../album";

export abstract class AlbumGateway {
    abstract getByID(id:string): Observable<Album>;
    abstract getAll(): Observable<Array<Album>>;
    abstract saveNew(_alb:Album): Observable<void>;

}