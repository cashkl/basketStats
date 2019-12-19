import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  SafeAreaView,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';


const {width, height} = Dimensions.get('window');

export default class Match extends Component {
  constructor(props) {
    super(props);
    this.state = {
      period: 1,
      lap: 1,
      minute: 10,
      second: 0,
      timerStarted: false,
      firstPoint:0,
      secondPoint:0,
      firstTeam:this.props.navigation.state.params.firstTeam,
      secondTeam:this.props.navigation.state.params.secondTeam,

    };
  }
  startTimer = () => {
    if (this.state.timerStarted) return;
    const {second, minute, lap} = this.state;
    if (second < 1) {
      this.setState(
        {
          second: 59,
          minute: minute - 1,
        },
        () => {
          const {minute, lap} = this.state;
          if (minute < 1) {
            this.setState({
              minute: 10,
              second: 0,
              lap: lap >= 4 ? 0 : lap + 1,
            });
          }
        },
      );
    } else {
      this.setState({
        second: second - 1,
      });
    }
    this._interval = setInterval(() => {
      const {second, minute, lap} = this.state;
      if (second < 1) {
        this.setState(
          {
            second: 59,
            minute: minute - 1,
          },
          () => {
            const {minute, lap} = this.state;
            if (minute < 1) {
              this.setState({
                minute: 10,
                second: 0,
                lap: lap >= 4 ? 0 : lap + 1,
              });
            }
          },
        );
      } else {
        this.setState({
          second: second - 1,
        });
      }
    }, 1000);
    this.setState({timerStarted: true});
  };
  stopTimer = () => {
    clearInterval(this._interval);
    this.setState({timerStarted: false});
  };
  incrementScore=(point , team) => {
    if(team == 0)
    this.setState({firstPoint: this.state.firstPoint + point})
    else
    this.setState({secondPoint: this.state.secondPoint + point})
  }
  render() {
    console.log(this.props)
    const {lap, minute, second ,firstPoint , secondPoint ,firstTeam ,secondTeam} = this.state;
    return (
      <SafeAreaView
        style={{width: width, height: height, backgroundColor: 'gray'}}>
        <View style={styles.container}>
          <View>
            <View
              style={{
                flexDirection: 'row',
                height: 150,
                width: '100%',
              }}>
              <View>
                <Text
                  style={{fontSize: 30, color: '#fff', textAlign: 'center'}}>
                  {firstTeam ? firstTeam : "Home"}
                </Text>
                <View
                  style={{
                    borderWidth: 1,
                    backgroundColor: '#000',
                    borderWidth: 1,
                    borderColor: '#fff',
                    flexDirection: 'column',
                    padding: 30,
                  }}>
                    <Text style={{fontSize: 24, color: 'yellow' , textAlignVertical:"center" , textAlign:"center"}}>{firstPoint}</Text>
                </View>
              </View>
              <View
                style={{
                  marginTop: 0,
                  marginHorizontal: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    backgroundColor: '#000',
                    borderWidth: 4,
                    borderColor: '#fff',
                    flexDirection: 'column',
                    padding: 10,
                    paddingHorizontal: 20,
                  }}>
                  <Text style={{fontSize: 24, color: 'yellow'}}>
                    {minute < 10 ? `0${minute}` : minute}:
                    {second < 10 ? `0${second}` : second}
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: '#000',
                    borderWidth: 4,
                    borderColor: '#fff',
                    flexDirection: 'column',
                    padding: 10,
                    paddingHorizontal: 0,
                    marginTop: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 50,
                    height: 50,
                  }}>
                  <Text
                    style={{
                      fontSize: 24,
                      color: 'yellow',
                      textAlign: 'center',
                    }}>
                    {lap}
                  </Text>
                </View>
              </View>
              <View>
                <Text
                  style={{fontSize: 30, color: '#fff', textAlign: 'center'}}>
                  {secondTeam ? secondTeam : "Visitor"}
                </Text>
                <View
                  style={{
                    borderWidth: 1,
                    backgroundColor: '#000',
                    borderWidth: 1,
                    borderColor: '#fff',
                    flexDirection: 'column',
                    padding: 30,
                  }}>
                  <Text style={{fontSize: 24, color: 'yellow' , textAlignVertical:"center" , textAlign:"center"}}>{secondPoint}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',

            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={this.stopTimer} style={{ borderWidth:3}}>
            <Image
              source={require('../Assets/images/stop1.png')}
              style={{height: 40, width: 40, margin: 0 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.startTimer}>
            <Image
              source={require('../Assets/images/play1.png')}
              style={{height: 45, width: 45, marginLeft: 30}}
            />
          </TouchableOpacity>
        </View>
        <View style={{flex:3,borderWidth:1 , flexDirection:"row" , justifyContent:"center",alignItems:"center"}}>
          <View style={{flex:1 , marginHorizontal:30}}>
            <View style={{marginBottom:3}}>
              <TouchableOpacity onPress={()=>{this.incrementScore(3, 0)}} style={{borderWidth:1, borderRadius:20 , backgroundColor:"white" , padding:10, paddingHorizontal:30}}>
                <Text style={{fontSize:24 , textAlign:"center",textAlignVertical:"center"}}>
                  3 point
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{marginBottom:3}}>
            <TouchableOpacity onPress={()=>{this.incrementScore(2, 0)}} style={{borderWidth:1, borderRadius:20 , backgroundColor:"white" , padding:10, paddingHorizontal:30}}>
                <Text style={{fontSize:24 , textAlign:"center",textAlignVertical:"center"}}>
                  2 point
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{marginBottom:3}}>
            <TouchableOpacity onPress={()=>{this.incrementScore(1, 0)}} style={{borderWidth:1, borderRadius:20 , backgroundColor:"white" , padding:10, paddingHorizontal:30}}>
                <Text style={{fontSize:24 , textAlign:"center",textAlignVertical:"center"}}>
                  1 point
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flex:1 , marginHorizontal:30}}>
            <View style={{marginBottom:3}}>
              <TouchableOpacity onPress={()=>{this.incrementScore(3, 1)}} style={{borderWidth:1, borderRadius:20 , backgroundColor:"white" , padding:10, paddingHorizontal:30}}>
                <Text style={{fontSize:24 , textAlign:"center",textAlignVertical:"center"}}>
                  3 point
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{marginBottom:3}}>
            <TouchableOpacity onPress={()=>{this.incrementScore(2, 1)}} style={{borderWidth:1, borderRadius:20 , backgroundColor:"white" , padding:10, paddingHorizontal:30}}>
                <Text style={{fontSize:24 , textAlign:"center",textAlignVertical:"center"}}>
                  2 point
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{marginBottom:3}}>
            <TouchableOpacity onPress={()=>{this.incrementScore(1, 1)}} style={{borderWidth:1, borderRadius:20 , backgroundColor:"white" , padding:10, paddingHorizontal:30}}>
                <Text style={{fontSize:24 , textAlign:"center",textAlignVertical:"center"}}>
                  1 point
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // transform: [{rotate: '90deg'}],
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#000',
  },
});
