import React, { Component } from "react"; // import from react
import { Window, App, View, Button, Picker } from "proton-native"; // import the proton-native components
import rustModule from '../../rust/native/nodejs';

export default class Example extends Component {
  render() {
    // all Components must have a render method
    return (
      <App>
        {/* you must always include App around everything */}
        <Window style={{ width: 300, height: 300, backgroundColor: "blue" }}>
          {/* all your other components go here*/}
          <View>
            <Button title={rustModule()} onPress={() => console.log('Pressed')} />
            <Picker onValueChange={(i, text) => console.log(i, text)}>
              <Picker.Item label="Item1" value="i1" />
              <Picker.Item label="Item2" value="i2" />
            </Picker>
          </View>
        </Window>
      </App>
    );
  }
}
