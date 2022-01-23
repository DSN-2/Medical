import React,{useState} from "react";
import { ChannelList, useChatContext } from "stream-chat-react";
import Cookies from "universal-cookie";

import ChannelSearch from "./ChannelSearch";
import HospitalIcon from "../assets/hospital.png";
import LogoutIcon from "../assets/logout.png";
import TeamChannelList from "./TeamChannelList";
import  TeamChannelPreview  from "./TeamChannelPreview";

const Sidebar = () => (
  <div className="channel-list__sidebar">
    <div className="channnel-list__sidebar__icon1">
      <div className="icon1_inner">
        <img src={HospitalIcon} alt="Hospital" width="30" />
      </div>
    </div>

    <div className="channnel-list__sidebar__icon2">
      <div className="icon1_inner">
        <img src={LogoutIcon} alt="Hospital" width="30" />
      </div>
    </div>
  </div>
);
const CompanyHeader = () => (
  <div className="channel-list__header">
    <p className="channel-list__header__text">Medical Pager</p>
  </div>
);
function ChannelListContainer() {
  return (
    <>
      <Sidebar />
      <div className="channel-list__list__wrapper">
        <CompanyHeader />
        <ChannelSearch />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}

          List={(listProps)=>(
            <TeamChannelList {...listProps}
            type="team"
            
            />
          )}
         Preview={(previewProps)=>(
            <TeamChannelPreview {...previewProps}
            team="team"
            />
         )}
        
        />
         <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}

          List={(listProps)=>(
            <TeamChannelList {...listProps}
            type="messaging"
            
            />
          )}
         Preview={(previewProps)=>(
            <TeamChannelPreview {...previewProps}
            
            type="messaging"
            />
         )}
        
        />
      </div>
    </>
  );
}

export default ChannelListContainer;
