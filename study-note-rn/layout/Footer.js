import React from 'react';
import { View, Text } from 'react-native';
function Footer() {
    return(
        <View className="main-footer">
            <View className="footer-left">
                <Text>Copyright &copy; 2018<View className="bullet"></View></Text>
                <Text>Design By</Text><Text href="https://nauval.in/">Muhamad Nauval Azhar</Text>
            </View>
            <View className="footer-right">
                <Text>2.3.0</Text>
            </View>
        </View>
    )
}
export default Footer;