import React,{Component} from 'react'
import { View, Text, StyleSheet,Button} from 'react-native'
import {gray} from "../utils/colors";


class result extends Component {
    render(){
        const { params } = this.props.navigation.state
        const { navigation } = this.props
        return (
        <View style={styles.container}>
            <Text> 您本次的正确率为:{(parseFloat(params.correct)/parseFloat(params.num) * 100).toFixed(2)} %</Text>
            <Button style={styles.button}
                    title="Back to Home"
                    color={gray}
                    onPress={() =>
                        navigation.navigate('Decks')
                    }
            />
        </View>


        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    deck: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        margin:20
    },
    button:{
        padding:50
    }
})

export const Result = result