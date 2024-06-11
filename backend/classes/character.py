class Character:
    def __init__(
        self,
        name,
        description,
        imageUrl=None,
        background=None,
        race=None,
        char_class=None,
        age=None,
        height=None,
        weight=None,
        realm=None,
        domain=None,
        appearance=None,
        motivations=None,
        objectives=None,
        personality=None,
        strengths=None,
        weaknesses=None,
        habilities=None,
    ):
        self.name = name
        self.description = description
        self.imageUrl = imageUrl
        self.background = background
        self.race = race
        self.char_class = char_class
        self.age = age
        self.height = height
        self.weight = weight
        self.realm = realm
        self.domain = domain
        self.appearance = appearance
        self.motivations = motivations
        self.objectives = objectives
        self.personality = personality
        self.strengths = strengths
        self.weaknesses = weaknesses
        self.habilities = habilities

    def to_dict(self):
        return self.__dict__
