import React,{Component} from 'react'
import { View, Text, StyleSheet} from 'react-native'


class answer extends Component {
    render(){

        const {params} = this.props.navigation.state
        return (
        <View style={styles.deck}>
            <Text style={{fontSize:15}}> {params.data[1].questions[params.num].answer}</Text>
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
    }
})

export const Answer = answer