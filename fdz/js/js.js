//sendMessage
 function sendMessage() {
    var chat_list_id = document.getElementById("chat_list");
    var lilayer = document.createElement("li");
    var con = document.getElementById("message_value").value;
    if (con.length > 0) {
        con = con.replace(/\n/g, "<br />");
        lilayer.innerHTML = "<div class='my_img'><img src='imgs/31.jpeg'/></div><div class='my_mes'><span class='my_name'>清阿</span><div class='send_right'>" + con + "<div class='arrow_right'></div></div></div><div style='clear:both;'></div>";
        // lilayer.style = "margin:30px";
//      lilayer.setAttribute("name","foot");
        chat_list_id.appendChild(lilayer);
        document.getElementById("message_value").value = "";
    }
 }