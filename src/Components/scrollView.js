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

const Card = (props) => {
	return <div className="max-w-sm">
		<div><img
			src={props.image}
			alt={"poster-art-" + props.name}
			className="w-full"
		/></div>
		<div className="text-gray-400 font-light text-left sm:text-lg md:text-5xl pt-6 pb-90px">{props.name}</div>
	</div>
}

class ScrollView extends React.Component {
	get mainPanel() {
		if (isEmpty(this.props.items))
			return <div
				className="text-center text-5xl mx-auto mt-32 my-auto">
				No results found for the given expression. Try another
				</div>
		return this.props.items.map((item, index) => {
			var image;
			try {
				image = require(`../Slices/${item['poster-image']}`);
			} catch (error) {
				image = require('../Slices/placeholder_for_missing_posters.png');
			}
			return <Card name={item.name} image={image} key={index} />
		})
	}

	render() {
		if (this.props.error)
			return <div>{this.props.error}</div>
		return <div>
			<div className=""></div>
			<div className="grid grid-cols-3 gap-x-30px pt-228px">
				{this.mainPanel}
			</div>
		</div>
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ScrollView);