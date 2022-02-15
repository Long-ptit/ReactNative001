import React, { Component } from 'react';
import { View, Text, Button, TextInput, FlatList, ImageBackground, Image } from 'react-native';
import AppNavigator from '../../utils/AppNavigator';
import styles from './styles';
import axios from 'axios';
export default class ScreenWelcome extends Component {

    
    constructor(props) {
        super(props);

        this.state = {
            listData: [],
        }
        const ref = React.createRef()
    }

    componentDidMount() {
        axios.get("https://countdown-ngay-thi-android-app.firebaseio.com/dnnt_docs.json")
                        .then( (res) => this.setState({listData: res.data.data}) )
    }

    render() {
        const { listData } = this.state
        return (
            <ImageBackground source={require('./background.jpeg')} style = {{flex:1}} resizeMode="cover">
            <View style={styles.main}>
                {/* <Text style={{ color: "white", fontSize:15, fontWeight:"bold" }}>
                    Tài liệu mới cập nhật
                </Text> */}
                <Text>Hello</Text>
                <FlatList style = {{flex : 1}}
                    renderItem = {({item}) => {
                        return(
                            <View>
                                <Image source={{uri: item.data[1].thumbUri}} style = {{ width: 50,
    height: 50,}} />
                                <Text>Hello</Text>
                            </View>
                        )
                    }}
                    
                    data = {listData}
                

                />
            
            </View>
            </ImageBackground>
        )
    }

    

}