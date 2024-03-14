import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Dashboard = () => {

    const removeItem = async () => {
        try {
            await AsyncStorage.removeItem('key');
            console.log("Item removed successfully");
        } catch (error) {
            console.log("Error removing item:", error);
        }
    }

    return (
        <TouchableOpacity onPress={() => removeItem()}>
            <Text style={{ color: "red", fontSize: 34 }}>Dashboard</Text>
        </TouchableOpacity>
    )
}

export default Dashboard;

const styles = StyleSheet.create({

})