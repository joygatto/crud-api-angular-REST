/* Ho utilizzato il reactive form per costruire il componente,
la cui logica è scritta nel file .ts , a differenza del driven form
la cui logica è scritta nel file html. Utilizzo form group per il controllo generale
degli input e form control per il controllo del singolo campo di input.
*/
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']

})

// definizione di una classe "CreateComponent" che implementa l'interfaccia "OnInit"
export class CreateComponent implements OnInit {


  // Variabili
  /** Viene dichiarata una variabile di tipo FormGroup chiamata "form". Tuttavia, viene utilizzato
   * l'operatore "!" per indicare che la variabile potrebbe essere non inizializzata durante la dichiarazione,  */
  form!: FormGroup;
//iniezione di dipendenza
  constructor(public postService: PostService, private router: Router) { }

  //inizializazzione del componente
  ngOnInit(): void {
    this.form = new FormGroup({
      // Verificare che i campi non siano vuoti
      title: new FormControl('', Validators.required),
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
    /* this.postService.create(this.form.value):
    Qui viene chiamato il metodo create() del servizio
     postService, passando this.form.value come argomento. this.form.value rappresenta
     i dati del nuovo "post" che si desidera creare. */
    this.postService.create(this.form.value).subscribe((res:any)=>{
   /* Questo è il modo in cui si sottoscrive all'Observable per ricevere la risposta dalla richiesta HTTP.
      Dentro la funzione di callback (res:any) => { ... },  */

      console.log('Post creato con successo!');
      /*una volta creato il post torno all'index*/
      this.router.navigateByUrl('post/index');
    })
  }


}
