# Applicazione Angular CRUD REST API
* Angular CLI: 13.2.6
* Node: 16.14.0
* Package Manager: npm 8.5.1
* Metodi crud: getAll(), create(), find(), update() e delete().

## Protocollo
Rest HTTP.

## Endpoint API
API pubblica: API JSON PLACEHOLDER "https://jsonplaceholder.typicode.com".
* { path: 'post/index', component: IndexComponent },
* { path: 'post/create', component: CreateComponent },
* { path: 'post/:postId/edit', component: EditComponent}

## Development server
ng serve da linea di comando cli.

comandi CLI utilizzati:
 ng new my-crud-app --routing

npm install bootstrap --save 

ng generate module post --routing

ng generate component post/index

ng generate component post/view

ng generate component post/create

ng generate component post/edit

  ng generate interface post/post 
  ng generate service post/post 

  
