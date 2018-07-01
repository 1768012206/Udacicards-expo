import React,{Component} from 'react'
import { View, Text, StyleSheet, TextInput, Button} from 'react-native'
import {gray} from '../utils/colors'
import {addData, getData} from '../utils/api'

class addDeck extends Component {
    constructor() {
        super()
        this.state = {
            text:"",
        }
    }
    render(){

        return (
        <View style={styles.container}>
            <Text style={{fontSize:15}}> input the deck name:</Text>
            <TextInput
                style={{height: 40, width:180, borderColor: 'gray', borderWidth: 0}}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
            />
            <Button style={styles.button}
                    title="Submit"
                    color={gray}
                    onPress={() => {
                        const name = this.state.text
                        const temp = {}
                        temp[name] = {
                            title: this.state.text,
                            questions: []
                        }
                        addData(temp)
                        this.props.navigation.navigate('Decks', {fresh:temp})
                    }}
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

export const AddDeck = addDeck