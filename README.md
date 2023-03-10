# Solita_assingment_2023
This is my solution to the solita [dev-academy-2023 pre-assignment](https://github.com/solita/dev-academy-2023-exercise). 
In this assignment I have used docker to run the backend/server side of the code and in the frontend/client side I have used React.

### Installing the project
You should be able just to clone the project from GitHub with command
```
git clone https://github.com/MikkoVasankari/Solita_assingment_2023.git 
```

### To run the backend/server side
1. The backend has a docker container implementation so it requires you to have docker
So you might want to install it at https://www.docker.com/
 - After that you should have docker running.

2. When you have docker runinng you should first change your directory to the backend/server side of the project with 
```
cd /Solita_assingment_2023/Server
```
3. When you are in the server directory you can just run the backend/server with:
```
docker compose up -d
```
4. When you want to shutdown the backend/server you can use command:
```
docker compose down
```

### To run the frontend/client side

1. change your directory to the project files client directory:
```
cd /Solita_assingment_2023/client
```
2. The client/frontend requires react-router-dom so you might want to install that with:
```
 npm i react-router-dom
```
3. Then in the client directory you can start the frontend/client with:
```
 npm start
```


### Using the web application
After you have your frontend/client and backend/server running you should be able to use application in:
```
http://localhost:3000
```


