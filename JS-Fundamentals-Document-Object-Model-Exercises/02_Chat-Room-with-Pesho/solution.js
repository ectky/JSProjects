function solve() {
    document.getElementsByName("myBtn")[0].addEventListener("click", sendMyMessage);
    document.getElementsByName("peshoBtn")[0].addEventListener("click", sendPeshosMessage);

    function sendMyMessage(){
        let myMessageElement = document.getElementById("myChatBox");
        let myMessage = myMessageElement.value;
        let sender = "Me";
        if (myMessage) {
            saveMessage(sender, myMessage, "left");
        }

        myMessageElement.value = "";
    }


        function saveMessage(sender, message, align){
            let spanSenderElement = document.createElement("span");
            spanSenderElement.textContent = sender;
            let pMessageElement = document.createElement("p");
            pMessageElement.textContent = message;

            let divElement =  document.createElement("div");
            divElement.style.textAlign = align;
            divElement.appendChild(spanSenderElement);
            divElement.appendChild(pMessageElement);

            let chatChonologyElement =  document.getElementById("chatChronology");
            chatChonologyElement.appendChild(divElement);
        }

        function sendPeshosMessage(){
            let peshosMessageElement = document.getElementById("peshoChatBox");
            let peshosMessage = peshosMessageElement.value;
            let sender = "Pesho";
            if (peshosMessage) {
                saveMessage(sender, peshosMessage, "right");
            }

            peshosMessageElement.value = "";
        }
}