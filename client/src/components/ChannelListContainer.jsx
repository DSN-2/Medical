import React,{useState} from "react";
import { ChannelList, useChatContext } from "stream-chat-react";
import Cookies from "universal-cookie";

import ChannelSearch from "./ChannelSearch";
import HospitalIcon from "../assets/hospital.png";
import LogoutIcon from "../assets/logout.png";
import video from  "../assets/video.jpeg";
import TeamChannelList from "./TeamChannelList";
import  TeamChannelPreview  from "./TeamChannelPreview";
// const cookies = new Cookies();
// const Sidebar = ({logout}) => (
//   <div className="channel-list__sidebar">
//     <div className="channel-list__sidebar__icon1">
//       <div className="icon1__inner">
//         <img src={HospitalIcon} alt="Hospital" width="30" />
//       </div>
//     </div>

//     <div className="channel-list__sidebar__icon2">
//       <div className="icon1__inner" onClick={logout}>
//         <img src={LogoutIcon} alt="Logout" width="30" />
//       </div>
//     </div>
//   </div>
// );
// const CompanyHeader = () => (
//   <div className="channel-list__header">
//     <p className="channel-list__header__text">Medical Pager</p>
//   </div>
// );
// const customChannelTeamFilter = (channels) => {
//   return channels.filter((channel) => channel.type === 'team');
// }

// const customChannelMessagingFilter = (channels) => {
//   return channels.filter((channel) => channel.type === 'messaging');
// }
// function ChannelListContent({ 
//     isCreating,setIsCreating,setCreateType,setIsEditing
// }) {
  
//   const { client } = useChatContext();
//     const logout = () => {
//         cookies.remove("token");
//         cookies.remove('userId');
//         cookies.remove('username');
//         cookies.remove('fullName');
//         cookies.remove('avatarURL');
//         cookies.remove('hashedPassword');
//         cookies.remove('phoneNumber');

//         window.location.reload();
//     }
//     const filters = { members: { $in: [client.userID] } };
//   return (
//     <>
//       <Sidebar logout={logout}/>
//       <div className="channel-list__list__wrapper">
//         <CompanyHeader />
//         <ChannelSearch />
//         <ChannelList
//           filters={filters}
//           channelRenderFilterFn= {customChannelTeamFilter}

//           List={(listProps)=>(
//             <TeamChannelList {...listProps}
//             type="team"
//             isCreating={isCreating}
//             setIsCreating={setIsCreating}
//             setCreateType={setCreateType}
//             setIsEditing={setIsEditing}
            
//             />
//           )}
//          Preview={(previewProps)=>(
//             <TeamChannelPreview {...previewProps}
//             team="team"
            
//             />
//          )}
        
//         />
//          <ChannelList
//           filters={ filters}
//           channelRenderFilterFn={
//             customChannelMessagingFilter
//           }

//           List={(listProps)=>(
//             <TeamChannelList {...listProps}
//             type="messaging"
//             isCreating={isCreating}
//             setIsCreating={setIsCreating}
//             setCreateType={setCreateType}
//             setIsEditing={setIsEditing}
            
//             />
//           )}
//          Preview={(previewProps)=>(
//             <TeamChannelPreview {...previewProps}
            
//             type="messaging"
//             />
//          )}
        
//         />
//       </div>
//     </>
//   );
// }
// const ChannelListContainer = ({ setCreateType, setIsCreating, setIsEditing }) => {
//   const [toggleContainer, setToggleContainer] = useState(false);

//   return (
//       <>
//           <div className="channel-list__container">
//             <ChannelListContent 
//               setIsCreating={setIsCreating} 
//               setCreateType={setCreateType} 
//               setIsEditing={setIsEditing} 
//             />
//           </div>

//           <div className="channel-list__container-responsive"
//               style={{ left: toggleContainer ? "0%" : "-89%", backgroundColor: "#8eb2f0"}}
//           >
//               <div className="channel-list__container-toggle" onClick={() => setToggleContainer((prevToggleContainer) => !prevToggleContainer)}>
//               </div>
//               <ChannelListContent 
//               setIsCreating={setIsCreating} 
//               setCreateType={setCreateType} 
//               setIsEditing={setIsEditing}
//               setToggleContainer={setToggleContainer}
//             />
//           </div>
//       </>
//   )

