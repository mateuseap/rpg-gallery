from .character import Character
from .ai import AI

class World:
    def __init__(self, title, history, characters, ais, initialWorldInfoVisible):
        self.title = title
        self.history = history
        
        self.characters = [Character(**char) for char in characters]
        self.ais = [AI(**ai) for ai in ais]
        self.initialWorldInfoVisible = initialWorldInfoVisible

    def to_dict(self):
        return {
            "title": self.title,
            "history": self.history,
            "characters": [char.to_dict() for char in self.characters],
            "ais": [ai.to_dict() for ai in self.ais],
            "initialWorldInfoVisible": self.initialWorldInfoVisible
        }
