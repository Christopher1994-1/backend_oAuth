from flask import Flask, render_template, request, jsonify, url_for
import datetime



app = Flask(__name__)



@app.route('/')
def index():
    dt = str(datetime.datetime.now()).split(' ')[0].split('-')[0]
    
    return render_template('index.html', year=dt)





@app.route('/checking_backend_SQL', methods=["POST"])
def checking_backend_SQL():
    email = request.form.get('email')
    password = request.form.get('pass')
    
    
    if email == "test@testmail.com" and password == 'testpassword098':
        response_data = {"email": 'true', 'pass': 'true'}
        
    elif email != "test@testmail.com" and password == "testpassword098":
        response_data = {"email": 'false', 'pass': 'true'}
    
    elif email == "test@testmail.com" and password != "testpassword098":
        response_data = {"email": 'true', 'pass': 'false'}
    
    elif email != "test@testmail.com" and password != "testpassword098":
        response_data = {"email": 'false', 'pass': 'false'}
        
        
        
    return jsonify(response_data)
    
    
    
@app.route('/submission_successful')
def submission_successful():
    return render_template('successful.html')
    



@app.route('/how_it_works')
def howsItWork():
    return render_template('howsitwork.html')


if __name__ == "__main__":
    app.run(debug=True)