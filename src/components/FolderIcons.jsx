import React from 'react';
import Icon from './Icon';

class FolderIcons extends React.Component{
constructor(props) {
    super(props);
    this.state = {isActive: false};

    this.handleClick = this.handleClick.bind(this);
}

handleClick() {
    this.setState(prevState => ({
        isActive: !prevState.isActive
    }));
}
render() {
    return (
        <div>
            <div className={this.state.isActive ? 'Show' : 'Hide'} onClick={this.handleClick}> 
        <div className="Roww">
          <Icon active="Active"  labelClass={this.state.isActive ? 'LabelHide' : 'buttonLabel'}
          label="hello" iconColor="black" visible="IsVisible"/>
          <Icon active="Active"  labelClass={this.state.isActive ? 'LabelHide' : 'buttonLabel'} label="hello " iconColor="black" visible="IsVisible"/>
          <Icon active="Active" labelClass={this.state.isActive ? 'LabelHide' : 'buttonLabel'} label="hello " iconColor="black" visible="IsVisible"/>
        </div>
        <div className="Roww">
          <Icon active="Active" labelClass={this.state.isActive ? 'LabelHide' : 'buttonLabel'} label="hello" iconColor="black" visible="IsVisible"/>
          <Icon active="Active" labelClass={this.state.isActive ? 'LabelHide' : 'buttonLabel'} label="hello " iconColor="black" visible="IsVisible"/>
          <Icon active="Active" labelClass={this.state.isActive ? 'LabelHide' : 'buttonLabel'} label="hello " iconColor="black" visible="IsVisible"/>
        </div>
        <div className="Roww">
          <Icon active="Active" labelClass={this.state.isActive ? 'LabelHide' : 'buttonLabel'} label="hello" iconColor="black" visible="IsVisible"/>
          <Icon active="Active" labelClass={this.state.isActive ? 'LabelHide' : 'buttonLabel'} label="hello " iconColor="black" visible="IsVisible"/>
          <Icon active="Active" labelClass={this.state.isActive ? 'LabelHide' : 'buttonLabel'} label="hello " iconColor="black" visible="IsVisible"/>
        </div>

        </div>
        </div>
    );
}
}

export default FolderIcons;


