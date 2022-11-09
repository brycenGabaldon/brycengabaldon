import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

const folderIcons = props => {
    return (
        <div className="ContainerDock">
        <div className="Roww">
        
          <Icon active="Active" labelClass="buttonLabel" label="hello" iconColor="black" visible="IsVisible"/>
          <Icon active="Active" labelClass="buttonLabel" label="hello " iconColor="black" visible="IsVisible"/>
          <Icon active="Active" labelClass="buttonLabel" label="hello " iconColor="black" visible="IsVisible"/>
          <Icon active="Active" labelClass="buttonLabel" label="hello " iconColor="black" visible="IsVisible"/>
        
        </div>

        
</div>
    );
};

folderIcons.propTypes = {
    id: PropTypes.string
};

export default folderIcons;