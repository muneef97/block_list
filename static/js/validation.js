function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;


}

function httpPost(theUrl){
    var xhr = new XMLHttpRequest();
    xhr.open("POST", theUrl, false);
    xhr.onload = // something
    document.getElementById("unblock").addEventListener("click",
        function() {xhr.send('userid='+document.getElementById("userid"))},
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