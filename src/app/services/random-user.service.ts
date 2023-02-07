import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import {
  IRandomContact,
  Results,
} from '../models/interfaces/RandomUser.interface';
@Injectable({
  providedIn: 'root',
})
export class RandomUserService {
  constructor(private http: HttpClient) {}

  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error(`Ha ocurrido un error: ${error.error}`);
    } else {
      console.error(
        `Error en el backend: ${error.status}. El error es: ${error.error}`
      );
    }
    return throwError(
      () => new Error('Error en la peticion de contacto aleatorio')
    );
  }

  obtenerRandomcontact(): Observable<Results> {
    return this.http
      .get<Results>('https://randomuser.me/api')
      .pipe(catchError(this.handleError), retry(0));
  }

  obtenerRandomcontacts(n: number): Observable<Results[]> {
    const opciones: HttpParams = new HttpParams().set('results', n);
    return this.http
      .get<Results[]>('https://randomuser.me/api', { params: opciones })
      .pipe(catchError(this.handleError), retry(0));
  }
  obtenerRandomcontactsPorGenero(sexo: string): Observable<Results> {
    const opciones: HttpParams = new HttpParams().set('gender', sexo);
    return this.http
      .get<Results>('https://randomuser.me/api', { params: opciones })
      .pipe(catchError(this.handleError), retry(0));
  }
}
