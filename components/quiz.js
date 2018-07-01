import React,{Component} from 'react'
import { View, Text, StyleSheet, Button, Animated} from 'react-native'
import {lightPurp, blue, red, gray} from '../utils/colors'
class quiz extends Component {
    constructor(props) {
     super(props);
     this.state = {
       fadeAnim: new Animated.Value(1), // init opacity 0
     };
   }
    render(){
        const { params } = this.props.navigation.state
        const { navigation } = this.props
        if(params.num < params.data[1].questions.length - 1) {
            return (
                <Animated.View>
                    <View style={[styles.status]}>
                        <Text>{params.num+1}/{params.data[1].questions.length}</Text>
                    </View>
                    <View style={styles.container}>
                        <Text
                            style={{fontSize:15, alignItems:'center'}}>
                            {params.data[1].questions[params.num].question}
                        </Text>
                        <Button
                            title="Answer"
                            color={gray}
                            onPress={() =>
                                navigation.navigate('Answer', {data: params.data, num: params.num, correct:params.correct})
                            }
                        />
                        <View style={styles.button}>
                            <Button
                                title="Correct"
                                color={blue}
                                onPress={() =>
                                    navigation.navigate('Quiz', {data: params.data, num: params.num + 1, correct:params.correct+1})
                                }
                            />
                            <Button
                                title="Wrong"
                                color={red}
                                onPress={() =>
                                    navigation.navigate('Quiz', {data: params.data, num: params.num + 1, correct:params.correct})
                                }
                            />
                            <Button
                                title="Next Quiz"
                                color={lightPurp}
                                onPress={() =>
                                    navigation.navigate('Quiz', {data: params.data, num: params.num + 1})
                                }
                            />
                        </View>
                    </View>
                </Animated.View>
            )
        } else {
            return(
                <Animated.View>
                    <View style={styles.status}>
                        <Text>{params.num+1}/{params.data[1].questions.length}</Text>
                    </View>
                    <View style={styles.container}>
                        <Text
                            style={{fontSize:15, alignItems:'center'}}>
                            {params.data[1].questions[params.num].question}
                        </Text>
                        <Button
                            title="Answer"
                            color={gray}
                            onPress={() =>
                                navigation.navigate('Answer', {data: params.data, num: params.num, correct:params.correct})
                            }
                        />
                        <View style={styles.button}>
                            <Button style={styles.button}
                                    title="Correct"
                                    color={blue}
                                    onPress={() =>
                                        navigation.navigate('Result', {data: params.data, num: params.num + 1, correct:params.correct+1})
                                    }
                            />
                            <Button style={styles.button}
                                    title="Wrong"
                                    color={red}
                                    onPress={() =>
                                        navigation.navigate('Result', {data: params.data, num: params.num + 1, correct:params.correct})
                                    }
                            />
                        </View>
                    </View>
                </Animated.View>
            )
        }
    }
}

const styles = StyleSheet.create(
    {
        container: {
            alignItems: 'center',
            justifyContent: 'center',
            margin:20
        },
        button:{
            alignItems: 'stretch',
            justifyContent: 'center',
            padding:50,
            margin:50
        },
        text:{
            justifyContent: 'space-around',
        },
        status:{
            flex: 1,
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
        },
        animate:{
            transform: [{rotateY:'45deg'}]
        }
    }
)

export const Quiz = quiz