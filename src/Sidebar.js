import React from 'react'
import "./Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons"
import SidebarChat from './SidebarChat';

function Sidebar() {
    return (
        <div className="sidebar">
            <div class="sidebar__header">
                <Avatar src='https://media-exp1.licdn.com/dms/image/C4D03AQEKQ8waYUKZ6g/profile-displayphoto-shrink_200_200/0?e=1604534400&v=beta&t=GDKMHno0vSJBIB-cdUQbxbauaTfvhJRU-oh2UVbQ1vA'/>

                <div class="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton><IconButton>
                        <MoreVertIcon />
                    </IconButton>
                    
                </div>
            </div>
            <div class="sidebar__search">
                <div class="sidebar__searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or start new chat" type="text" />
                </div>
            </div>
            <div class="sidebar__chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar
