import React from 'react'
import "./SidebarChat.css";
import { Avatar } from '@material-ui/core';

function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div class="sidebarChat__info">
                <h2>Name</h2>
                <p>Most recent message</p>
            </div>
        </div>
    )
}

export default SidebarChat
