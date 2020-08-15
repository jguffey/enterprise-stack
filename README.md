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

- [x] Set up Dockerfiles
- [x] Get Healthchecks working for all the above services
- [x] Connect the Web SPA to the backend service
  - [x] Need a [DNS service](https://medium.com/@juan_cortes/local-domains-through-nginx-proxy-and-docker-13d97ee8c010)
  - [x] Need to set up CORS
- [x] Set up a development docker-compose script that auto-restarts on save
- [x] Consider switching to Django from flask!
- [ ] Set up secrets, use ENV or something so developers can avoid secrets in repo and store their own
- [ ] Start work on deployment.
  - [ ] Determine deployment strategy
  - [ ] use the docker-containers to deploy containers to production, or:
  - [ ] replicate the structure in an AWS environment
- [ ] Basic User / AUTH support
- [ ] Add user groups / permissions, ACLs

# Issues


# Room For Improvement

- Take a look at security, user for docker images, etc.
- Backend structure is annoying, app/app? That sucks!
  - I think I'll have to find and use a different flask image.
- DNS service, how does it work, what can we improve
  - Have makefile add hostname entries

## Infrastructure as code

Some of the steps here were rather manual. If we have any steps, we need to document
those steps, or turn it into a setup script.

### Manual steps that need to be reconciled

The django folder structure was set up via django-admin commands,
`startproject` and `startapp`. That generated the folders here, but
that process was manual. What do these steps do? Would we need to
recreate these steps in the future for a clean setup process?

Also, the marketing and spa service versions are heavily dependent on when
we set them up. Running these setups later may yield newer versions of
dependencies, etc. If we were to start again from scratch, what commands
would we run, and would that generate different results?

## Documentation

Try to document the path that lead to this codebase. Why the decisions were made?
