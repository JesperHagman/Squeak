# Squeak
This is the front-end part of the squeak app. The database and server can be found at: https://github.com/elovisae/Squeak_backend

Squeak is a social media platform where you can publish messages for everyone to read. Think twitter - but SQUEAKIER.

## Table of content
* [TTHFW](#TFFHW)
* [Technologies](#Technologies:)
* [Packages](#Packages) 
* [Authentification flow](#Authentification flow)
## TTFHW

```bash
cd ws
```


## Packages:
- React
- React-router-dom
- Axios
- Save-dev
- Eslint
- Express
- Mongoose
- Styled components
- Web vitals
- Jest
- Husky
- Nodemon
- Cypress


## Authentification flow

```mermaid
        sequenceDiagram
                participant C as Client
                participant S as Auth Server
                participant W as WebAPI
                C->>S: POST/ login, body {userId, password)
                S->>C: JWT 200 OK
                C->>W: JWT OK authorized, acces granted. GET/ ...
                W->>C: recources 200 OK
```

## Scripts





