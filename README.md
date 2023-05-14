#Applicazione Angular crud REST API
Angular CLI: 13.2.6
Node: 16.14.0
Package Manager: npm 8.5.1
Metodi crud: getAll(), create(), find(), update() e delete().

##Protocollo
Rest HTTP.

API pubblica: API JSON PLACEHOLDER "https://jsonplaceholder.typicode.com".

##Endpoints
  { path: 'post/index', component: IndexComponent },
  { path: 'post/create', component: CreateComponent },
  { path: 'post/:postId/edit', component: EditComponent}

## Development server
ng serve da linea di comando cli.