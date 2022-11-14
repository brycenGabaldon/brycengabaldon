import React, { useState, useEffect } from "react";
import FolderIcons from "../folderIcons";

export default function FolderOverlay() {
    const [overlayDataState, setOverlayDataState] = useState(false);


    function User({ name }) {
        useEffect(() => {
            setOverlayDataState(channelNameData)
        }, [FolderOpen]);
    return 
<>
<FolderIcons overlayStatus={Overlay} onChange={handleStatusChange}/>


</>
    ;
  }
  


/* function useFolderStatus(folderState) {
    const [isOnline, setIsOnline] = useState(null);
  
    // ...
  
    return isOnline;
  }

function FriendStatus(props) {
    const isOpen = useFriendStatus(props.folder.folderState);
    if (isOpen === null) {
      return 'Loading...';
    }
    return isOnline ? 'openFolder' : 'closedFolder';
  }

  function FriendListItem(props) {
    const isOnline = useFriendStatus(props.friend.id);
    return (
      <li style={{ color: isOnline ? 'green' : 'black' }}>
        {props.friend.name}
      </li>
    );
  }

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });


  function FolderStatus(input) {
<FolderStatus thing={Output} />


    const [isOnline, setIsOnline] = useState(null);
    useEffect(() => {    function handleStatusChange(status) {
        setIsOnline(status.isOnline);
      }
  
      ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
      return () => {
        ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
      };
    });
    // ...
  }

  const [folderOpen, setFolderOpen] = useState(false);

  useEffect(() => {    function handleStatusChange(status) {
      setFolderOpen(status.folderOpen);
    }

  app ()
    components (overlayActive)
    (state to put overlay behind opened folder)
        folders (FolderActive/ OverlayActive)
        (process data, save important data like apps and positions, map apps, ) 
        (state of folder to change folder position)
            apps (FolderActive)
            (state of folder to know app sizing)
            (type of container the icons will go in)
        dock
        (process data, save important data like apps and positions, map apps, ) 
            apps  */