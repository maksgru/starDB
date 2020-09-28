import React, { Component } from 'react'
import Row from '../row/row';
import { PersonList, PersonDetails } from '../sw-components'
export default class PeolePage extends Component {

    state = {
        selectedItem: null
    };
    onItemSelected = (selectedItem) => {
        this.setState({ selectedItem });
    };
    
    render() {
        return (
            <Row
              left={<PersonList onItemSelected={this.onItemSelected} />}
              right={<PersonDetails itemId={this.state.selectedItem} />}
            />
        )
    }
}
