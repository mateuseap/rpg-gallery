import json
from flask import Flask, jsonify
from flask_cors import CORS
from data.instance import worlds_json

app = Flask(__name__)
cors = CORS(app)


@app.route("/")
def hello_world():
    return "Hello, World!"


@app.route("/worlds")
def get_worlds():
    response = {"worlds": worlds_json}
    return jsonify(response)


if __name__ == "__main__":
    app.run(debug=True)
