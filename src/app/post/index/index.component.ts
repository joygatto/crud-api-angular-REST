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
  posts: Post[] = [];


  // Iniezione di dipendenza del servizio PostService
  constructor(private postService: PostService) { }

  ngOnInit(): void {


//sottoscrizione del post service
   this.postService.getAll().subscribe((data: Post[]) => {

    this.posts = data;
    console.log(this.posts);

   })
  }

// metodo crud di cancellazione delete attraverso l'indice:id.
  deletePost(id: number){

    this.posts = this.posts.filter(item => item.id !== id);
    console.log('Post cancellato con successo!');

  }



}
