import React from 'react'

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword : ''
        }
    };

    onKeywordChangedEventListener() {

    }

    render() {
        return (
          <nav>
                <h1>Notes</h1>
                <input type="text" placeholder="Search Notes..." onChange={this.onKeywordChangedEventListener} />
          </nav>
        );
    };
};
