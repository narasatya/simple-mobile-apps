import React, { useState, useEffect } from 'react';
import { Text, View, StatusBar, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const App = () => {
  return (

    <View style={{ flex: 1 }}>
      <StatusBar barStyle={'dark-content'} backgroundColor="#FFB3B3" />
      <View style={{ flex: 0.1, backgroundColor: 'white', borderBottomWidth: 1, borderColor: '#FCE2DB',justifyContent: 'center', zIndex: 3 }}>
        <Text style={{ color: 'black', textAlign: 'center', fontFamily: 'Itim-Regular', fontSize: 30 }}>
          nara.aanoraga
        </Text>
      </View>

      <View style={{ flex: 0.4, backgroundColor: '#FFB3B3' }}></View>

      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View style={{
              backgroundColor: '#EE6983',
              width: 120,
              height: 120,
              borderRadius: 60,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 5,
              borderColor: 'white',
              position: 'absolute',
            }}>
              <Image
                source={require('./nara.png')}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                  borderWidth: 5,
                  borderColor: 'white',
                  position: 'absolute'
                }} />
            </View>
          </View>
        </View>

        <View>
          <Text style={{ color: 'black', fontSize: 25, textAlign: 'center', marginTop: 60, fontFamily: 'Poppins-SemiBold' }}>
            Nara Satya Anoraga
          </Text>
        </View>

        <View style={{
          backgroundColor: '#EE6983',
          width: 230,
          alignItems: 'center',
          marginLeft: 65,
          padding: 3,
          borderBottomEndRadius: 8,
          borderTopEndRadius: 8,
          borderTopLeftRadius: 8
        }}>
          <Text style={{ color: 'white', fontFamily: 'Poppins-Italic' }}>
            Kelas XII B Rekayasa Perangkat Lunak
          </Text>
        </View>

        <View style={{ flex: 1, paddingTop: 50 }}>        
          <TouchableOpacity style={{ 
            flexDirection: 'row', 
            backgroundColor: '#FCE2DB', 
            borderRadius: 5, 
            paddingVertical: 5, 
            paddingHorizontal: 15, 
            marginHorizontal: 55, 
            borderWidth: 2, 
            borderColor: '#FFB4B4'
            }}>
            <Icon name="school" size={35} color="#EE6983" light />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
              <Text style={{ fontSize: 19, color: 'black', fontFamily: 'Poppins-Medium' }}>SEKOLAH</Text>
              <Text style={{ color: 'black', fontFamily: 'Poppins-Light' }}>SMK Negeri 2 Surakarta</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{ 
            flexDirection: 'row', 
            backgroundColor: '#FCE2DB', 
            borderRadius: 5, 
            paddingVertical: 5, 
            paddingHorizontal: 15, 
            marginHorizontal: 55, 
            marginTop: 20, 
            borderWidth: 2, 
            borderColor: '#FFB4B4' 
            }}>
            <Icon name="envelope" size={35} color="#EE6983" light />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
              <Text style={{ fontSize: 20, color: 'black', fontFamily: 'Poppins-Medium' }}>EMAIL</Text>
              <Text style={{ color: 'black', fontFamily: 'Poppins-Light' }}>narasatya@smkn2-solo.net</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{ 
            flexDirection: 'row', 
            backgroundColor: '#FCE2DB', 
            borderRadius: 5, 
            paddingVertical: 5, 
            paddingHorizontal: 15, 
            marginHorizontal: 55, 
            marginTop: 20, 
            borderWidth: 2, 
            borderColor: '#FFB4B4' 
            }}>
            <Icon name="map" size={35} color="#EE6983" light />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
              <Text style={{ fontSize: 20, color: 'black', fontFamily: 'Poppins-Medium' }}>ALAMAT</Text>
              <Text style={{ color: 'black', fontFamily: 'Poppins-Light' }}>Brujul, Jaten, Karanganyar</Text>
            </View>
          </TouchableOpacity>

        </View>

      </View>

    </View>
  );
}

export default App;