from flask import Flask, jsonify
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)

client = MongoClient('mongodb://localhost:27017/')
db = client['patiyogi']
collection = db['imagelinks']


@app.route('/api/cmd', methods=['GET'])
def get_image_links():
    try:
        images = list(collection.find())
        formatted_images = [{'imgSrc': img['img']} for img in images]
        # hello = {"key": "bhanu"}
        return jsonify(formatted_images)
    except Exception as e:
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=3345)