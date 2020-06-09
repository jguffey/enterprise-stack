# See https://makefiletutorial.com/
DOCKER_DIR=docker

up: $(DOCKER_DIR)
	cd $(DOCKER_DIR); docker-compose up -d --build

down: $(DOCKER_DIR)
	cd $(DOCKER_DIR); docker-compose down

logs: $(DOCKER_DIR)
	cd $(DOCKER_DIR); docker-compose logs -f -t

bash_spa:
	cd $(DOCKER_DIR); docker exec -it docker_spa_1 /bin/sh

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
	"
