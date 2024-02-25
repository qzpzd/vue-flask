from flask import Flask

app = Flask(__name__,
            template_folder="D:/wendang/vscode/my_projects/flask_vue_wordcloud/word-cloud/frontend/dist",
            static_folder="D:/wendang/vscode/my_projects/flask_vue_wordcloud/word-cloud/frontend/dist/static")

from app import routes

