import json
import base64
from pathlib import Path
from classes.world import World


def convert_image_to_base64(image_path):
    with open(image_path, "rb") as image_file:
        return base64.b64encode(image_file.read()).decode("utf-8")


# Paths to image files
image_paths = {
    "devotosImageUrl": "data/assets/calgar/devotos.jpeg",
    "drakonImageUrl": "data/assets/calgar/drakon.jpeg",
    "guardioesImageUrl": "data/assets/calgar/guardioes.jpeg",
    "kaelThalassaImageUrl": "data/assets/calgar/kaelThalassa.jpeg",
    "nyraImageUrl": "data/assets/calgar/nyra.jpeg",
    "talonBlackwingImageUrl": "data/assets/calgar/talonBlackwing.jpeg",
    "alaricImageUrl": "data/assets/elysium/alaric.gif",
    "seraphinaImageUrl": "data/assets/elysium/seraphina.gif",
    "taliaImageUrl": "data/assets/elysium/talia.gif",
    "akemiImageUrl": "data/assets/neo-recife/akemi.jpeg",
    "jaxImageUrl": "data/assets/neo-recife/jax.jpeg",
    "xartulImageUrl": "data/assets/neo-recife/xartul.jpeg",
    "arionImageUrl": "data/assets/elaria/arion.jpg",
    "kaelImageUrl": "data/assets/elaria/kael.jpg",
    "thaliaImageUrl": "data/assets/elaria/thalia.jpg",
}

# Load the worlds data from the JSON file
with open("data/worlds.json", "r") as file:
    worlds_data = json.load(file)

# Convert image URLs to base64 in character data
for world in worlds_data:
    for character in world["characters"]:
        image_key = character["imageUrl"]
        if image_key in image_paths:
            character["imageUrl"] = convert_image_to_base64(image_paths[image_key])

# Create World instances
worlds = [World(**world_data) for world_data in worlds_data]

# Convert the World instances to a JSON-serializable format
worlds_json = [world.to_dict() for world in worlds]
