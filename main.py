from flask import Flask, render_template, request
app = Flask(__name__)
import dbconnect

@app.route("/")
def block_list():
    return render_template("blocklist.html")
@app.route("/get_user_data")
def get_user_data():
    return dbconnect.read_user_data()

@app.route("/update_result",methods = ['POST'])
def update_result():
    userId = request.form['userid']
    return dbconnect.add_user_data(userId)

if __name__ == "__main__":
    app.run(host="127.0.0.1")