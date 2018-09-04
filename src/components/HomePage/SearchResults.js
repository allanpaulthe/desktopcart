import React, { Component } from 'react';
import SearchList from './SearchList';
import '../../assets/style/HomePage/search-results.less';

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="search-results">
                <SearchList />
            </div>
        );
    }
}

export default SearchResults;