import React from 'react'
import { connect } from 'react-redux'
import { setSearchText } from '../Actions'

import Back from '../Slices/Back.png';
import Search from '../Slices/search.png';


var mapStateToProps = (state) => {
	return {
		searchText: state.content.searchText
	}
}

var mapDispatchToProps = (dispatch) => {
	return {
		dispatch,
		onSearchChange: ({ target }) => dispatch(setSearchText(target.value))
	}
}

class NavBar extends React.Component {
	render() {
		return <nav
			style={{ backgroundImage: `url(${require('../Slices/nav_bar.png')})` }}
			className="fixed w-full z-10 pin-t bg-fixed"	>
			<img
				src={Back}
				alt="Back symbol"
				className="inline-block" />
			<input
				type="search"
				className="inline-block"
				value={this.props.searchText}
				onChange={this.props.onSearchChange}
				autoFocus />
			<img
				className="inline-block"
				src={Search}
				alt="Search symbol" />
		</nav>
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);