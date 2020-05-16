import mysql.connector

mydb = mysql.connector.connect(user='muneef', password="password", host='127.0.0.1',database="users")
mycursor = mydb.cursor()
def read_user_data():
    result = ["<tr><th>userid</th><th>email</th><th>name</th><th>access count</th><th>blocked</th><th>reason</th><th>unblock</th><tr>"]
    mycursor.execute("select * from block_list")
    myresult = mycursor.fetchall()
    for x in myresult:
        if (x[4]=="TRUE"):
            result.append("<tr><td id=\"userid\">"+str(x[0])+ "</td><td>"+x[1]+"</td><td>"+x[2]+"</td><td>"+str(x[3])+"</td><td>"+x[4]+"</td><td>"+x[5]+"</td><td><button id=\"unblock\" onclick=\"update_result()\">unblock</button></td></tr>")
        else:
            result.append("<tr><td>"+str(x[0])+ "</td><td>"+x[1]+"</td><td>"+x[2]+"</td><td>"+str(x[3])+"</td><td>"+x[4]+"</td><td>"+x[5]+"</td></tr>")
    return "".join(result)

def add_user_data(userid):
    sql = "update block_list set blocked= 'FALSE' , reason = 'null' where user id=%s"
    val = userid
    mycursor.execute(sql, val)
    mydb.commit()
    return read_user_data()