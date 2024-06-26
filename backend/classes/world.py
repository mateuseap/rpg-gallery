from .character import Character
from .ai import AI


class World:
    def __init__(
        self,
        language,
        title,
        history,
        characters,
        ais,
        initialWorldInfoVisible,
        externalLink=None,
    ):
        self.language = language
        self.title = title
        self.history = history

        self.characters = [Character(**char) for char in characters]
        self.ais = [AI(**ai) for ai in ais]
        self.initialWorldInfoVisible = initialWorldInfoVisible
        self.externalLink = externalLink

    def to_dict(self):
        return {
            "language": self.language,
            "title": self.title,
            "history": self.history,
            "characters": [char.to_dict() for char in self.characters],
            "ais": [ai.to_dict() for ai in self.ais],
            "initialWorldInfoVisible": self.initialWorldInfoVisible,
            "externalLink": self.externalLink if self.externalLink else None,
        }
