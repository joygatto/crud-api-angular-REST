import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  // Variabili
  id!: number;
  post!: Post;
  form!: FormGroup;

  constructor(public postService: PostService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
/* Si utilizzano  Osservable.  L'osservabile passerà i nuovi dati delle API (In questo
  caso i posts generati). */
    this.id = this.route.snapshot.params['postId'];
    this.postService.find(this.id).subscribe((data: Post) => {
      this.post = data;

    });

    this.form = new FormGroup({
     // Verificare che i campi non siano vuoti
     title: new FormControl('', [Validators.required]),
     body: new FormControl('', Validators.required)
    });
  }


  // Metodi
  get f() {

    return this.form.controls;

  }

  submit() {

    console.log(this.form.value);
    this.postService.update(this.id, this.form.value).subscribe((res:any)=>{
      console.log('Post aggiornato con successo!');
      this.router.navigateByUrl('post/index');
    })
  }
}
