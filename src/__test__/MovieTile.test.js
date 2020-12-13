import Enzyme,{configure, shallow} from 'enzyme';

import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import React from 'react';

import {MovieTile} from '../components/movie/MovieTile';
import {movieTileList} from '../testData/movies';

configure({adapter: new Adapter});

describe('<MovieTile/>', () => {
	let wrapper = null;
    const playVideo = jest.fn();
	beforeEach(() => {
		wrapper = shallow(<MovieTile/>);
	});

	it('Renders "no items in your list" if favourite list length is 0', () => {
		
		wrapper.setProps({
            movies : [],
            playVideo:playVideo
		})
		expect(wrapper.contains(<div className='col text-center lead'>Your list is empty</div>)).toEqual(true);

	});


	it('Renders a favourite movie list list if movie list length > 0', () => {

		wrapper.setProps({
			movies : movieTileList,
            playVideo:playVideo
		})

		expect(wrapper.find('.col-sm-6')).toHaveLength(2);

	});

});