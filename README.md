#Description
Quiz app with jeopardy questions.

Create a Node application with MongoDB as database that has the same functionality as the MySQL database. 

- Retrieve all unique _categories_
- Retrieve _n_ questions random from the collection
- Add a collection for answers. Motivate your considerations for nested document, sub documents or new collection.
- Create a REST interface for all collections

Your assignment:

Fix the TODO's



#Import

**Mongodb**

```mongorestore -d jeopardy ~/workspaces/jeopardy/data/mongodb```

**MySQL**

```mysql -u USERNAME -p'PASSWORD' < ~/workspaces/jeopardy/data/mysql/jeopardy.sql```