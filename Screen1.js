import React from 'react'
import { View, Text, Button } from 'react-native'

class Screen1 extends React.Component {
    
  render() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Screen 1</Text>
        <Button title="Ir a Screen2" onPress={() => this.props.navigation.navigate('Screen2')} />
      </View>
    )
  }
}

export default Screen1