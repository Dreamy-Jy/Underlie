from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
    return "Hello World"

# if __name__ == "__main__":
#     app.run()

from graphene import Schema, ObjectType, String
import re
from urllib.parse import urlparse

def isURLValid(url: str) -> bool:
    urlScheme, urlNetloc, urlPath, urlParams, urlQuery, fragment = urlparse(url)
    urlPat = r'^(?:http(s)?:\/\/)?[\w\.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&\'\(\)\*\+,;=.]+$'

    return bool(re.match(urlPat, url))

class Query(ObjectType):
    prediction = String(
                        url = String())

    def resolve_prediction(root, info, url):
        if not isURLValid(url):
            raise "False"
        
        return "True"


api_schema = Schema(query=Query)


results = api_schema.execute('{ prediction(url: "raw papi") }')
print(results.data["prediction"])