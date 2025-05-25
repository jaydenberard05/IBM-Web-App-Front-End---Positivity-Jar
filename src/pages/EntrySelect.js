import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AddEntry from "./AddEntry"
import TestData from "./sampleJarData.json"

function EntrySelect({entrySelect, setEntrySelect}) {
    const [entries, setEntries] = useState("");
    const [ newJarAddEntry, setNewJarAddEntry ] = useState(false)
    const [ selectedJar, setSelectedJar ] = useState("Vacations");

    function toggleAddEntry() {
        setNewJarAddEntry(!newJarAddEntry)
    }


    if(entrySelect)
        return (
            <>                      
                                                {
                TestData.jars.map( test => {
                return (
                 //if (test.title == selectedJar) 
                    test.entries.map( entry => { 
                       return (
                       <div>
                        <form className="entry-description ">"{entry.message}"                               
                        </form>                       
                        </div>
                            )            
                          })
                         
                        )              
                    }) 
                }     
                <p className="dates-placeholder1">7/18/24</p>
                <p className="dates-placeholder2">5/24/24</p>
                <hr className="jars-divider"></hr>                                                                  
                <button className="add-entry"  onClick={toggleAddEntry}>Add Entry</button>    
                <button className="detele-entry">Delete Entry</button>
                <AddEntry addJarEntry={newJarAddEntry} setNewJarEntry={{toggleAddEntry}} />               
            </>    
        )

}

export default EntrySelect