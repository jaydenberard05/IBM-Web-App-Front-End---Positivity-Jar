import AddFriendPopup from "./AddFriendPopup";
import CreateJarPopup from "./CreateJarPopup";

function Popup({ header, visible, refetch }) {
    var style = visible ? "form centered popup visible" : "form centered popup";
    
    if (header == "Create Jar") {
        return (
            <CreateJarPopup style={style} refetch={refetch} />
        )
    } else {
        return (
            <AddFriendPopup style={style} refetch={refetch} />
        )
    }
}

export default Popup;
