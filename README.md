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

# DNS

You need the following entries in your /etc/hosts file for this to work properly.

```
127.0.0.1 dev.app.local
127.0.0.1 api.app.local
127.0.0.1 marketing.app.local
127.0.0.1 db.app.local
```

# TODO
- [~] Set up Dockerfiles
  - [x] for marketing
  - [x] for spa
  - [x] for database
  - [x] for api
- [x] Get Healthchecks working for all the above services
- [x] Connect the Web SPA to the backend service
  - [x] Need a [DNS service](https://medium.com/@juan_cortes/local-domains-through-nginx-proxy-and-docker-13d97ee8c010)
  - [x] Need to set up CORS
- [ ] Set up a development docker-compose script that
  - [ ] restarts the python server when changes happen to the files
  - [ ] supports hot reloading for the ui commands
- [ ] Basic User / AUTH support
- [ ] Add user groups / permissions, ACLs
- [ ] Set up secrets, use ENV or something so developers can avoid secrets in repo and store their own
- [ ] Start work on deployment to AWS.


# Issues
Reload works, but only within the container. So, if you are ssh'd into the server, and touch uwsgi.ini, it will restart.
However, the files are copied over during build, not mounted as external drives.

Instead of using `touch-reload = /app/app/main.py` in uwsgi, i'm using watchdog, as recommended [here](https://stackoverflow.com/a/49435131/344405). However, it's not yet doing anything of value.

# Room For Improvement

- Take a look at security, user for docker images, etc.
- Backend structure is annoying, app/app? That sucks!
  - I think I'll have to find and use a different flask image.
- DNS service, how does it work, what can we improve
  - Have makefile add hostname entries
