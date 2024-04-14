from pymongo import MongoClient

client = MongoClient('mongodb://localhost:27017/')
db = client['dbs']
collection = db['images']

images = list(collection.find())
formatted_images = [{'imgSrc': img['img1']} for img in images]

print(formatted_images)