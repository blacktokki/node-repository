import React from 'react';
import { View, Text } from 'react-native';
import { A, Div } from 'components/commons'
function Footer() {
    return(
        <Div className="main-footer">
            <Div className="footer-left" style={{ flexDirection: "row"}}>
                <Text>Copyright &copy; 2018</Text><Div className="bullet"></Div>
                <Text>Design By </Text><A href="https://nauval.in/">Muhamad Nauval Azhar</A>
            </Div>
            <Div className="footer-right">
                <Text>2.3.0</Text>
            </Div>
        </Div>
    )
}
export default Footer;