import React from 'react';
import { View, Text } from 'react-native';
import A from 'components/commons/A'
function Footer() {
    return(
        <View className="main-footer">
            <View className="footer-left">
                <Text>Copyright &copy; 2018</Text><View className="bullet"></View>
                <Text>Design By</Text><A href="https://nauval.in/">Muhamad Nauval Azhar</A>
            </View>
            <View className="footer-right">
                <Text>2.3.0</Text>
            </View>
        </View>
    )
}
export default Footer;