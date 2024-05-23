class Character:
    def __init__(
        self,
        name,
        description,
        imageUrl=None,
        background=None,
        race=None,
        char_class=None,
        realm=None,
        appearance=None,
        personality=None,
        strengths=None,
        weaknesses=None,
    ):
        self.name = name
        self.description = description
        self.imageUrl = imageUrl
        self.background = background
        self.race = race
        self.char_class = char_class
        self.realm = realm
        self.appearance = appearance
        self.personality = personality
        self.strengths = strengths
        self.weaknesses = weaknesses

    def to_dict(self):
        return self.__dict__
