from flask import Flask, request, jsonify
from flask_cors import CORS
from data.instance import worlds_json

app = Flask(__name__)
cors = CORS(app)


@app.route("/")
def hello_world():
    return "Hello, World!"


@app.route("/worlds")
def get_worlds():
    language = request.args.get("language")
    selected_worlds = [world for world in worlds_json if world["language"] == language]
    response = {"worlds": selected_worlds}
    return jsonify(response)


if __name__ == "__main__":
    app.run(debug=True)
