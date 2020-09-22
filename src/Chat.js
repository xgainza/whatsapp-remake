import React from 'react'
import "./Chat.css"
import { Avatar, IconButton } from '@material-ui/core'
import { SearchOutlined, AttachFile, MoreVert } from '@material-ui/icons'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicNoneIcon from '@material-ui/icons/MicNone';

function Chat() {
    return (
        <div className="chat">
            <div class="chat__header">
                <Avatar />

                <div class="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen at...</p>
                </div>
                <div class="chat__headerRight">
                    <IconButton>  {/*Allows icon to become clickable*/}
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div class="chat__body">
                <p className="chat__message">
                   <span className="chat__name">Xabier</span> 
                    Hello. This is a test message.
                    <span class="chat__timestamp">
                        {new Date().toUTCString()} {/*find out what this means*/}
                    </span>
                </p>
                <p className="chat__message chat__receiver">
                   <span className="chat__name">Xabier</span> 
                    Hello. This is a test message.
                    <span class="chat__timestamp">
                        {new Date().toUTCString()} {/*find out what this means*/}
                    </span>
                </p>
            </div>
            <div class="chat__footer">
                <InsertEmoticonIcon />
                <form> {/*Adds Text box*/}
                    <input placeholder="Type a message"
                    type="text" /> {/*Adds Placeholder text until user starts typing */}
                    <button type="submit"> {/*Adds Button to send message*/}
                        Send a message
                    </button>
                </form>
                <MicNoneIcon />
            </div>
        </div>
    )
}

export default Chat
