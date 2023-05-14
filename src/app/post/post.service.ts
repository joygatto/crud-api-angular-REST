/**Qui creo il file del servizio posts implementati ossia
 * la logica dell'applicazione e chiamo tutti i servizi web.
 * creo getAll(), create(), find(), update() e delete().
si utilizza l'API del sito web https://jsonplaceholder.typicode.com . */

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  // URL API JSON PLACEHOLDER

  private apiURL = "https://jsonplaceholder.typicode.com";

  // Http Header options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  // Creazione costruttore
  /* iniezione di dipendenza nel costruttore del servizio rest
  attraverso il protocollo httpclient*/
  constructor(private httpClient: HttpClient) { }


  // Metodi CRUD applicati alle API che trasportano i posts come Osservable

  getAll(): Observable<any> {

    return this.httpClient.get(this.apiURL + '/posts/');

  }

//crea un post
  create(post: Post): Observable<any>{

    return this.httpClient.post(this.apiURL + '/posts/', JSON.stringify(post), this.httpOptions);

  }

//cerca un post per id
  find(id: number): Observable<any>{

    return this.httpClient.get(this.apiURL + '/posts/' + id);

  }

//aggiorna un post per id
  update(id: number, post: Post): Observable<any>{

    return this.httpClient.put(this.apiURL + '/posts/' + id, JSON.stringify(post), this.httpOptions);

  }

  //cancella un post per id
  delete(id: number){

    return this.httpClient.delete(this.apiURL + '/posts/' + id, this.httpOptions);
  }











}
