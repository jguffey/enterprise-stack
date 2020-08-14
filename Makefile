# See https://makefiletutorial.com/
DOCKER_DIR=docker
MARKETING_DIR=ui/marketing/site
SPA_NAME=docker_spa_1
MARKETING_NAME=docker_marketing_1
SERVER_NAME=docker_server_1
SERVER_DIR=/python/code

.PHONY: help
help:
	@echo "\
	The Enterprise Web App Skeleton:\n\n\
	The following commands are available in this Makefile\n\
	Type 'make [COMMAND]' to execute.\n\n\
	make up - Start all services\n\
	# make server - Start the API Server only\n\
	# make marketing - Start the marketing server only\n\
	# make ui - Start the Singlepage web app server only\n\
	make logs - Start logging Docker output\n\
	make down - Bring all/any services down\n\
	make bash_spa - Start shell in the spa app\n\
	make bash_marketing - Start shell in the marketing app\n\
	make bash - Shortcut to bash_server\n\
	make bash_server - Start shell in the server app\n\
	make marketing-build - install dependencies for marketing\n\
	make marketing - run the marketing site\n\
	\n\
	Make sure that the following entires are in your /etc/hosts file:\n\
	127.0.0.1 dev.app.local\n\
	127.0.0.1 api.app.local\n\
	127.0.0.1 marketing.app.local\n\
	127.0.0.1 db.app.local\n\
	"

up: $(DOCKER_DIR)
	cd $(DOCKER_DIR); docker-compose up -d --build
	echo "booting, starting browser when done."
	sleep 30 && open http://dev.app.local/status &

down: $(DOCKER_DIR)
	cd $(DOCKER_DIR); docker-compose down

logs: $(DOCKER_DIR)
	cd $(DOCKER_DIR); docker-compose logs -f -t

marketing-build: $(MARKETING_DIR)/package-lock.json $(MARKETING_DIR)/node_modules
	cd $(MARKETING_DIR) && npm i

marketing:
	cd $(MARKETING_DIR) && npm run start

bash_spa:
	cd $(DOCKER_DIR); docker exec -it $(SPA_NAME) /bin/sh

bash_marketing:
	cd $(DOCKER_DIR); docker exec -it $(MARKETING_NAME) /bin/sh

bash: # TODO, figure out how makefile aliases work
	cd $(DOCKER_DIR); docker exec -it $(SERVER_NAME) /bin/bash

shell: # TODO, figure out how makefile aliases work
	cd $(DOCKER_DIR); docker exec -it $(SERVER_NAME) python $(SERVER_DIR)/manage.py shell_plus

bash_server:
	cd $(DOCKER_DIR); docker exec -it $(SERVER_NAME) /bin/bash
