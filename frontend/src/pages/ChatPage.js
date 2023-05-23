import { ChatStart } from "../componets/chat/ChatStart"
import { ChatEnd } from "../componets/chat/ChatEnd"
// import { Chats } from "./chat/Chats"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export function ChatPage() {

    console.log(" Chat page reloaded");
    let { username, conversation } = useParams()

    const [myChats, setMyChats] = useState([])

    useEffect(() => {
        console.log("myChats", myChats);
    }, [myChats])
    function websocketConn() {

        console.log(username.username, conversation.conversation);
        const chatSocket = new WebSocket(
            'ws://'
            + "127.0.0.1:8000"
            + '/ws/chat/'
            + username.username + "/" + conversation.conversation
            + '/'
        );
        chatSocket.onopen = function (e) {
            console.log("got connected");
            setMyChats([])

        }
        chatSocket.onmessage = function (e) {
            const data = JSON.parse(e.data);
            console.log(data);
            document.querySelector('#chat-log').value += (data.message + '\n');
            setMyChats(oldArray => [...oldArray, data])
        };

        chatSocket.onclose = function (e) {
            console.error('Chat socket closed unexpectedly');
        };

        document.querySelector('#exampleFormControlInput2').focus();
        document.querySelector('#exampleFormControlInput2').onkeyup = function (e) {
            if (e.keyCode === 13) {  // enter, return
                document.querySelector('#chat-message-submit').click();
            }
        };

        document.querySelector('#chat-message-submit').onclick = function (e) {
            const messageInputDom = document.querySelector('#exampleFormControlInput2');
            const message = messageInputDom.value;
            chatSocket.send(JSON.stringify({
                'message': message,
                'username': username
            }));
            messageInputDom.value = '';
        };
    }
    useEffect(() => {
        websocketConn()
    }, [conversation, username])
    return (

        <div className="col d-flex flex-column " >
            <div className="card" id="chat3" style={{ borderRadius: "15px" }}>
                <div className="card-body">



                        <div className="col-xl-12">

                            <div id="chat-log" className="pt-3 pe-3 overflow-auto" data-mdb-perfect-scrollbar="true"
                                style={{ position: "relative", height: "80vh" }}>

                                <ChatStart chat="hi" time="12" />
                                <ChatEnd chat="hii" time="12" />
                                <ChatStart chat="hiii" time="12" />
                                <ChatEnd chat="hiiii" time="12" />
                                <ChatStart chat="hi" time="12" />
                                <ChatEnd chat="hii" time="12" />
                                <ChatStart chat="hiii" time="12" />
                                <ChatEnd chat="hiiii" time="12" />

                                <ChatStart chat="hi" time="12" />
                                <ChatEnd chat="hii" time="12" />
                                <ChatStart chat="hiii" time="12" />
                                <ChatEnd chat="hiiii" time="12" />
                                {myChats && myChats.map(chat => {
                                    if (chat.user_message) {
                                        return <ChatEnd key={chat.id} chat={chat.message} time={chat.timestamp} />
                                    }
                                    return <ChatStart key={chat.id} chat={chat.message} time={chat.timestamp} />
                                })}
                            </div>

                            <div className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                                    alt="avatar 3" style={{ width: "45px", height: "100%" }} />
                                <input type="text" className="form-control form-control-lg" id="exampleFormControlInput2"
                                    placeholder="Type message" />
                                {/* <a className="ms-1 text-muted" href="#!">a<i className="fas fa-paperclip"></i></a>
                                                    <a className="ms-3 text-muted" href="#!">b<i className="fas fa-smile"></i></a> */}
                                {/* <a className="ms-3" href="#!"><i class="bi bi-send"></i></a> */}
                                <i id="chat-message-submit" class="bi bi-send"></i>
                            </div>

                        </div>


                </div>

            </div>
            
            </div>
            )
}