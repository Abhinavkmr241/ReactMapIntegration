import React, { Component } from 'react'
import Map from './Map'

export class Home extends Component {
    render() {
        return (
            <div>
                <Map 
                    google={this.props.google}
					center={{lat: 22.546940, lng: 88.353120}}
                    height='600px'
					zoom={15}
                />
            </div>
        )
    }
}

export default Home;
