# Fleet studio Backend

## Tech

Fleet Studio uses following packages for front end

- [Node js] - Run JavaScript Everywhere
- [Express js] - [awesome web-based text editor](https://expressjs.com/)
- [Mongo Db] - Database
- [Mongoose] - elegant mongodb object modeling for node.js
- [nodemon] - nodemon reload, automatically.

## Installation

Install the dependencies and devDependencies and start the server.

```sh
cd fl-studio-be
npm i
```

make sure change mongo connection url in
config.js and seed.js file

after change
```sh
node seed.js
```
it will execute script for dummy data which will store in DB


then run 

```sh
npm run dev
```
check on api testing ide 
two get request
http://localhost:5000/repositories/octocat/hello-world/commits/a1bf367b3af680b1182cc52bb77ba095764a11f9
http://localhost:5000/repositories/octocat/hello-world/commits/a1bf367b3af680b1182cc52bb77ba095764a11f9/diff

it will response some data



fleet studio front end repo https://github.com/monesh-kannan-rk/fl-studio-be

make sure your frontend is connected or not


