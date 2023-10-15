# Python program to insert static course-object into DB

from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import os
from dotenv import load_dotenv

load_dotenv()

uri = os.getenv('MONGO_URI')
# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))
# Send a ping to confirm a successful connection
try:
    # static data object
    newData = {
        "name": "course 2 from Python",
        "members": ['member2 from Python'],
        "coachId": "coach2 from Python",
        "description": "description2 from Python"
    }
    # accessing the courses table
    db = client["Courses-API"]
    courses = db.courses
    # inserting the object as a new document into the table
    courses.insert_one(newData)
    print("new data added to MongoDB!")
except Exception as e:
    print(e)