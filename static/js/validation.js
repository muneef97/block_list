function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;


}
var userid ;
function httpPost(theUrl){

    var index, table = document.getElementById("tablevalues");

    var xhr = new XMLHttpRequest();
    xhr.open("POST", theUrl, false);
    xhr.onload = // something
    document.getElementById("unblock").addEventListener("click",
        function() {
                        for (var i = 0; i < table.rows.length; i++){
                            table.rows[i].onclick = function()
                            {
                                index = this.rowIndex;
                                userid = parseInt(tablevalues.rows[index].cells[0].innerHTML);
                                console.log(userid)
                                xhr.send('userid');
                            };
                        }},
        false
    );
}

function getUserData(){
document.getElementById('tablevalues').innerHTML += httpGet("/get_user_data");
}

function update_result(){
httpPost("/update_result");
}

window.onload=getUserData

function unblock(){
    document.getElementById('tablevalues').innerHTML
}