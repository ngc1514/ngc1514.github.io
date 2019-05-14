# import the Flask class from the flask module
from flask import Flask, render_template

# create the application object
app = Flask(__name__)

# use decorators to link the function to a url
@app.route('/')
def show_index():
    return render_template('index.html') # render a template

@app.route('/welcome')
def show_welcome():
    return render_template('welcome.html') # render a template

@app.route('/hi')
def show_text():
    return 'hi there'

# @app.route('/')
# def host_static_css():
# 	return send_from_directory('/static', 'style.css')

# start the server with the 'run()' method
if __name__ == '__main__':
    app.run(debug=True, host='192.168.1.209')