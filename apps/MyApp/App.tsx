import React from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'

import {Button, Test} from '@sample/my-button';



const App = () => {
  return (
    <View>  
      <Text>hello world!</Text>
      <Test />
     <Button
          title={'Click Here'}
          handleOnPress={() => {
            Alert.alert("hello")
          }}
        />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})