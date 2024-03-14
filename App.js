import React, { useEffect, useState } from 'react';
import { View, Button, Text } from 'react-native';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';

const GoogleSignInScreen = () => {

  const [data, setdata] = useState("")

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: "665473376055-vu11a0kv9gt3bv9aos8pfhi3ui9p8ubs.apps.googleusercontent.com",
      androidClientId: "665473376055-0u7eve9pug2irpvk9pjskgm1d09qemsc.apps.googleusercontent.com",
      scopes: ['profile', 'email'],
      offlineAccess: true,
      scopes: ['profile', 'email']
    });
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signOut(); 
      const userInfo = await GoogleSignin.signIn();
      setdata(userInfo.user)
      console.log(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('Sign in cancelled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Operation in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play services not available');
      } else { 
        console.error(error);
      }
    }
  };
  console.log("datadatadata", data && data)
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      {/* <GoogleSigninButton
        style={{ width: 192, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn}
        hideIcon={true} 
      /> */}
      <GoogleSigninButton
        style={{ width: 192, height: 48 }}
        // size={23}
        // color={GoogleSigninButton.Color.Dark}
        onPress={signIn}
        hideLogo={true}
      />

      {data && (
        <View>
          <Text>User Data:</Text>
          <Text>Name: {data.name}</Text>
          <Text>Email: {data.email}</Text>

        </View>
      )}
    </View>
  );
};

export default GoogleSignInScreen;
