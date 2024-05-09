import { FlatList, StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


const data = [
  {
    id:"Uber-X-123",
    title:"UberX",
    multiplier:1,
    image:"https://links.papareact.com/3pn"
  },
  {
    id:"Uber-X-456",
    title:"Uber XL",
    multiplier:1.2,
    image:"https://links.papareact.com/5w8"
  },
  {
    id:"Uber-X-789",
    title:"Uber LUX",
    multiplier:1.5,
    image:"https://links.papareact.com/7pf"
  }
]
const RideOptionsCard = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
<View style={{ position: 'absolute', top: 0, left: 0, right: 0, justifyContent: 'flex-start' }}>
     <TouchableOpacity 
     onPress={()=>navigation.navigate("NavigationCard")}
     style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}>
        <Icon
          name='chevron-left'
          type="fontawesome"
        />
      </TouchableOpacity>
      <Text style={tw`text-center py-5 text-xl`}>Select a Ride</Text>
     </View>
     <FlatList
       data={data}
       keyExtractor={(item)=>item.id}
       renderItem={({item:{id,title,multiplier,image},item})=>(
        <TouchableOpacity style={tw`flex-row justify-between items-center px-10`}>
          <Image
            style={{
              width:100,
              height:100,
              resizeMode:"contain"
            }}
            source={{uri:image}}
          />
          <View style={tw`-ml-6`}>
            <Text style={tw`text-xl font-semibold`}>{title}</Text>
            <Text>Travel time...</Text>
          </View>
          <Text style={tw`text-xl`}>$99</Text>
        </TouchableOpacity>
       )}
     />
    </SafeAreaView>
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})