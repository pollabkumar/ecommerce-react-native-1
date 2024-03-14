import { StyleSheet, Text, View, SafeAreaView, StatusBar, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Feather';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LottieView from 'lottie-react-native';

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

    return (
        <View>
            <StatusBar
                animated={true}
                // translucent
                backgroundColor="#e47f46"
            />

            <SafeAreaView style={{ flexDirection: "column", height: "100%", backgroundColor: "#e47f46" }}>

                {/* To be ommitted later */}
                {/* <View>
                    <TouchableOpacity onPress={() => navigation.navigate("Home")} style={{ backgroundColor: "#000", padding: 5 }}>
                        <Text style={{ textAlign: "center", fontWeight: "600", color: "#fff" }}>Go to home</Text>
                    </TouchableOpacity>
                </View> */}
                {/* upto here */}

                {/* Top */}
                <View style={{ height: "48%", }}>
                    <View style={{ height: "100%", flexDirection: "row", justifyContent: "center", alignItems: "center", marginRight: 10 }}>
                        <LottieView style={{ height: 350, width: 350 }} source={require("../assets/animation.json")} autoPlay loop />
                    </View>
                </View>

                {/* Bottom */}
                <ScrollView style={{ height: "55%", backgroundColor: "#031518", borderTopLeftRadius: 50, borderTopRightRadius: 50, }}>

                    <View style={{ marginTop: 40, }}>

                        <View style={{ paddingHorizontal: 30 }}>
                            <Text style={{ color: "#fff", marginBottom: 7, fontSize: 15, fontWeight: "500" }}>Enter your Username</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={(value) => setUsername(value)}
                                value={username}
                                placeholder='Username'
                                placeholderTextColor="#e5e3e0"
                            />
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
                            <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
                                <Text style={{ fontSize: 13, textDecorationLine: 'underline', color: "#B0BEC5" }}>Forgot password</Text>
                            </TouchableOpacity>
                        </View>

                        {/* Submit */}
                        <View style={{ marginTop: 20, justifyContent: "center", flexDirection: "row", alignItems: "center", }}>
                            <TouchableOpacity
                                style={{ backgroundColor: "#e47f46", paddingVertical: 7, borderRadius: 50, width: "45%", }}
                                // onPress={() => storeData()}
                                onPress={() => navigation.navigate("Home")}
                            >
                                <Text style={{ color: "#000", textAlign: "center", fontWeight: "500", fontSize: 16, letterSpacing: 0.3 }}>Submit</Text>
                            </TouchableOpacity>
                        </View>
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