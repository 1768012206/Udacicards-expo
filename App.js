import React from 'react';
import { Button } from 'react-native';
import {setLocalNotification} from './utils/helper'
import {initData} from './utils/api'
import {Decks} from './components/decks'
import {Cards} from './components/cards'
import {Quiz} from './components/quiz'
import {Answer} from './components/answer'
import {Result} from './components/result'
import {AddDeck} from './components/addDeck'
import {AddQuiz} from './components/addQuiz'
import {createStackNavigator} from "react-navigation";


const Main = createStackNavigator ({
    Decks: {screen:Decks},
    Cards: {screen: Cards},
    Quiz: {screen: Quiz},
    Result: {screen: Result},
    Answer: {screen:Answer},
    AddDeck: {screen:AddDeck},
    AddQuiz: {screen:AddQuiz},
}, {
    navigationOptions:({navigation}) => ({
        title: 'Udacicards',
        headerRight: <Button title="add deck"
                             onPress={() =>
                                 navigation.navigate('AddDeck')

                             }/>
    }),
    initialRouteName: 'Decks',


})


export default class App extends React.Component {

    componentDidMount() {
        initData({
            React: {
                title: 'React',
                questions: [
                    {
                        question: 'What is React?',
                        answer: 'A library for managing user interfaces'
                    },
                    {
                        question: 'Where do you make Ajax requests in React?',
                        answer: 'The componentDidMount lifecycle event'
                    }
                ]
            },
            JavaScript: {
                title: 'JavaScript',
                questions: [
                    {
                        question: 'What is a closure?',
                        answer: 'The combination of a function and the lexical environment within which that function was declared.'
                    }
                ]
            }
        })
        setLocalNotification()
    }

  render() {
    return (
        <Main/>
    );
  }
}

