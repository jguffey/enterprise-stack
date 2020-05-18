# Enterprise Web Application Stack

![Plan](IMG_0037.PNG)
![Directories](IMG_0038.PNG)

Exploring a complete setup.


# Setup

## Node
There's a `.nvmrc` file in the root, so use it with `nvm use` to ensure that
you are using the right version of node.


# Running

to Run in production: `docker-compose up --build`.

## Tree

```
.
├── README.md  (this file)
├── backend (all the backend services)
│   └── app (will probably actually contain both the graphQL lib and REST API)
├── docker (The main app docker files)
│   └── docker-compose.yaml
├── services (All the services we use will go here (bus, etc.))
└── ui
    ├── lib (shared resources for both apps)
    ├── marketing (static marketing site)
    └── spa (single page web application, UI for the app)
```

# TODO
- [ ] Set up Dockerfiles
  - [x] for marketing
  - [ ] for spa
  - [ ] for database
  - [ ] for api
- [ ] Ensure all images that need to talk can do so.
- [ ] Connect the Web SPA to the backend service
- [ ] Basic User / AUTH support
- [ ] Add user groups / permissions, ACLs
- [ ] Set up secrets, use ENV or something so developers can avoid secrets in repo and store their own
- [ ] Start work on deployment to AWS
