from flask import render_template
from flask import request, jsonify
from app import app
from wordcloud import WordCloud
import io
import base64
import os

# 真正调用词云库生成图片
def get_word_cloud(text):
    font = "./arial.ttf"
    pil_img = WordCloud(width=500, height=500, background_color="white", font_path=font).generate(text=text).to_image()

    # pil_img = WordCloud(width=800, height=300, background_color="white").generate(text=text).to_image()
    # 生成并保存为 PNG 图片文件
    pil_img.save("wordcloud.png", "PNG")
    img = io.BytesIO()
    pil_img.save(img, "PNG")
    img.seek(0)
    img_base64 = base64.b64encode(img.getvalue()).decode()
    # print(img_base64)
    return img_base64, os.path.abspath("wordcloud.png")


# 主页面
@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')


# 生成词云图片接口，以base64格式返回
@app.route('/word/cloud/generate', methods=["POST"])
def cloud():
    text = request.json.get("word")
    # res = get_word_cloud(text)
    res, local_path = get_word_cloud(text)

    return res
