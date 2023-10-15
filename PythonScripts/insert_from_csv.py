# Python program to read CSV data and insert it into DB
  
# Import necessary packages 
import csv
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import os
from dotenv import load_dotenv

# used to access ENV vars from .env file
load_dotenv()

uri = os.getenv('MONGO_URI')
# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))
  
# Open CSV file 
with open('data.csv', newline='') as csvfile:
    # Iterate over each row in the csv file
    reader = csv.DictReader(csvfile)
    db = client["Courses-API"]
    courses = db.courses
    for row in reader:
        try:
            # construct course object from CSV rows: 
            newData = {
                "name": row['name'],
                "members": row['members'].split(","),
                "coachId": row['coachId'],
                "description": row['description']
            }
            #print(newData)
            courses.insert_one(newData)
            print("new data entry added to MongoDB!")
        except Exception as e:
            print(e)
    print("insertion DONE!")