import React from "react";
import "./style.css";

function Manual() {
    return(
    <div id="manual-wrapper">
        <div id="header-manual">
            <h2 class="header-manual">Enter the information into the form</h2>
            <form id="manual-entry-form">
                
                <div>
                    <label for="certificate-type-manual">Certificate of</label>
                    <select>
                      <option value="Acheivement">Attendance</option>
                      <option value="Acheivement">Achievement</option>
                      <option value="Acheivement">Completion</option>
                      <option value="Acheivement">Excellence</option>
                    </select>
                </div>
                  <br></br>
                <div>
                  <label for="registrant-first-name-input-manual" />
                  <input type="text" id="registrant-first-name-input-manual" placeholder="First Name"/>
                </div>

                <div>
                    <label for="registrant-last-name-input-manual" />
                    <input type="text" id="registrant-first-name-input-manual" placeholder="Last Name" />
                </div>

                <div>
                    <label for="registrant-last-name-input-manual" />
                    <input type="text" id="registrant-first-name-input-manual" placeholder="Title" />
                </div>

                <div id="date-container-manual">
                    <h2>Enter the date you want displayed on the certificate:</h2>
                    <label for="day-manual" ><h3>Date fo the certificate</h3></label>
                
                    <input type="date" id="day-manual" />
                </div>
                <br></br>
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
    );
}

export default Manual; 