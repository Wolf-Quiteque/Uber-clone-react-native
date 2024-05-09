import { SafeAreaView, StyleSheet, Image, View } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_PLAY_KEY} from "@env";
import {setDestination,setOrigin} from "../slices/navSlice";
import { useDispatch } from 'react-redux';
import NavFavourites from '../components/NavFavourites';


const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
       <Image
        style={{
            width:100,
            height:100,
            resizeMode:"contain"
        }}
        source={{
            uri:"https://links.papareact.com/gzs"
        }}
       />
       <GooglePlacesAutocomplete
       placeholder='Where From?'
       styles={
        {
          container:{
            flex:0
          },
          textInput:{
            fontSize:18,
          }
        }
       }
       onPress={(data,details=null)=>{
        dispatch(setOrigin({
          location:details.geometry.location,
          description:data.description
        }))
        dispatch(setDestination(null))
       }}
       minLength={2}
       fetchDetails={true}
       returnKeytype={"search"}
       enablePoweredByContainer={false}
         query={{
          key:GOOGLE_PLAY_KEY,
          language:'en'
         }}
         nearbyPlacesAPI='GooglePlacesSearch'
         debounce={400}

       />
       <NavOptions/>
       <NavFavourites/>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})