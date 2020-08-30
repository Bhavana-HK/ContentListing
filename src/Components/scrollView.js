import React from 'react'
import { connect } from 'react-redux'
import { setSearchText } from '../Actions'
import { isEmpty } from 'lodash';

var mapStateToProps = (state) => {
	if (isEmpty(state.content.searchText))
		return { items: state.content.items, error: state.content.searchError }
	return { items: state.content.searchItems, error: state.content.searchError }
}

var mapDispatchToProps = (dispatch) => {
	return {
		dispatch,
		onSearchChange: ({ target }) => dispatch(setSearchText(target.value))
	}
}

class ScrollView extends React.Component {
	get mainPanel() {
		if (isEmpty(this.props.items))
			return "No results found for the given expression. Try another"
		return this.props.items.map((item, index) => {
			var image;
			try {
				image = require(`../Slices/${item['poster-image']}`);
			} catch (error) {
				image = require('../Slices/placeholder_for_missing_posters.png');
			}
			return <div key={"content-no-" + index}>
				<div><img src={image} alt={"poster-art-" + item.name} /></div>
				<div>{item.name}</div>
			</div>
		})
	}

	render() {
		if (this.props.error)
			return <div>{this.props.error}</div>
		return <div>{this.mainPanel}</div>
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ScrollView);