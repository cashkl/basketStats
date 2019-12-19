import React, {Component} from 'react';
import {
  Text,
  View,
  Picker,
  ScrollView,
  Dimensions,
  SafeAreaView,
  ListView,
} from 'react-native';

import RNPickerSelect from 'react-native-picker-select';

const {width, height} = Dimensions.get('window');

export class Statistics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   dataSource: ds.cloneWithRows(['row 1', 'row 2']),
      team: '',
    };
  }
  RenderTable = () => {
    return (
      <View style={{flexDirection: 'row', marginVertical: 10}}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            marginHorizontal: 10,
          }}>
          <Text>Team 1</Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            marginHorizontal: 10,
          }}>
          <Text>1</Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            marginHorizontal: 10,
          }}>
          <Text>2</Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            marginHorizontal: 10,
          }}>
          <Text>8:42</Text>
        </View>
      </View>
    );
  };

  render() {
    const {team, dataSource} = this.state;
    return (
      <SafeAreaView style={{width, height, padding: 0}}>
        <ScrollView style={{width, height, padding: 0}}>
          <View
            style={{
              height: 100,
              marginVertical: 10,
              width,
              alignItems: 'center',
            }}>
            <View
              style={{
                height: 50,
                width: width * 0.8,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
              }}>
              <RNPickerSelect
                selectedValue={this.state.team}
                onValueChange={itemValue => this.setState({team: itemValue})}
                items={[
                  {label: 'Team 1', value: 'team1'},
                  {label: 'Team 2', value: 'team2'},
                  {label: 'Team 3', value: 'team3'},
                ]}
              />
            </View>
          </View>
          <View style={{width, padding: 0}}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignContent: 'center',
                  borderBottomWidth: 1,
                  marginHorizontal: 10,
                }}>
                <Text>Team</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignContent: 'center',
                  borderBottomWidth: 1,
                  marginHorizontal: 10,
                }}>
                <Text>Player</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignContent: 'center',
                  borderBottomWidth: 1,
                  marginHorizontal: 10,
                }}>
                <Text>Score</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignContent: 'center',
                  borderBottomWidth: 1,
                  marginHorizontal: 10,
                }}>
                <Text>Time</Text>
              </View>
            </View>
            {this.RenderTable()}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Statistics;
