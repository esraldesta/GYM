import { useEffect, useState } from "react";
import NavItem from "./NavItem";
import axios from "axios"
import { useAuthContext } from "../../hooks/useAuthContext"
export default function PublicNavItems(){


    const [publicBotsConversations, setpublicBotsConversations] = useState(null)
    const { user } = useAuthContext()

    useEffect(() => {
        axios.get("chat/bots/").then((res) => {
            console.log("bots",res);
            setpublicBotsConversations(res.data)
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            console.log("requested for conversations");
        })
    }, [])
    return(
        <li className="accordion">
        <a href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" className="collapsible">
            <span className="icon-home mr-3"></span>Global
        </a>
        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo">
            <div>
                <ul>
                    {publicBotsConversations && publicBotsConversations.map(conversation => (
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


