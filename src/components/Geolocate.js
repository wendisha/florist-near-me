import React from "react";
import { geolocated } from "react-geolocated";
import Button from 'react-bootstrap/Button';
 
class Geolocate extends React.Component {
    //Handle click on the Geolocation icon to fetch from external API
    handleClick = (event) => {
        console.log(this.props.coords.latitude)
        event.preventDefault()
        this.props.fetchGeoYelpApi(this.props.coords.latitude, this.props.coords.longitude)
    }

    render() {
        return !this.props.isGeolocationAvailable ? (
            <div>Your browser does not support Geolocation</div>
        ) : !this.props.isGeolocationEnabled ? (
            <div>Geolocation is not enabled</div>
        ) : this.props.coords ? ( 
            <Button variant="light btn-arrow"><img class="arrow" src='https://i.imgur.com/c86tlDi.jpg' onClick={ this.handleClick } /></Button> 
        ) : (
            <div>Getting the location data&hellip; </div>
        );
    }
}
 
export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
    geolocationProvider: navigator.geolocation,
    watchPosition: true
})(Geolocate);