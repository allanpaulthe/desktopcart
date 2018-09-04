import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { setSearchString } from '../../actions/userActions';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchOn: false,
            string: ''
        };
    }
    toggleSearch() {
        this.setState({
            searchOn: !this.state.searchOn
        })
    }
    onSearch(e) {
        this.setState({
            string: e.target.value
        })
        if (e.target.value.length === 1 && this.props.history.location.pathname !== "/search") {
            this.props.history.push('/search');
        }
        else if (e.target.value.length === 0) {
            this.props.history.goBack();
        }
        this.props.setSearchString(e.target.value);
    }
    onFocus(e) {
        if (e.target.value.length >= 1 && this.props.history.location.pathname !== "/search") {
            this.props.history.push('/search');
        }
        this.props.setSearchString(e.target.value);
    }
    render() {
        const className = this.state.searchOn ? 'show-search' : '';
        return (
            <div className="searching">
                <input type="text" placeholder="SEARCH" value={this.state.string}
                    onChange={this.onSearch.bind(this)}
                    onFocus={this.onFocus.bind(this)}
                    className={className}
                />
                <img src={require("../../assets/img/icons/shape_2.png")} alt="search" onClick={this.toggleSearch.bind(this)} />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSearchString: (data) => {
            dispatch(setSearchString(data))
        }
    };
};

export default withRouter(connect(null, mapDispatchToProps)(SearchBar));