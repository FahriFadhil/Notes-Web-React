import React from 'react'

export default class Nav extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            keyword: ''
        }
    }

    render() {
        return (
          <nav>
                <h1>Notes</h1>
                <input type="text" value={this.state.keyword} placeholder="Search Notes..." onChange={(event) => {
                    this.setState({
                        keyword: event.target.value
                    })
                    this.props.onKeywordChangedEventListener(event.target.value)
                }} />
          </nav>
        );
    };
};
