import { StyleSheet, Text, View } from 'react-native'

const Login = () => {
  return (
    <View>
      <Text>Login</Text>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})



































// import { View, Button } from 'react-native';
// import { GoogleSigninButton, GoogleSignin } from '@react-native-google-signin/google-signin';

// const SignInScreen = () => {

//     const signInWithGoogle = async () => {
//         try {
//             await GoogleSignin.hasPlayServices();
//             const userInfo = await GoogleSignin.signIn();
//             console.log("dixittttt",userInfo);
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     return (
//         <View>
//             <GoogleSigninButton
//                 style={{ width: 192, height: 48 }}
//                 size={GoogleSigninButton.Size.Wide}
//                 color={GoogleSigninButton.Color.Dark}
//                 onPress={signInWithGoogle}
//             />
//         </View>
//     );
// };

// export default SignInScreen;