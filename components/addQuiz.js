import React,{Component} from 'react'
import { View, Text, StyleSheet, TextInput, Button} from 'react-native'
import {gray} from "../utils/colors";
import {addData} from "../utils/api";


class addQuiz extends Component {
    constructor() {
        super()
        this.state = {
            quiz:"",
            answer:""
        }
    }
    render(){
        const { params } = this.props.navigation.state
        return (
        <View style={styles.container}>
            <Text style={{fontSize:15}}> input the quiz:</Text>
            <TextInput
                style={{height: 40, width:180, borderColor: 'gray', borderWidth: 0}}
                onChangeText={(quiz) => this.setState({quiz})}
                value={this.state.quiz}
            />
            <Text style={{fontSize:15}}> input the answer:</Text>
            <TextInput
                style={{height: 40, width:180, borderColor: 'gray', borderWidth: 0}}
                onChangeText={(answer) => this.setState({answer})}
                value={this.state.answer}
            />
            <Button style={styles.button}
                    title="Submit"
                    color={gray}
                    onPress={() => {
                        const name = params.data[1].title
                        const temp = {}
                        temp[name] = {
                            title: params.data[1].title,
                            questions: [
                                ...params.data[1].questions,
                                {
                                    question: this.state.quiz,
                                    answer: this.state.answer
                                }
                            ]
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

export const AddQuiz = addQuiz