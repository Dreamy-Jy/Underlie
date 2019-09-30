#Test Version 2 of the database
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
#COMMAND 1
#Creating a database called test db
#mycursor.execute('CREATE DATABASE testdb')

    #print(mydb)
'''
####################################################
'''
#showing the databases
mycursor.execute("SHOW DATABASES")

for db in mycursor:
     print(db)
'''
#################################################

'''
#COMMAND 2
#Creating the table with six colmuns with two types, which are varchar and integer

mycursor.execute("CREATE TABLE website_data(website_source VARCHAR(255),title VARCHAR(255),date INTEGER(10),author VARCHAR(255),sources_used VARCHAR(255),grammar VARCHAR(255) ) ")
'''

####################################################

'''
#Shows the table name
mycursor.execute("SHOW TABLES")

for tb in mycursor:
    print(tb)
'''
##############################################
''''
COMMAND 3
#use to insert one row of data
sqlFormula="INSERT INTO fake_scoring(website_source,title,date,author,sources_used,grammar) VALUES(%s,%s,%s,%s,%s,%s)"
article1=(".gov",job growth in the us,92519,Henry Roberts,.gov-data,no)

mycursor.execute(sqlFormula,article1)

mydb.commit()
'''
#########################################
'''
#COMMAND 4

#Creating multiple rows of various data with the actual database calculating with made up data
#grammar:(yes and no for grammar is if it has any spelling or grammar errors)



sqlFormula="INSERT INTO website_data(website_source,title,date,author,sources_used,grammar) VALUES(%s,%s,%s,%s,%s,%s)"
articles=[(".gov","job growth in the us",92519,"Henry Roberts",".gov-data","no"),
          (".edu","technology in the world",92010,"Kenney Joe",".gov-sciencedaily","yes"),
          (".com","using various texts in microsoft word",92318,"Bill Micheal",".gov-data","no"),
          (".org","making a self-made house",92819,"Bob Boyers",".gov-data","yes"),
          (".wiki","making a car",82518,"Scott Harrington",".gov-data","yes"),]
mycursor.executemany(sqlFormula,articles)



mydb.commit()
'''
####################################


#'''
#COMMAND 5
#getting all(*) data and printing out row by row

mycursor.execute("SELECT * FROM website_data")

myresult = mycursor.fetchall()

for row in myresult:
    print(row)
#'''


