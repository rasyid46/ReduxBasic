import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

class Counter extends Component {
  addIncrement = () => {
    console.log('tambah');
  };
  minIncrement = () => {
    console.log('kurang');
  };
  render() {
    return (
      <View>
        <Text>Contoh Redux</Text>
        <Text>Counter :  </Text>
        <Button title="Tambah" onPress= {this.addIncrement}/>
        <Button title="Kurang" onPress={this.minIncrement} />
      </View>
    );
  }
}

export default Counter;