// }
// export default ChannelListContainer;


const cookies = new Cookies();

const SideBar = ({ logout ,videoClick}) => (
    <div className="channel-list__sidebar">
        <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
                <img src={HospitalIcon} alt="Hospital" width="30" />
            </div>


        </div>
        <div className="channel-list__sidebar__icon2">
            <div className="icon1__inner" onClick={logout}>
                <img src={LogoutIcon} alt="Logout" width="30" />
            </div>
        </div>


        <div className="channel-list__sidebar__icon2">
            <div className="icon1__inner" onClick={videoClick}>
                <img src={video} alt="Logout" width="30" />
            </div>
        </div>




    </div>
);

const CompanyHeader = () => (
    <div className="channel-list__header">
        <p className="channel-list__header__text">Medical Pager</p>
    </div>
)

const customChannelTeamFilter = (channels) => {
    return channels.filter((channel) => channel.type === 'team');
}

const customChannelMessagingFilter = (channels) => {
    return channels.filter((channel) => channel.type === 'messaging');
}

const ChannelListContent = ({ isCreating, setIsCreating, setCreateType, setIsEditing, setToggleContainer }) => {
    const { client } = useChatContext();

    const logout = () => {
        cookies.remove("token");
        cookies.remove('userId');
        cookies.remove('username');
        cookies.remove('fullName');
        cookies.remove('avatarURL');
        cookies.remove('hashedPassword');
        cookies.remove('phoneNumber');

        window.location.reload();
    }

    const videoClick=()=>{
        window.open('https://video-chat-2022.netlify.app/')
    }

    const filters = { members: { $in: [client.userID] } };

    return (
        <>
            <SideBar logout={logout} 
            
            videoClick={videoClick}
            
            />
            <div className="channel-list__list__wrapper">
                <CompanyHeader />
                <ChannelSearch setToggleContainer={setToggleContainer} />
                <ChannelList 
                    filters={filters}
                    channelRenderFilterFn={customChannelTeamFilter}
                    List={(listProps) => (
                        <TeamChannelList 
                            {...listProps}
                            type="team"
                            isCreating={isCreating}
                            setIsCreating={setIsCreating}
                            setCreateType={setCreateType} 
                            setIsEditing={setIsEditing}
                            setToggleContainer={setToggleContainer}
                        />
                    )}
                    Preview={(previewProps) => (
                        <TeamChannelPreview 
                            {...previewProps}
                            setIsCreating={setIsCreating}
                            setIsEditing={setIsEditing}
                            setToggleContainer={setToggleContainer}
                            type="team"
                        />
                    )}
                />
                <ChannelList 
                    filters={filters}
                    channelRenderFilterFn={customChannelMessagingFilter}
                    List={(listProps) => (
                        <TeamChannelList 
                            {...listProps}
                            type="messaging"
                            isCreating={isCreating}
                            setIsCreating={setIsCreating}
                            setCreateType={setCreateType} 
                            setIsEditing={setIsEditing}
                            setToggleContainer={setToggleContainer}
                        />
                    )}
                    Preview={(previewProps) => (
                        <TeamChannelPreview 
                            {...previewProps}
                            setIsCreating={setIsCreating}
                            setIsEditing={setIsEditing}
                            setToggleContainer={setToggleContainer}
                            type="messaging"
                        />
                    )}
                />
            </div>
        </>
    );
}

const ChannelListContainer = ({ setCreateType, setIsCreating, setIsEditing }) => {
    const [toggleContainer, setToggleContainer] = useState(false);

    return (
        <>
            <div className="channel-list__container">
              <ChannelListContent 
                setIsCreating={setIsCreating} 
                setCreateType={setCreateType} 
                setIsEditing={setIsEditing} 
              />
            </div>

            <div className="channel-list__container-responsive"
                style={{ left: toggleContainer ? "0%" : "-89%", backgroundColor: "#005fff"}}
            >
                <div className="channel-list__container-toggle" onClick={() => setToggleContainer((prevToggleContainer) => !prevToggleContainer)}>
                </div>
                <ChannelListContent 
                setIsCreating={setIsCreating} 
                setCreateType={setCreateType} 
                setIsEditing={setIsEditing}
                setToggleContainer={setToggleContainer}
              />
            </div>
        </>
    )

}

export default ChannelListContainer;