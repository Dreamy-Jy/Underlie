#Test Version 3 of the database
import mysql.connector
import xlrd
#Creating a test database called testdb
mydb = mysql.connector.connect(
    host="127.0.0.1",
    user="root",
    passwd="password123",
    database="testdb"
)
mycursor=mydb.cursor()

file_location = "C:/Users/tanvi/Documents/Software Engineering/testdb.xlsx"
workbook = xlrd.open_workbook(file_location)
sheet = workbook.sheet_by_index(0)


##################################################
'''
#COMMAND 1
#Creating a database called test db
mycursor.execute('CREATE DATABASE testdb')

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
#Creating the table with six colmuns with two types,
#which are varchar and integer
mycursor.execute("CREATE TABLE website_data(website_source VARCHAR(255), title VARCHAR(255),date INTEGER(10),author VARCHAR(255),sources_used VARCHAR(255),
grammar VARCHAR(255) ) ")
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
#COMMAND 3
#used to insert one row of data
sqlFormula="INSERT INTO website_data(website_source,title,date,author,sources_used,grammar) VALUES(%s,%s,%s,%s,%s,%s)"
article1=(".com","using various texts in microsoft office",92318,"Bill Roberts",".gov-data","no")
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

'''
# Create the INSERT INTO sql query
query = """INSERT INTO website_data(website_source,title,date,author,sources_used,grammar) VALUES(%s,%s,%s,%s,%s,%s)"""

# Create a For loop to iterate through each row in the XLS file, starting at row 2 to skip the headers
for r in range(1, sheet.nrows):
		website_source = sheet.cell(r,0).value
		title = sheet.cell(r,1).value
		date = sheet.cell(r,2).value
		author = sheet.cell(r,3).value
		sources_used = sheet.cell(r,4).value
		grammar = sheet.cell(r,5).value


		# Assign values from each row
		values = (website_source, title,date,author,sources_used,grammar)

		# Execute sql Query
		mycursor.execute(query, values)

# Close the cursor
mycursor.close()

# Commit the transaction
mydb.commit()

# Close the database connection
mydb.close()

'''


###########################################################


#'''
#COMMAND 5
#getting all(*) data and printing out row by row
mycursor.execute("SELECT * FROM website_data")
myresult = mycursor.fetchall()
for row in myresult:
    print(row)
#'''


