import React from 'react'
import { connect } from 'react-redux'
import '../Styles/slack.css'
import { selectConversation, } from '../Action'

var mapStateToProps = (state) => {
	return {
		slack: state.slack
	}
}

var ChannelComponent = (props) => {
	return (

		// <ul className="nav navbar-nav">
		//     {props.slack.channels.map((channel) =>
		//         <li key={channel.channelId} value={channel.channelId} className="nav-item" onClick={props.onClick}>
		//             {'# ' + channel.channelName}
		//         </li>)}
		// </ul>
		<ul className="list-unstyled components">
			<p className="font-weight-bold">Channels</p>
			{props.slack.channels.map((channel) =>
				<li key={channel.channelId} value={channel.channelId} className="nav-item" onClick={props.onClick}>
					{'# ' + channel.channelName}
				</li>)}
		</ul>

	)
}

var DirectComponent = (props) => {
	return (
		<ul className="list-unstyled components">
			<p className="font-weight-bold">Direct</p>
			{props.slack.people.map((person) =>
				<li key={person.id} value={person.id} className="nav-item" onClick={props.onClick}>
					{person.name}
				</li>)}
		</ul>
	)
}

var mapDispatchToProps = (dispatch) => {
	return {
		dispatch,
		onChannelSelect: ({ target }) => { dispatch(selectConversation('channel', target.value)) },
		onDirectSelect: ({ target }) => { dispatch(selectConversation('people', target.value)) },
	}
}

class SideBarComponent extends React.Component {
	render() {
		return (
			// <nav className="navbar flex-column navbar-dark bg-dark fixed-top"  >
			//     <div className="container-fluid">
			//     <div className="navbar-header">
			//         <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
			//             <span className="icon-bar"></span>
			//             <span className="icon-bar"></span>
			//             <span className="icon-bar"></span>
			//         </button>
			//         <a className="navbar-brand" href="#">Simplified Slack</a>
			//         </div>
			//         <div className="collapse navbar-collapse" id="myNavbar">
			//             <div>
			//                 <span><h6 className="font-weight-bold">Channels</h6></span>
			//                 <ChannelComponent slack={this.props.slack} onClick={this.props.onChannelSelect} />
			//             </div>
			//             <div>
			//                 <span><h6 className="font-weight-bold">Direct Messages</h6></span>
			//                 <DirectComponent slack={this.props.slack} onClick={this.props.onDirectSelect} />
			//             </div>
			//         </div>
			//     </div>
			// </nav>
			<nav id="sidebar"  >
				<div className="container-fluid">

					<div className="sidebar-header" href="#"><h3>Simplified Slack</h3></div>

					<ChannelComponent slack={this.props.slack} onClick={this.props.onChannelSelect} />
					<DirectComponent slack={this.props.slack} onClick={this.props.onDirectSelect} />

				</div>
			</nav>


		)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(SideBarComponent);