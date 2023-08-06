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

export default function StatusCsreen() {
  return (
    <View>
     <View style={styles.container2}>
        <Image style={styles.profileImage}   />
        <View style={styles.details}>
          <Text style={styles.name}>My Status</Text>
          <Text style={styles.status}>1 hours ago</Text>
        </View>
    </View>
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
      borderBottomColor:'#e0e0e0'
    },
    container2:{
      flexDirection:'row',
      alignItems:'center',
      padding:16,
      borderBottomColor:'#e0e0e0',
      borderBottomWidth:1,
      borderBottomColor:'#e0e0e0'
    },
    profileImage:{
      width:50,
      height:50,
      borderRadius:25,
      marginRight:16,
      borderWidth: 3,  // Add border width
      borderColor: 'green',  // Add border color
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