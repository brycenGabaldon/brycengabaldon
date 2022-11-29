import React, {children} from 'react';


const folderStyle = {
    height: "100px",
    width: "100px",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    borderRadius: "20%",
    float: "left",
    opacity: "0.5"
}

const folderImageStyle = {
    height: "70px",
    width: "70px",
    background: "white",
    borderRadius: "20%"

}
const folderLabel = 
"Folder"

const folderLabelStyle = {
color: "black",
fontSize: "14px",
lineHeight: "14px"
}


const Folder = () => {
    return (
        <div className="Icon1" 
        style={folderStyle}>
        <div className='IconImage'
        style={folderImageStyle}>
          {children}
            
            </div>
            <span style={folderLabelStyle}>{folderLabel}</span>
        </div>
    );
};

export default Folder;