Grum's SQL notes
-------------------------------------------

**Contents**

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Basic commands](#basic-commands)

<!-- /code_chunk_output -->

---

# Basic commands

```sql
CREATE TABLE table_name (
   id INTEGER, 
   name TEXT,
   description TEXT,
   age INTEGER
);

-- With constraints;
CREATE TABLE awards (
  id INTEGER PRIMARY KEY,  /* Uniquely identify the row. Attempts to insert a row with an identical value to a row already in the table will result in a constraint violation which will not allow you to insert the new row. */
  name TEXT UNIQUE,  /* have a different value for every row. This is similar to PRIMARY KEY except a table can have many different UNIQUE columns. */
  home_phone NOT NULL, /* must have a value. Attempts to insert a row without a value for a NOT NULL column will result in a constraint violation and the new row will not be inserted. */
  description TEXT DEFAULT "Generally inoffensive"); /* take an additional argument that will be the assumed value for an inserted row if the new row does not specify a value for that column. */

INSERT INTO table_name (id, name, age) 
VALUES (1, 'Fred', 21);

SELECT * FROM table_name;

UPDATE table_name 
SET column_name = 'some_value' 
WHERE other_column_name = 'another_value';

ALTER TABLE table_name 
ADD COLUMN new_column_name DATA_TYPE; 

DELETE FROM table_name 
WHERE column_name IS NULL; 
```