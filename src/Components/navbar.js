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
		return <div style={{
			backgroundImage: `url(${require('../Slices/nav_bar.png')})`
		}}>
			<img src={Back} alt="Back symbol"></img>
			<input type="search" value={this.props.searchText} onChange={this.props.onSearchChange} autoFocus/>
			<img src={Search} alt="Search symbol"></img>
		</div>
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);