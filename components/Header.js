import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:30, textAlign:'right', padding:10, borderColor:'orange'}}>0</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    flex:1 ,
    },
})