import React, { Component } from 'react';
import BrowseFloristsForm from '../components/BrowseFloristsForm'
import ListFlorists from '../components/ListFlorists'

class FloristListContainer extends Component {
    state = {
        floristsList : []
    }

    componentDidMount() {
        this.fetchYelpApi()
    }

    fetchYelpApi = (zipcode) => {
        // console.log(zipcode);
        const proxyurl = "https://cors-anywhere.herokuapp.com/"
        let url = `https://api.yelp.com/v3/businesses/search?term=florist&location=${zipcode}&limit=20`
        fetch(proxyurl + url, {
                method: 'GET',
                headers: {
                  'Accept': 'application/json',
                  'Authorization': process.env.REACT_APP_YELP_API_KEY,
                  'Content-Type': 'application/json'
                  }
                }
            )
        .then(resp => resp.json())
        .then((data) => {
            // console.log(data.businesses)
            let florists = []
            data.businesses.map((florist) => (
                florists.push(florist)
            ))
            this.setState({

                floristsList : florists
                
            })
            console.log(this.state)
        })
    }

    render() {
        return ( 
            <div>
                <BrowseFloristsForm fetchYelpApi={this.fetchYelpApi}/>
                <ListFlorists floristsList={this.state.floristsList}/>
            </div>
        )
    }
}

export default FloristListContainer;