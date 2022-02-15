import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import AppNavigator from '../../utils/AppNavigator';
import styles from './styles';

export default class ScreenDetail extends Component {
    render() {
        //const { bruh } = this.props?.route?.params;
        return (
            <View style={styles.main}>
                <Text style = {{color: 'black'}}>
                    {`Nai xu mother fuker `}
                </Text>
                <Button title='Screen detail'
                    onPress={() => { AppNavigator.goBack() }} />
            </View>
        )
    }

}