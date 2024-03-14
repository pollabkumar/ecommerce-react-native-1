import { useEffect } from 'react';
import { View, Text, StyleSheet, Image, StatusBar, SafeAreaView, } from 'react-native';

const SplashScreen = () => {

    useEffect(() => {
        setTimeout(() => { }, 15000);
    });

    return (
        <SafeAreaView>

            <StatusBar translucent backgroundColor="transparent" />

            <View>
                <Image
                    style={{ width: '100%', height: '100%' }}
                    source={require('../assets/splash_11zon.jpg')}
                />
            </View>

            <View
                style={{
                    position: 'absolute',
                    height: "100%",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                <View>
                    <Image
                        style={{ height: 100, width: 100 }}
                        source={require('../assets/logo.png')}
                    />
                </View>
                <View style={{ paddingTop: 7, alignItems: 'center' }}>
                    <Text style={{ fontSize: 23, color: '#fff' }}>Makshi</Text>
                </View>
                <View
                    style=
                    {{
                        position: 'absolute',
                        bottom: 5,
                    }}
                >
                    <Text style={{ fontSize: 19, color: '#fff', alignItems: 'center' }}>
                        Welcome To Ecommerce
                    </Text>
                </View>
            </View>

        </SafeAreaView>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    backgroundImg: {
        width: 240,
        height: 80,
        alignSelf: 'center',
        top: '45%',
        borderRadius: 5,
    },
});