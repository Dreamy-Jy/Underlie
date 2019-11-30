from graphene import String, Field

class PredictionAPI(graphene.ObjectType):
    prediction = String(link = String)
    metaData = Field()

    def resolve_prediction(self, info, link):
        return "True"