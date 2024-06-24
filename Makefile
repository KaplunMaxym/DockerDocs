create_image:
	docker build -t node_docker:env .
run:
	docker run -d -p 3000:4200 -v logs:/app/data --env-file .env --rm --name node_docker node_docker:env
run_dev:
	docker run -d -p 3000:4200 -v $(shell pwd):/app -v /app/node_modules --env-file .env --rm --name node_docker node_docker:env
run_dev_nodemon:
	docker run -d -p 3000:4200 -v $(shell pwd):/app -v /app/node_modules --env-file .env --rm --name node_docker --entrypoint "npx" node_docker:env nodemon main.js
stop:
	docker stop node_docker
