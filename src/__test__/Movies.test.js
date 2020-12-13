import Enzyme,{configure, shallow} from 'enzyme';

import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import React from 'react';
import {Movie} from '../components/movie/Movie';
//import MovieTile from './MovieTile';

import {movieList} from '../testData/movies';

configure({adapter: new Adapter});

describe('<Movie/>', () => {
	let wrapper = null;

	beforeEach(() => {
		wrapper = shallow(<Movie/>);
	});

	it('Renders "no items in your list" if movie list length is 0', () => {
		
		wrapper.setProps({
			movieList : []
		})
		expect(wrapper.contains(<div className='col text-center lead'>Movie list is empty</div>)).toEqual(true);

	});


	it('Renders a movie list if movie list length > 0', () => {

		wrapper.setProps({
			movieList: movieList
		})

		expect(wrapper.find('.col-sm-6')).toHaveLength(3);

	});

});