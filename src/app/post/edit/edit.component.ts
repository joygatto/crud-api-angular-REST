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
  /*this.id = this.route.snapshot.params['postId'];:
   Qui viene ottenuto il valore del parametro 'postId' */
    this.id = this.route.snapshot.params['postId'];
    /*
     Qui viene chiamato il metodo find()
     del servizio postService, passando this.id come argomento.*/
    this.postService.find(this.id).subscribe((data: Post) => {
      this.post = data;

    });
/* tipo di form reactive oggetto FormGroup che rappresenta il gruppo di campi
 del form.*/
    this.form = new FormGroup({
     /*verificare che i campi non siano vuoti.
     Entrambi i campi richiedono che siano inseriti dei valori non vuoti per superare la validazione.*/
     title: new FormControl('', [Validators.required]),
     body: new FormControl('', Validators.required)
    });
  }


  // Metodi
  /*get f() rappresenta una getter function in TypeScript.
  con f, viene restituito il valore della proprietà controls dell'oggetto form*/
  get f() {

    return this.form.controls;

  }

  submit() {

    console.log(this.form.value);
    /** Qui viene chiamato il metodo update() del servizio postService, passando
     * this.id ( l'ID del "post" da aggiornare) e this.form.value*/
    this.postService.update(this.id, this.form.value).subscribe((res:any)=>{

      /** Questo è il modo in cui si sottoscrive all'Observable
       per ricevere la risposta dalla richiesta HTTP.
       All'interno della funzione di callback (res:any) => { ... },
        vengono eseguite le azioni quando la risposta viene ricevuta con successo.*/
      console.log('Post aggiornato con successo!');
      // Questa riga di codice reindirizza l'utente alla pagina index
      this.router.navigateByUrl('post/index');
    })
  }
}
