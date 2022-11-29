import React, {children, useState} from 'react';


const iconStyle = {
    height: "100px",
    width: "100px",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    borderRadius: "20%",
    float: "left"
}
const iconFolderStyle = {
    height: "25px",
    width: "25px",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    borderRadius: "20%",
    float: "left"
}

const iconImageStyle = {
    height: "72px",
    width: "72px",
    background: "black",
    borderRadius: "20%"

}
const FolderIconImageStyle = {
    height: "16px",
    width: "16px",
    background: "black",
    borderRadius: "20%"

}
const iconLabel = "Button"

const iconLabelStyle = {
color: "black",
fontSize: "14px",
lineHeight: "14px"
}
const FolderIconLabelStyle = {
    color: "black",
    fontSize: "3.5px",
    lineHeight: "3.5px"
    }

    const [isFolder, setIsFolder] = useState(true)

const Icon = () => {
    return (
        <div className="Icon1" 
        style={isFolder ? "IconStyle" : "FolderIconStyle"}>
        <div className={isFolder ? "IconImage" : "FolderIconImage"}
        style={isFolder ? "IconImageStyle" : "FolderIconImageStyle"}>
          {children}
            
            </div>
            <span style={isFolder ? "IconLabelStyle" : "FolderIconLabelStyle"}>{iconLabel}</span>
        </div>
    );
};

export default Icon;