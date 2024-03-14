import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

export default function Signin() {

    const [user, setUser] = useState(null);

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: "629798699824-ub51d34nh8vv1dtb92uisomadr6skhrq.apps.googleusercontent.com",
        });
    }, [])

    const signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log(userInfo);
            setUser(userInfo);
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
    };
    // const GoogleLogin = async () => {
    //     try {
    //         await GoogleSignin.hasPlayServices();
    //         const userInfo = await GoogleSignin.signIn();
    //         setUser({ userInfo });
    //         console.log(user);
    //     } catch (error) {
    //         if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    //             console.log("User cancelled the Log in flow")
    //         } else if (error.code === statusCodes.IN_PROGRESS) {
    //             console.log("Signing In")
    //         } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
    //             console.log("Play services not available")
    //         } else {
    //             console.log("Some other error happened")
    //         }
    //     }
    // };

    // const handleGoogleLogin = async () => {
    //     setLoading(true);
    //     try {
    //         const response = await GoogleLogin();
    //         const { idToken, user } = response;

    //         if (idToken) {
    //             const resp = await authAPI.validateToken({
    //                 token: idToken,
    //                 email: user.email,
    //             });
    //             await handlePostLoginData(resp.data);
    //         }
    //     } catch (apiError) {
    //         setError(
    //             apiError?.response?.data?.error?.message || 'Something went wrong'
    //         );
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    return (
        <View>
            <TouchableOpacity onPress={signIn} style={{ height: "100%", justifyContent: "center", alignItems: "center", }}>
                {user != null && <Text>{user.user.name}</Text>}
                {user != null && <Text>{user.user.email}</Text>}
                <Text style={{ backgroundColor: "#000", color: "#fff", padding: 8, borderRadius: 5 }}>
                    Continue with Google
                </Text>
            </TouchableOpacity>
        </View>
    );
}








// import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
// import { useEffect, useState } from 'react';
// import { useNavigation } from '@react-navigation/native';

// const Signin = ({ navigation }) => {

//     const [user, setUser] = useState({})

//     useEffect(() => {
//         GoogleSignin.configure({
//             webClientId: "901845991311-8l7r8pq091po4a2a8qlhqqfhm91b0ocm.apps.googleusercontent.com",
//             androidClientId: "901845991311-1cqbjnjm5iro1o6qfq6n0bqtkoe4dl97.apps.googleusercontent.com",
//             offlineAccess: true,
//             forceCodeForRefreshToken: true,
//             scopes: ['profile', 'email'],
//         });
//         isSignedIn()
//     }, [])

//     // 901845991311 - 8l7r8pq091po4a2a8qlhqqfhm91b0ocm.apps.googleusercontent.com
//     // 739868048410 - 0ifivtqu6v3jcpuiqfmb3vk84i6h8q1e.apps.googleusercontent.com

//     const signIn = async () => {
//         try {
//             await GoogleSignin.hasPlayServices();
//             const userInfo = await GoogleSignin.signIn();
//             console.log(userInfo);
//             setUser(userInfo);

//         } catch (error) {
//             if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//                 console.log("User cancelled the Log in flow")
//             } else if (error.code === statusCodes.IN_PROGRESS) {
//                 console.log("Signing In")
//             } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//                 console.log("Play services not available")
//             } else {
//                 console.log("Some other error happened")
//             }
//         }
//     };

//     const isSignedIn = async () => {
//         const isSignedIn = await GoogleSignin.isSignedIn();
//         if (!isSignedIn) {
//             getCurrentUserInfo();
//         } else {
//             console.log("Please login")
//         }
//     };

//     const getCurrentUserInfo = async () => {
//         try {
//             const userInfo = await GoogleSignin.signInSilently();
//             setUser(userInfo);
//         } catch (error) {
//             if (error.code === statusCodes.SIGN_IN_REQUIRED) {
//                 Alert.alert("User has not signed in yet");
//             } else {
//                 Alert.alert("Something went wrong");
//             }
//         }
//     }

//     return (
//         <View style={{ height: "100%", justifyContent: "center", alignItems: "center" }}>
//             <TouchableOpacity onPress={() => signIn()} style={{ backgroundColor: "#000", padding: 5, width: "90%", borderRadius: 10 }}>
//                 <Text style={{ textAlign: "center", color: "#fff" }}>Sign in</Text>
//             </TouchableOpacity>
//         </View>
//     )
// };

// export default Signin;