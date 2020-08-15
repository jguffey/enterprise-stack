# Secrets

We will store all service-level secrets in the root dir of the service in a `.env` file.

All available keys are stored in `.env-template` and checked into the github repository.

Developers should ask one another for access to the real values of the `.env` files.

The application is responsible for reading the key values from environment variables.
