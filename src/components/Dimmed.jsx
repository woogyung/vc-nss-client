import React from 'react';

export default class Dimmed extends React.Component {
	render(){
		return <div className="dimmed" style={ this.props.style }></div>
	}
}