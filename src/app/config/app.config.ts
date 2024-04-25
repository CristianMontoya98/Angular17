import { ApplicationConfig } from "@angular/core";
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from "@angular/common/http";
import { AlbumGateway } from "../domain/models/Album/gateway/albumGateway";
import { AlbumApiService } from "../infraestructure/drivenAdapter/album-api/album-api.service";

export const appConfig: ApplicationConfig = {
    providers:[provideRouter(routes), provideHttpClient(withFetch()),
    {provide: AlbumGateway, useClass: AlbumApiService},]
}