import { StyleSheet, Text, View, SafeAreaView, StatusBar, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Feather';
import { useState,useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LottieView from 'lottie-react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
const Registration = ({ navigation }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [show, setShow] = useState(true);

  const users = [
    {
      id: 1,
      name: "Dixit",
    },
    {
      id: 2,
      name: "Pallab",
    },
  ];

  const storeData = async () => {
    for (const item of users) {
      if (item.name === username) {
        // console.log("item.id", item.id);
        await AsyncStorage.setItem('key', JSON.stringify(item.id));

        const storedItem = await AsyncStorage.getItem('key');
        console.log("Stored item from AsyncStorage: ", storedItem);
      }
    }
  };

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: "665473376055-vu11a0kv9gt3bv9aos8pfhi3ui9p8ubs.apps.googleusercontent.com",
      androidClientId: "665473376055-0u7eve9pug2irpvk9pjskgm1d09qemsc.apps.googleusercontent.com",
      scopes: ['profile', 'email'],
      offlineAccess: true,
      scopes: ['profile', 'email']
    });
  }, []);

  return (
    <View>
      <StatusBar
        animated={true}
        // translucent
        backgroundColor="#e47f46"
      />

      <SafeAreaView style={{ flexDirection: "column", height: "100%", backgroundColor: "#e47f46" }}>
        {/* Top */}
        <View style={{ height: "48%", }}>
          <View style={{ height: "100%", flexDirection: "row", justifyContent: "center", alignItems: "center", marginRight: 10 }}>
            <LottieView style={{ height: 350, width: 350 }} source={require("../assets/animation.json")} autoPlay loop />
          </View>
        </View>

        {/* Bottom */}
        <ScrollView style={{ height: "55%", backgroundColor: "#031518", borderTopLeftRadius: 50, borderTopRightRadius: 50, }}>

          <View style={{ marginTop: 4, }}>
            <View style={{ width: "100%", marginTop: 10, alignItems: "center" }}>
              <Text style={{ color: "#fff", fontSize: responsiveFontSize(3), fontWeight: "400" }}>Login</Text>
              <Text style={{ color: "#D9D9D9", fontSize: responsiveFontSize(1.70), fontWeight: "300" }}>
                Sign in to continue
              </Text>
            </View>
            <View style={{ paddingHorizontal: 30, marginTop: 20 }}>
              <Text style={{ color: "#fff", marginBottom: 7, fontSize: 15, fontWeight: "500" }}>Enter your Email address</Text>
              <TextInput
                style={styles.input}
                onChangeText={(value) => setEmail(value)}
                value={email}
                placeholder='Email address'
                placeholderTextColor="#e5e3e0"
                keyboardType="email-address"
              />
            </View>

            <View style={{ paddingHorizontal: 30, marginTop: 20 }}>
              <Text style={{ color: "#fff", marginBottom: 7, fontSize: 15, fontWeight: "500" }}>Enter your Password</Text>
              <TextInput
                style={styles.input}
                onChangeText={(value) => setPassword(value)}
                value={password}
                placeholder='Enter your password'
                placeholderTextColor="#e5e3e0"
                secureTextEntry={show}
              />
              <View style={{ position: 'absolute', right: 37, bottom: 3, borderRadius: 100 }}>
                <Icon
                  name={show ? 'eye-off' : 'eye'}
                  onPress={() => setShow(!show)}
                  style={{
                    color: '#e5e3e0',
                    fontSize: 14,
                    width: 30,
                    height: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 8,
                  }}
                />
              </View>
            </View>

            <View style={{ marginVertical: 5, justifyContent: "flex-end", flexDirection: "row", paddingRight: 37, }}>
              <TouchableOpacity

                onPress={() => navigation.navigate("ForgotPassword")}>
                <Text style={{ fontSize: 13, textDecorationLine: 'underline', color: "#B0BEC5" }}>Forgot password</Text>
              </TouchableOpacity>
            </View>

            {/* Submit */}
            <View style={{ marginTop: 10, justifyContent: "center", flexDirection: "row", alignItems: "center", }}>
              <TouchableOpacity
                style={{ backgroundColor: "#e47f46", paddingVertical: 7, borderRadius: 50, width: "55%", }}
                // onPress={() => storeData()}
                onPress={() => navigation.navigate("Home")}
              >
                <Text style={{ color: "#000", textAlign: "center", fontWeight: "500", fontSize: 16, letterSpacing: 0.3 }}>Submit</Text>
              </TouchableOpacity>
            </View>

            <View style={{ width: "100%", alignItems: "center" }}>
              <Text style={{ color: "red" }}>or</Text>
            </View>

            <View style={{alignItems:"center"}}>
              <TouchableOpacity
                onPress={() => handleGoogleLogin()}
                style={{
                  width: "55%",
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "center",
                  backgroundColor: "#fff",
                  elevation: 2,
                  paddingVertical: 8,
                  zIndex: 12,
                  position: "relative",
                  borderRadius: 10

                }}>
                <View style={{}}>
                  <Image
                    source={require('../assets/download.png')}
                    style={{
                      height: 13,
                      width: 13,

                    }}
                  // resizeMode="stretch"
                  />
                </View>

                <TouchableOpacity
                  onPress={() => handleGoogleLogin()}
                  style={{
                    // backgroundColor: "#D9D9D9" 
                    paddingLeft: 5
                  }}>
                  <Text style={{ color: "#000", fontSize: responsiveFontSize(1.60), fontWeight: "500" }}>
                    Sign In with  Google
                  </Text>
                </TouchableOpacity>

              </TouchableOpacity>
            </View>
            {/* 
            <View style={{}}>
              <TouchableOpacity style={{}}>
                <Text style={{}}>

                </Text>
              </TouchableOpacity>
            </View> */}
          </View>

        </ScrollView>

      </SafeAreaView>
    </View>
  )
}

export default Registration

const styles = StyleSheet.create({
  input: {
    padding: 3,
    fontSize: 13,
    color: '#E0F7FA',
    fontWeight: '500',
    paddingLeft: 10,
    borderRadius: 10,
    backgroundColor: "#e47f46",
    width: "100%",
  }
})