import React from 'react'; 
//controlled or uncontrolled?
function Upload(props) {
    return(
        <div id="upload-form-wrapper">
            <div id="header-upload">
                <h2 className="header-upload">Upload File</h2>
            </div>
            <form action="/" enctype="multipart/form-data" method='POST' className="choose-file">
                <input 
                type="file" 
                name="file-to-upload">
                </input>

                <input type="submit" 
                value="Upload" 
                className="upload-btn">
                </input>
            </form>
        </div>
    ); 
}
export default Upload; 