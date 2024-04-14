import csv
from pymongo import MongoClient

client = MongoClient('mongodb://localhost:27017/')
db = client['patiyogi']
collection = db['imagelinks']

def read_csv_and_insert(filename):
    with open(filename, 'r') as file:
        csv_reader = csv.reader(file)
        row = next(csv_reader)
        for i in row:
            collection.insert_one({"img" : f"{i}"})
            # print("this")

if __name__ == "__main__":
    filename = './Assets/links.csv'
    read_csv_and_insert(filename)