import React from 'react'

export default class Nav extends React.Component {

    constructor(props) {
        super(props)
        // keyword is the keyword that the user is searching for
        this.state = {
            keyword: ''
        }
    }

    render() {
        return (
          <nav>
                <h1>Notes</h1>
                {/* apply keyword to the input value */}
                <input type="text" value={this.state.keyword} placeholder="Search Notes..." onChange={(event) => {
                    // update the keyword in the state
                    this.setState({
                        keyword: event.target.value
                    })
                    // update notes state in the parent component
                    this.props.onKeywordChangedEventListener(event.target.value)
                }} />
          </nav>
        );
    }
}
