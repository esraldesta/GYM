import { useEffect, useState } from "react";
import NavItem from "./NavItem";
import axios from "axios"
import { useAuthContext } from "../../hooks/useAuthContext"
export default function PrivateNavItems(){

    const [conversations, setConversations] = useState(null)
    const [publicBotsConversations, setpublicBotsConversations] = useState(null)
    const { user } = useAuthContext()

    useEffect(() => {
        axios.get("chat/conversations/").then((res) => {
            console.log("conversations",res);
            setConversations(res.data)
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            console.log("requested for conversations");
        })
    }, [])

    // useEffect(() => {
    //     axios.get("chat/bots/").then((res) => {
    //         console.log("bots",res);
    //         setpublicBotsConversations(res.data)
    //     }).catch(error => {
    //         console.log(error);
    //     }).finally(() => {
    //         console.log("requested for conversations");
    //     })
    // }, [])
    return(
        <li className="accordion">
        <a href="#" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" className="collapsible">
            <span className="icon-home mr-3"></span>MyBots
        </a>
        <div id="collapseOne" className="collapse" aria-labelledby="headingOne">
            <div>
                <ul>
                    {conversations && conversations.map(conversation => (
                        <NavItem key={conversation.id} to={"/" + user.username + "/" + conversation.bot.name} name={conversation.bot.name} />
                    ))}
                    <li><a href="#">News</a></li>
                    <li><a href="#">Sport</a></li>
                    <li><a href="#">Health</a></li>
                </ul>
            </div>
        </div>
    </li>
    )
}



            {/* <li className="accordion">
                <a href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" className="collapsible">
                    <span className="icon-search2 mr-3"></span>Explore
                </a>

                <div id="collapseTwo" className="collapse" aria-labelledby="headingOne">
                    <div>
                        <ul>
                            <li><input type="text"/></li>
                            <li><a href="#">Interior</a></li>
                            <li><a href="#">Food</a></li>
                            <li><a href="#">Travel</a></li>
                        </ul>
                    </div>
                </div>

            </li> */}