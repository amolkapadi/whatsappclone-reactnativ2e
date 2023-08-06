import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function TopNav() {
  return (
    <View style={styles.topNav}>
      <Text style={styles.text}>Chats</Text>
      <Text style={styles.text}>Status</Text>
      <Text style={styles.text}>Calls</Text>
    </View>
  )
}

const styles = StyleSheet.create({
        topNav:{
            flexDirection:'row',
            justifyContent:'space-between',
            padding:20, 
            backgroundColor:"#128B7E"
        },
        text:{
            color:'white',
            fontSize:16
        }

})