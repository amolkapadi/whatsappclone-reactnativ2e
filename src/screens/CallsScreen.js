import { View, Text, Image, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import Data from '../Data'
import { MaterialIcons } from '@expo/vector-icons';

const UserCard= ({name, status, profileImage})=>{
  return(
    <View style={styles.container}>
      <Image source={{ uri: profileImage }} style={styles.profileImage} />
      <View style={styles.details}>
        <View style={styles.userInfo}>
          <View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.status}>{status}</Text>
          </View>
          <View>
               <MaterialIcons name="video-call" size={24} color="black" />
          </View>
        </View>
       
      </View>
    </View>
  )
}

export default function CallsScreen() {
  return (
    
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

  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'green',
    marginRight: 16,
  },
  details: {
    flex: 1,
  },
  userInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Add space between the two sections
    marginBottom: 4, // Add margin for spacing
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 14,
    color: '#666',
  },
  name1: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'blue', // Customize the color of the second name
  },
  callInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  callTime: {
    fontSize: 12,
    color: '#999',
    marginRight: 8,
  },
  videoCallIcon: {
    width: 16,
    height: 16,
  },
})