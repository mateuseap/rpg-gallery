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
        domain=None,
        appearance=None,
        motivations=None,
        objectives=None,
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
        self.domain = domain
        self.appearance = appearance
        self.motivations = motivations
        self.objectives = objectives
        self.personality = personality
        self.strengths = strengths
        self.weaknesses = weaknesses

    def to_dict(self):
        return self.__dict__
