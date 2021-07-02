import React from "react"; 

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

                <div>
                <label for="registrant-first-name-input-manual">First Name</label>
                <input type="text" id="registrant-first-name-input-manual" />
                </div>

                <div>
                    <label for="registrant-last-name-input-manual">Last Name</label>
                    <input type="text" id="registrant-first-name-input-manual" />
                </div>

                <div id="date-container-manual">
                    <p>Enter the date you want displayed on the certificate:</p>
                   <label for="day-manual">on this Day</label>
                    <span><input type="text" id="day-manual" /></span>
                    <label for="month-manual">of the Month</label>
                    <span><input type="text" id="month-manual" /></span>
                    <label for="year-manual">of the Year</label>
                    <span><input type="text" id="year-manual" /></span>
                </div>
                <div id="witness-container-manual">
                    <p>Witnessed by</p>
                    <label for="witness-firstname-manual">First Name</label>
                    <input type="text" id="witness-firstname-manual" />
                    <label for="witness-lastname-manual">Last Name</label>
                    <input type="text" id="witness-lastname-manual" />
                </div>
            </form>
        </div>
    </div>
    );
}

export default Manual; 