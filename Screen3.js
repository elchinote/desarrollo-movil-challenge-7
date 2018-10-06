import React from 'react'
import { View, Text, Button } from 'react-native'

class Screen3 extends React.Component {
    
  render() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Screen 3</Text>
        <Button title="Ir a Screen2" onPress={() => this.props.navigation.navigate('Screen2')} />
      </View>
    )
  }
}

export default Screen3