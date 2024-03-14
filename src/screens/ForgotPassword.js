import { StyleSheet, Text, View, StatusBar, SafeAreaView, Image, TextInput, ScrollView, TouchableOpacity, } from 'react-native';
import { useState } from 'react';

const ForgotPassword = () => {

    const [email, setEmail] = useState("");
    const [show, setShow] = useState(false);
    const [error, setError] = useState(false);
    const [otp, setOtp] = useState('');

    const handleChangeOtp = (text) => {
        setOtp(text);
    };

    const sendHandler = () => {
        if (email.length != 0) {
            setShow(!show);
        } else {
            setError(!error);
        }
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <StatusBar
                animated={true}
                // translucent
                backgroundColor="#fff"
            />
            <ScrollView>
                <View style={{ paddingTop: 30, backgroundColor: "#fff", }}>

                    {show ? (
                        <Text style={{ color: "#000", textAlign: "center", fontSize: 20, fontWeight: "700", marginVertical: 20, }}>Verification</Text>
                    ) : (
                        <Text style={{ color: "#000", textAlign: "center", fontSize: 20, fontWeight: "700", marginVertical: 20, }}>Forgot password?</Text>
                    )}

                    <View style={{ justifyContent: "center", alignItems: "center", marginVertical: 20 }}>
                        <Image
                            source={require("../assets/forgot.png")}
                            style={{ width: 150, height: 150 }}
                        />
                    </View>

                    {show ? (
                        <Text style={{ color: "#000", textAlign: "center", fontSize: 20, fontWeight: "700", marginVertical: 20, paddingHorizontal: 10 }}>Enter the verification code we sent on your email id</Text>
                    ) : (
                        <Text style={{ color: "#000", textAlign: "center", fontSize: 20, fontWeight: "700", marginVertical: 20, }}>Enter the Email address associated with your account</Text>
                    )}

                    {!show && (
                        <Text style={{ color: "#37474F", textAlign: "center", fontSize: 20, marginVertical: 10, paddingHorizontal: 40 }}>We'll email you a link to reset your password</Text>
                    )}

                    {show ? (
                        <View style={styles.otpContainer}>
                            <TextInput
                                style={styles.otpInput}
                                onChangeText={handleChangeOtp}
                                // value={otp}
                                keyboardType="numeric"
                                maxLength={4}
                                placeholder="Enter OTP"
                                placeholderTextColor="#000"
                            />
                        </View>
                    ) : (
                        <View style={{ paddingHorizontal: 30, marginTop: 25 }}>
                            <TextInput
                                style={styles.input}
                                onChangeText={(val) => setEmail(val)}
                                value={email}
                                placeholder='Enter Email Address'
                                placeholderTextColor="#000"
                                keyboardType="email-address"
                                autoCapitalize="none"
                                autoCorrect={false}
                            />
                        </View>
                    )}

                    {error && email.length === 0 && (
                        <View>
                            <Text style={{ color: "red", textAlign: "center", marginTop: 5, fontSize: 15 }}>Please enter a valid email address</Text>
                        </View>
                    )}

                    {show ? (
                        <View style={{ marginTop: 50, justifyContent: "center", flexDirection: "row", alignItems: "center", }}>
                            <TouchableOpacity
                                style={{ backgroundColor: "#e47f46", paddingVertical: 10, borderRadius: 50, elevation: 5, width: "35%" }}
                            // onPress={() => sendHandler()}
                            >
                                <Text style={{ color: "#fff", textAlign: "center", fontWeight: "700", fontSize: 18, letterSpacing: 0.3 }}>Verify OTP</Text>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View style={{ marginTop: 50, justifyContent: "center", flexDirection: "row", alignItems: "center", }}>
                            <TouchableOpacity
                                style={{ backgroundColor: "#e47f46", paddingVertical: 10, borderRadius: 50, elevation: 5, width: "35%" }}
                                onPress={() => sendHandler()}
                            >
                                <Text style={{ color: "#fff", textAlign: "center", fontWeight: "700", fontSize: 18, letterSpacing: 0.3 }}>Send</Text>
                            </TouchableOpacity>
                        </View>
                    )}

                    <View style={{ paddingBottom: 20 }}></View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ForgotPassword;

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#999',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: "500",
        paddingVertical: 5,
        color: '#000',
    },
    otpContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    otpInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#999',
        textAlign: 'center',
        fontSize: 20,
        paddingVertical: 5,
        color: '#000',
        fontWeight: "600",
    },
})