import mysql.connector
#Creating a test database called testdb
mydb = mysql.connector.connect(
    host="127.0.0.1",
    user="root",
    passwd="password123",
    database="testdb"
)

mycursor=mydb.cursor()

'''
COMMAND 1
Creating a database called test db
#mycursor.execute('CREATE DATABASE testdb')

    #print(mydb)
'''
####################################################
'''showing the databases
mycursor.execute("SHOW DATABASES")

for db in mycursor:
     print(db)
'''
#################################################

'''
Creating the table with five colmuns with two types, which are varchar and integer

mycursor.execute("CREATE TABLE fake_scoring(website_source VARCHAR(255),w_score INTEGER(10),article_subject VARCHAR(255), a_score INTEGER(10), final_score INTEGER(10) ) ")

'''
####################################################

'''
Shows the table name
mycursor.execute("SHOW TABLES")

for tb in mycursor:
    print(tb)
'''
##############################################
''''
COMMAND 2
use to insert one row of data
sqlFormula="INSERT INTO fake_scoring(website_source,w_score,article_subject ,a_score,final_score) VALUES(%s,%s,%s,%s,%s)"
article1=(".gov",100,"health",30,130)

mycursor.execute(sqlFormula,article1)

mydb.commit()
'''
#########################################
'''
COMMAND 3

Creating multiple rows of various data with the actual database calculating the addition of the W_score and the a_score



sqlFormula="INSERT INTO fake_scoring(website_source,w_score,article_subject ,a_score,final_score) VALUES(%s,%s,%s,%s,%s)"
articles=[(".gov",100,"health",30, 0),
          (".edu",90,"computers",40,0 ),
          (".com",80,"microsoft",70,0 ),
          (".org",70,"salesforce",80,0 ),
          (".wiki",60,"scott",30,0 ),]
mycursor.executemany(sqlFormula,articles)



sql="UPDATE fake_scoring SET final_score = w_score+a_score "

mycursor.execute(sql)

mydb.commit()
'''
####################################


#'''
#COMMAND 4
#getting all(*) data and printing out row by row
mycursor.execute("SELECT * FROM fake_scoring")

myresult = mycursor.fetchall()

for row in myresult:
    print(row)
#'''
###################################################

'''
getting one column data of final_score and printing out row by row
mycursor.execute("SELECT final_score FROM fake_scoring")

myresult = mycursor.fetchall()

for row in myresult:
    print(row)
'''
#####################################
'''
getting one column data of final_score and printing out row by row firt data
mycursor.execute("SELECT final_score FROM fake_scoring")

myresult = mycursor.fetchone()

for row in myresult:
    print(row)
'''
##########################################
'''

prints rows where final_score is equal to 130

sql= "SELECT * FROM fake_scoring WHERE final_score=130"

mycursor.execute(sql)

myresult=mycursor.fetchall()

for result in myresult:
    print(result)
'''
###################################
'''
prints rows where artcile_subject that has a letter e somewhere in the middle

sql= "SELECT * FROM fake_scoring WHERE article_subject LIKE '%e%'"

mycursor.execute(sql)

myresult=mycursor.fetchall()

for result in myresult:
    print(result)
'''
##################################################
'''
prints rows where artcile_subject that has a letter t at the end

sql= "SELECT * FROM fake_scoring WHERE article_subject LIKE '%t'"

mycursor.execute(sql)

myresult=mycursor.fetchall()

for result in myresult:
    print(result)
'''
#########################################################

'''
updating values in rows for w_score=110 where website_source=.gov

sql="UPDATE fake_scoring SET w_score=10 WHERE website_source=.gov "

mycursor.execute(sql)

mydb.commit()
'''
################################
'''
shows the first five rows
mycursor.execute("SELECT * FROM fake_scoring LIMIT 5")

myresult= mycursor.fetchall()

for result in myresult:
    print(result)
'''
###################################

'''
Order the artciles in alphbetical order for article_subject and then prints that rows

sql="SELECT * FROM fake_scoring ORDER BY article_subject "

mycursor.execute(sql)

myresult= mycursor.fetchall()

for result in myresult:
    print(result)
'''
###########################
'''
Order the artciles in alphbetical order for article_subject and then prints the rows in descending order

sql="SELECT * FROM fake_scoring ORDER BY article_subject DESC "

mycursor.execute(sql)

myresult= mycursor.fetchall()

for result in myresult:
    print(result)
'''
##############################

'''
deletes all of the article subjects that are eqal to health
sql ="Delete FROM fake_scoring WHERE article_subject ='health'"

mycursor.execute(sql)

mydb.commit()
'''

##############################
''''
deletes whole table
sql ="DROP TABLE fake_scoring"

mycursor.execute(sql)

mydb.commit()
'''

