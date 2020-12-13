import React from 'react';

const SearchBox = (props) => {
	return (
		<div className='col col-sm-8'>
			<input
				className='form-control'
				placeholder='Type to search movie...'
				onChange={(event) => props.setSearchValue(event.target.value)}
			></input>
		</div>
	);
};

export default SearchBox;
