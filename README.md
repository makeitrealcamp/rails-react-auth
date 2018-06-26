# Autenticación con Rails y React

Este tutorial muestra un ejemplo de autenticación utilizando Ruby on Rails, React, React Router y JWT (JSON Web Tokens).

Fue creada con el siguiente comando que configura React dentro de Ruby on Rails:

```
$ rails new reactauth --webpack=react
```

Existe un único modelo llamado [User](app/models/user.rb) con dos atributos: `email` y `password_digest`.

Creamos tres controladores:

* [HomeController](app/controllers/home_controller.rb) - sólo tiene una acción `index` para renderizar la aplicación de React.
* [SessionsController](app/controllers/sessions_controller.rb) - sólo tiene una acción `create` que hace la autenticación y retorna el JWT, esta acción se va a llamar por AJAX desde la aplicación de React.
* [UsersController](app/controllers/users_controller.rb) - tiene una acción `index` para listar los usuarios y otra `create` para el registro de nuevos usuarios. Estas acciones se llaman por AJAX desde la aplicación de React.

Las [rutas](config/routes.rb) tienen una particularidad y es que definimos una ruta genérica al final que siempre va a `home#index`, es decir, a la aplicación de React, que tiene su propio enrutamiento con React Router:

```ruby
Rails.application.routes.draw do
  root "home#index"

  resources :sessions, only: [:create]
  resources :users, only: [:index, :create]

  get '*path', to: "home#index"
end
```

Toda la aplicación de React se encuentra dentro de la carpeta `app/javascript`, que está dividida en tres carpetas:

* `components` - tiene los componentes de la aplicación, el principal es `app.jsx`, que configura la mayor parte del enrutador (la nueva versión de React Router está muy interesante, aunque al principio es un poco difícil entenderla).
* `packs` - contiene el archivo `application.js`, que es el que se incluye en el layout de Rails.
* `services` - los servicios que utilizamos desde los componentes.

## Siguientes pasos

A esta aplicación todavía se le pueden realizar las siguientes mejoras:

* Mostrar los errores de validación en los formularios.
* Utilizar algún framework como Bootstrap o Bulma.
* Utilizar Redux (quizá Apollo con GraphQL en el servidor?).
* Escribir algunos tests.
