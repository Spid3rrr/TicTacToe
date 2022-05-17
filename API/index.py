from flask import Flask,request,jsonify
from flask_cors import CORS
from tictactoe import *


app = Flask(__name__)
CORS(app)


@app.route('/')
def home():
    return 'Wassup homie ? This is an empty endpoint unfortunately. Love you tho'

@app.route('/about')
def about():
    return 'This is my about page. Nothing much you need to know about me tho.'



@app.route('/tictactoe',methods = ['POST','GET'])
def tictactoe():
    if request.method == 'POST':
        json = request.get_json()
        response = handleNetwork(json['id'],json['move'])
        return response
    if request.method == 'GET':
        response = createGame()
        return response
    


