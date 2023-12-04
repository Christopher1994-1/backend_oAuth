from flask import Flask, render_template, request, jsonify
import datetime



app = Flask(__name__)



@app.route('/')
def index():
    dt = str(datetime.datetime.now()).split(' ')[0].split('-')[0]
    
    return render_template('index.html', year=dt)





@app.route('/checking_backend_SQL', methods=["POST"])
def checking_backend_SQL():
    email = request.form.get('email')
    if email == "test@testmail.com":
        response_data = {"data": 'true'}
    else:
        response_data = {"data": 'false'}
        
    return jsonify(response_data)
    
    



if __name__ == "__main__":
    app.run(debug=True)