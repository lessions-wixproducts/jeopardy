#Description
Quiz app with jeopardy questions.

Create a Node application with MongoDB as database that has the same functionality as the MySQL database. 

- Retrieve _n_ questions random from the collection
- REST for all collections
- Add a collection for answers. Motivate your considerations for nested document, sub documents or new collection.


Your assignment:

Fix the TODO's



#Import

**Mongodb**

```mongorestore -d jeopardy ~/workspaces/jeopardy/data/mongodb```

**MySQL**


```cd ~/workspaces/jeopardy/data/mysql```

```mysql -u USERNAME -p'PASSWORD' < jeopardy.sql```