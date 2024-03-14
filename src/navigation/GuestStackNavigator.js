import { StyleSheet, View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../auth/Login';
import Registration from '../auth/Registration';
import { NavigationContainer } from '@react-navigation/native';
import ForgotPassword from '../screens/ForgotPassword';
import Home from '../screens/Home';
import ProductDetails from '../screens/ProductDetails';
import Cart from '../screens/Cart';
import Signin from '../screens/Signin';

const Stack = createNativeStackNavigator();

const GuestStackNavigator = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Registration' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="ProductDetails" component={ProductDetails} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Registration" component={Registration} />
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
                <Stack.Screen name="Cart" component={Cart} />
                <Stack.Screen name="Signin" component={Signin} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default GuestStackNavigator;

const styles = StyleSheet.create({})