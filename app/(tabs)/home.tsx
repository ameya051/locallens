import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const home = () => {
  return (
    <View>
      <Text style={styles.homeText}>Home</Text>
    </View>
  )
}

export default home

const styles = StyleSheet.create({
  homeText: {
    fontFamily: 'outfit',
    fontSize: 50
  }
})