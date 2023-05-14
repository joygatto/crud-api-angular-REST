/*utilizzato per costruire il componente, il reactive form
la cui logica è scritta nel file .ts a differenza del driven form
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
export class CreateComponent implements OnInit {


  // Variabili
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
  get f() {

    return this.form.controls;

  }

  submit() {

    console.log(this.form.value);
    this.postService.create(this.form.value).subscribe((res:any)=>{
      console.log('Post creato con successo!');
      this.router.navigateByUrl('post/index');
    })
  }


}
