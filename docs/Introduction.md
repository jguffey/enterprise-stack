# Introduction

The Enterprise Web Application stack repo is a demo / starting point which can
be used to create the software required to run a small or medium-sized technology
business. The idea here is to get you started with enough infrastructure and
services to support your business until you can hire a large enough team to
start specializing. This is accomplished by defining basic services in the
following realms:

- Static Marketing Site, no dynamic content, no blog.
- Single Page Web App, a customer facing web application powered by react.
- A Python-backed API service, a django-powered API service layer
- A postgres-db server to back the API.
- A local DNS to help with local development
- docker-compose to make it all run locally, with ease

Each of these features are provided as a "bare-minimum", and no UI design work
and no further architecture is defined.

# Extensibility

This project was designed to be extendable. The services section of the
docker-compose file would be an ideal starting point. You might define background
workers, message buses, analyzers, etc there.
