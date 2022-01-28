import React,{useState} from "react";
import "./App.css";
import 'stream-chat-react/dist/css/index.css';
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";
import ChannelListContainer from "./components/ChannelListContainer";
import ChannelContainer from "./components/ChannelContainer";
import Auth from "./components/Auth";
const cookies = new Cookies();
const apikey = 'gcdhu7bwr6t6';
const authToken = cookies.get("token");
const client = new StreamChat(apikey);
if (authToken) {
  client.connectUser({
    id: cookies.get("userId"),
    name: cookies.get("username"),
    fullName: cookies.get("fullName"),
    image: cookies.get("avatarURL"),
    hashedPassword: cookies.get("hashedPassword"),
    phoneNumber: cookies.get("phoneNumber", ),
  }, authToken);
}
const App=()=> {
  const [createType, setCreateType] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  if (!authToken) return <Auth />;
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer
        isCreating={isCreating}
        setIsCreating={setIsCreating}
        setCreateType={setCreateType}
        setIsEditing={setIsEditing}
        
        
        />
        <ChannelContainer
        isCreating={isCreating}
        setIsCreating={setIsCreating}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        createType={createType}
        
        
        
        />
        
      </Chat>
    </div>
  );
}

export default App;
