import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  // Variabili
  /* indica la definizione di una variabile posts di
    tipo Post[] che viene inizializzata con un array vuoto.*/
  posts: Post[] = [];


  // Iniezione di dipendenza del servizio PostService
  constructor(private postService: PostService) { }

  /* inizializza e configura il componente */
  ngOnInit(): void {
  //sottoscrizione del post service
  /* getAll() che restituisca un oggetto Observable
  contenente un array di oggetti Post.*/
   this.postService.getAll().subscribe((data: Post[]) => {
  /* la variabile data che contiene i dati ricevuti li memorizza dentro
   l'array della post*/
    this.posts = data;
    console.log(this.posts);

   })
  }

// metodo crud di cancellazione delete attraverso l'indice:id.
  deletePost(id: number){
    /* il codice filtra l'array this.posts, rimuovendo gli elementi che
       hanno l'id uguale a quello specificato.
       in questo modo, posso rimuovere un elemento dall'array
       this.posts in base al suo id.*/
    this.posts = this.posts.filter(item => item.id !== id);
    console.log('Post cancellato con successo!');

  }



}
