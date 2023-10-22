build-images:
	sudo docker build -t frontend . ; sudo docker build -t server .

run-images:
	sudo docker run --env-file ./server/.env -p 5000:5000 server; sudo docker run --env-file ./frontend/.env -p 3000:3000 frontend

run-app:
	cd server && npm start & 
	cd frontend && npm start