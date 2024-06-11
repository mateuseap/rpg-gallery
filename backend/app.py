from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_caching import Cache
from data.instance import worlds_json

app = Flask(__name__)
cors = CORS(app)

cache = Cache(app, config={"CACHE_TYPE": "simple"})


@app.route("/")
def hello_world():
    return "Hello, World!"


@app.route("/worlds")
def get_worlds():
    language = request.args.get("language")

    cache_key = f"worlds_{language}"
    cached_response = cache.get(cache_key)
    if cached_response:
        return cached_response

    selected_worlds = [world for world in worlds_json if world["language"] == language]
    response = {"worlds": selected_worlds}

    cache.set(cache_key, jsonify(response), timeout=86400)

    return jsonify(response)


if __name__ == "__main__":
    app.run(debug=True)
