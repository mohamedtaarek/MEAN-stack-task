# MEAN-Stack-Technical-Task

EasyKash MEAN Stack technical task

---

The repostory contains two folders:

1. backend
2. frontend

---

## 1. backend

this folder contains the node project that recieves the GET request.

- Installation

first you should create a database and insert .env file that contains your configurationsfor the database that should look like this

```
	DB_USER = "USERNAME"
	DB_PASS = "PASSWORD"
	DB_DATABASE = "DATABASE_NAME"
```

secondly navigate to the folder "backend" through terminal
then run

```bash
npm install
```

then run

```bash
npm dev
```

or

```bash
yarn dev
```

then the application should be running on your local host on port 3003 you can try to send get request to "http://localhost:3003/transactions"
with the form in mentioned in the task.
on running the project it will create the transactions table automatically if it doesnot exist.

- testing

  - the request should contain "Token" feild in the header whose value is "ABC"
  - the request query parameters should contain:
    - "page" of type number
    - "per_page" of type number
    - "seller_id" of type number
    - "date_range" of type date

---

## 2. frontend

this folder is supposed to contain the frontend of the project.

- installation:

  navigate to the folder and run:

  ```bash
  npm install
  ```

  then run:

  ```bash
  ng serve --open
  ```

  it should open the webpage on "http://localhost:4200" containing the page with dummy data.

- To Be Done:

  on clicking the search button it should get the data form the text boxes and send the request to the backend retrieving the data and rendering it instead of the dummy data.
