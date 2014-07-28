#Description
Quiz app with jeopardy questions.

Create a Node application with MongoDB as database that has the same functionality as the MySQL database. See description below.

- Retrieve all unique _categories_
- Retrieve _n_ questions random from the collection
- Add a collection for answers. Motivate your considerations for nested document, sub documents or new collection.
- Create a REST interface for all collections


#Import

**Mongodb**

```mongorestore -d jeopardy ~/workspaces/jeopardy/data/mongodb```

**MySQL**

Create the mysql user
```create database jeopardy;
create user 'USERNAME' identified by 'PASSWORD';
grant all on jeopardy.* to USERNAME@'localhost' identified by 'PASSWORD';
flush privileges;```

Now import the data seed.

```mysql -u USERNAME -p'PASSWORD' < ~/workspaces/jeopardy/data/mysql/jeopardy.sql```

#Sample application in MySQL

Install the dependencies with ```npm install```

Run ```node app.js```

Point your browser to ```http://localhost:3000/explorer/```


