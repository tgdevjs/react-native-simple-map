import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import MapView from 'react-native-maps';

import { searchLocation } from './api/geocoder';
import Callout from './callout';

const descriptionLong = "Map all your Salesforce data. MapAnything is the most comprehensive mapping and geo-analytics solution available to Salesforce users."

export default class Map extends Component {

  constructor(props) {
    super(props);

    // Set intial state to San Francisco
    const  longitude = 37.78825;
    const   latitude = -122.4324;
    this.state = {
      region: {
        latitude,
        longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      marker: {
        location: {
          latitude,
          longitude,
        },
        title: "San Francisco",
        description: "description",
      }
    }
  }

  componentDidMount() {

    // Search location MapAnything,Charlotte,NC
    const locationName = 'MapAnything,Charlotte,NC';
    searchLocation(locationName, (responseJSON) =>{
     const { lat: latitude, lng: longitude } = responseJSON.results[0].geometry.location;
     this.setState({
        region: {
           latitude,
           longitude,
           latitudeDelta: 0.0922,
           longitudeDelta: 0.0421,
         },
         marker: {
           location: {
             latitude,
             longitude,
           },
           title: "MapAnything",
           description: "description",
         }
      });
   });

  }

  render() {

    const { region, marker } = this.state;

    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={region}
        >
          <MapView.Marker
            coordinate={marker.location}
            title={marker.title}
            description={marker.description}
          >
            <MapView.Callout tooltip>
              <Callout
                name={marker.title}
                description={descriptionLong}
              />
            </MapView.Callout>
          </MapView.Marker>
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  }
});
