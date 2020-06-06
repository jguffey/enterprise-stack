# Enterprise Web Application Stack

![Plan](IMG_0037.PNG)
![Directories](IMG_0038.PNG)

Exploring a complete setup.


# Setup

## Node
There's a `.nvmrc` file in the root, so use it with `nvm use` to ensure that
you are using the right version of node.


# Running

to Run in production:
- `cd docker && docker-compose up --build`.
- `docker-compose start`
- `docker-compose logs -f`

to stop:
- `docker-compose down`

# Debugging

To attach to any running container, try
`docker exec -it {id} /bin/bash`
where {id} is replaced with your running container

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
  - [x] for spa
  - [ ] for database
  - [x] for api
- [ ] Get Healthchecks working for all the above services
- [ ] Connect the Web SPA to the backend service
  - [ ] Need a [DNS service](https://medium.com/@juan_cortes/local-domains-through-nginx-proxy-and-docker-13d97ee8c010)
- [ ] Set up a development docker-compose script that
  - [ ] supports hot reloading for the ui commands
  - [ ] restarts the python server when changes happen to the files
- [ ] Basic User / AUTH support
- [ ] Add user groups / permissions, ACLs
- [ ] Set up secrets, use ENV or something so developers can avoid secrets in repo and store their own
- [ ] Start work on deployment to AWS.


# Issues

- SPA health check doesn't seem to run correctly.
  - Theory was that the CMD wasn't returning control back from the run scropt, but now, using pm2 to get this to run in the background, I'm still having the issue.

# Room For Improvement

- Take a look at security, user for docker images, etc.
- Backend structure is annoying, app/app? That sucks!
  - I think I'll have to find and use a different flask image.
