import { View, Text, Image, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import Data from '../Data'


const UserCard= ({name, status, profileImage})=>{
  return(
    <View style={styles.container}>
        <Image source={{uri:profileImage}} style={styles.profileImage}   />
        <View style={styles.details}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.status}>{status}</Text>
        </View>
    </View>
  )
}


export default function ChatScreen() {
  return (
    <View>
    <FlatList 
        data={Data}
        keyExtractor={(item)=> item.id}
        renderItem={({item})=>(
          <UserCard 
              name={item.name}
              status={item.status}
              profileImage={item.profileImage}
          />
        )}
    />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flexDirection:'row',
      alignItems:'center',
      padding:16,
      borderBottomWidth:1,
      borderBottomColor:'#e0e0e0'
    },
    profileImage:{
      width:50,
      height:50,
      borderRadius:25,
      marginRight:16
    },
    details:{
      flex:1
    },
    name:{
      fontSize:16,
      fontWeight:'bold'
    },
    status:{
      fontSize:14,
      color:'#666'
    }
})