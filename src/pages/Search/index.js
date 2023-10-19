import React from 'react';
import './search.css'
import IconSearch from '~/Icon/IconSearch';

function Search() {
    return (
        <div id='search'>
            <input placeholder={'Nhập nội dung tìm kiếm'} className='textInput' />
            <div className='icon'>
                <IconSearch />
            </div>
        </div>
    );
}

export default Search;
