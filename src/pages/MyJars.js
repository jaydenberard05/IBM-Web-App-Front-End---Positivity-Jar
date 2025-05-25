import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useCookies } from "react-cookie";
import { LOAD_JARS, CREATE_JAR } from './gql/Jars'
import Popup from "../components/Popup";
import "../style/jars.css";


function MyJars() {
    const [ popupState, setPopupState ]  = useState(false);
    const [ openJar, setOpenJar ] = useState(-1);
    const [ cookies, setCookie ] = useCookies(['session']);
    
    const { data: jarData, loading: loadingJarData, error: errorLoadingJarData, refetch } = useQuery(LOAD_JARS, {
        variables: {
            id: cookies.id
        }
    })


    function togglePopup() {
        setPopupState(!popupState);
    }

    function setJar(jar) {
        setOpenJar(jar);
    }
    
    if (loadingJarData) return <p>Loading...</p>; 
    else if (errorLoadingJarData) return <p>Error :({JSON.stringify(errorLoadingJarData, null, 2)}</p>;
    else if (jarData != undefined) {

        /*
            Map jar data in list and jar-view. Clicking on a jar in a 
            list will set the selected jar index to its proper value,
            and in jar-view the jar of the given index should be displayed.
        */

        return (       
            <div className="content flex row jars">
                <div className="list">
                    <div className="list-header flex row">
                        <h3 className="sub-header">Jars</h3> 
                        <div className="button rounded" onClick={togglePopup}>Create</div>
                    </div>
                    {
                        // map list of jars here using li elements with onclick function setJar(jar.id)
                        jarData.LoadJars.map ( jar => {
                        return (
                            <li onClick={() => { setJar(jar.id)}}>{jar.title}</li>
                    
                            )                                      
                        })                 
                    } 
                    <li onClick={() => { setJar(0) }}>Jar 1</li>
                    <li onClick={() => { setJar(1) }}>Jar 2</li>
                    <li onClick={() => { setJar(2) }}>Jar 3</li>
                </div>
                <div className="jar-view">
                    {
                        // map jar data (jarData[openJar])
                        <h2>{jarData.loadJars[openJar].title}</h2>
                    }
                </div>
                        
                <Popup header="Create Jar" visible={popupState} refetch={refetch}/>
            </div>
        );
    //}

    
     
}
}
export default MyJars;
