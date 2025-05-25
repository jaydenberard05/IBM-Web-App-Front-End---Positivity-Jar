import { useState, useEffect, useRef } from "react";
import { useCookies } from "react-cookie";
import { useQuery } from "@apollo/client";

import { LOAD_FRIENDS } from "./gql/friends";

import Popup from "../components/Popup";

import "../style/friendsList.css";
import "../style/buttons.css";

function Friends() {
  const [ popupState, setPopupState ]  = useState(false);
  const [ cookies, setCookie ] = useCookies(['session']);
  
  function togglePopup() {
    setPopupState(!popupState);
  }

  const { data: friendsList, loading: loadingFriendsList, error: errorLoadingFriendsList, refetch } = useQuery(LOAD_FRIENDS, {
    variables: {
      id: cookies.id
    }
  })

 /* if (loadingFriendsList) return <p>Loading...</p>; 
  else if (errorLoadingFriendsList) return <p>Error :({JSON.stringify(errorLoadingFriendsList, null, 2)}</p>;
  else if (friendsList != undefined) {*/
    return (
      <>
        <Popup heading="Add Friend" visible={popupState} refetch={refetch}/>
        <div className="content friends flex row">
          <div className="friends-lists flex row">
              <div className="list">
                <div className="list-header flex row">
                  <h3 className="sub-header">Friends</h3>
                  <div className="button rounded" onClick={togglePopup}>Add</div>
                </div>
                {/*{
                  // map friends here
                   
                 } friendsList.GetAllFriends.map (friend => {
                    return (
                      <p>{friend.data}</p>

                    )                
                  })
                                                 
                } */}
                  <ul>
                    <li>Friend 1</li>
                    <li>Friend 2</li>
                    <li>Friend 3</li>
                  </ul>
              </div>
              <div className="friends-list">
                  <h3 className="sub-header">Requests</h3>
                  <ul>
                    <li>Friend 1</li>
                  </ul>
              </div>
          </div>
        </div>
  
      </>
    )
  }

//}

export default Friends;