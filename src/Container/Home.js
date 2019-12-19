import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  SafeAreaView,
  Modal,
  TouchableOpacity
} from 'react-native';

const {width, height} = Dimensions.get('window');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      firstTeam: '',
      secondTeam: '',
      selectingTeam: 0,
    };
  }
  handleShowModal = side => {
    this.setState({showModal: !this.state.showModal, selectingTeam: side});
  };
  selectTeam = team => {
    const selectingTeam = this.state.selectingTeam;
    if (selectingTeam === 0) {
      this.setState({firstTeam: team, showModal: false});
    } else {
      this.setState({secondTeam: team, showModal: false});
    }
  };
  render() {
    const {showModal, firstTeam, secondTeam} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View style={{flex: 5}}>
          <View style={{flex: 1}}>
            <Text style={styles.headerText}>Team Select</Text>
          </View>
          <View
            style={{
              flex: 3,
              justifyContent: 'center',
              flexDirection: 'row',
              width: width * 0.8,
              margin: 20,
            }}>
            <TouchableOpacity
              style={{
                borderWidth: 3,
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
                flex: 1,
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                width: width * 0.4,
                borderColor: 'black',
              }}
              onPress={() => this.handleShowModal(0)}>
              <Text style={{fontSize: 24}}>
                {firstTeam !== '' ? firstTeam : 'Home'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderWidth: 3,
                flex: 1,
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                width: width * 0.4,
                borderColor: 'red',
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
              }}
              onPress={() => this.handleShowModal(1)}>
              <Text style={{fontSize: 24}}>
                {secondTeam !== '' ? secondTeam : 'Guest'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex: 5}}>
          <View style={styles.buttons}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Statistics');
              }}>
              <Text style={styles.buttonText}>Statistics</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttons}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Match' , { firstTeam , secondTeam});
              }}>
              <Text style={styles.buttonText}>Start Match</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Modal visible={showModal} animationType="slide" on>
          <SafeAreaView
            style={{
              width: width,
              height: height * 0.8,
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <View style={styles.buttons}>
              <TouchableOpacity
                style={{width: width * 0.8}}
                onPress={() => this.selectTeam('Team 1')}>
                <Text style={styles.buttonText}>Team 1</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttons}>
              <TouchableOpacity
                style={{width: width * 0.8}}
                onPress={() => this.selectTeam('Team 2')}>
                <Text style={styles.buttonText}>Team 2</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttons}>
              <TouchableOpacity
                style={{width: width * 0.8}}
                onPress={() => this.selectTeam('Team 3')}>
                <Text style={styles.buttonText}>Team 3</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttons}>
              <TouchableOpacity
                style={{width: width * 0.8}}
                onPress={() => this.selectTeam('Team 4')}>
                <Text style={styles.buttonText}>Team 4</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </Modal>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width,
    height,
  },
  buttons: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: width * 0.8,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    margin: 10,
  },
  buttonText: {
    fontSize: 32,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  headerText: {
    fontSize: 48,
    textAlign: 'center',
    color: 'red',
    textAlignVertical: 'center',
  },
});
