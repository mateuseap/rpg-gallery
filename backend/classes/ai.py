class AI:
    def __init__(self, name, description):
        self.name = name
        self.description = description

    def to_dict(self):
        return self.__dict__
