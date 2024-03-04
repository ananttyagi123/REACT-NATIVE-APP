import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, TextInput } from 'react-native';

const image = { uri: 'https://legacy.reactjs.org/logo-og.png' };

export default function App() {
  return (
    <View style={styles.container}>
      <Text>How is my application work</Text>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <TextInput style={styles.input} />
        {/* Content inside the ImageBackground */}
        
        <Button
          title="Press me"
          color="#f194ff"
          onPress={() => {
            // Handle button press
          }}
        />
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    backgroundColor:'#6f7769',
    border:'2px',
    borderRadius:'20px'
  },
});

