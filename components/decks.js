import React,{Component} from 'react'
import { View, Text, StyleSheet,Button} from 'react-native'
import {Cards} from "./cards"
import {getData} from '../utils/api'

function Deck ({ data, navigation}) {
    return (
        <View style={styles.container}>
            <Text>{data[1].title}</Text>
            <Text>{data[1].questions.length} quizzes</Text>
            <Button
                title="Cards"
                onPress={() =>
                    navigation.navigate('Cards', {
                        data: data
                    })
                }
            />
        </View>
    )
}


class decks extends Component {

    constructor() {
        super()
        this.state = {
            decks:{}
        }
    }
    componentDidMount() {
        getData().then((data)=>{
            data = JSON.parse(data)
            this.setState({decks:data})
        })
    }
    componentWillReceiveProps() {
        getData().then((data)=>{
            data = JSON.parse(data)
            this.setState({decks:data})
        })
    }
    render(){

        return (
            <View style={styles.deck}>
                {Object.entries(this.state.decks).map((data)=>(
                    <Deck data={data} navigation={this.props.navigation} key={data} />
                ))}
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

export const Decks = decks