import {AsyncStorage} from 'react-native'

export const initData = (data) => {
    AsyncStorage.setItem('decks',JSON.stringify(data),()=>{
    })
}


export const getData = () => {
    return AsyncStorage.getItem('decks', (err, result)=> {
        return result
    })
}

export const addData = (data) => {
    AsyncStorage.mergeItem('decks',JSON.stringify(data),()=> {
    })
}