# React/Redux Blog

Blog built with react/redux front end and node, express, postgresql back end.

[Deployed Version]()

### Getting Started

1) Clone this reposistory, cd into each folder (blog-client, server, styles) and run `npm install` to install dependencies individually 
2) Create .env file inside server following the formart of .example.env 
3) Install knex globally to access Knex CLI commands
4) Run migrations `knex migrate:latest` and seed files `knex seed:run`

To start the express server:
```
cd server
npm start
```

To start the blog-client server:
```
cd blog-client
npm start
```

To compile the style sheets, run the following commands, then open /styles/src/main.scss in your code editor and perform a save.

``` 
cd styles
npm start
```

You are all set, open the web app on your browser: http://localhost:9001/
