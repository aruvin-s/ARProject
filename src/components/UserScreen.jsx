import { firebase } from '@react-native-firebase/auth';
import { Text, View } from 'react-native'

const userScreen = () => {
    const displayName = null
    firebase.auth().onAuthStateChanged((user) => {
        if(user){
            displayName= user.displayName
        }
    })
    // if (user !== null) {
    //     displayName = user.displayName
    // }
    return(
        <View style={{flex:0, justifyContent:'center', alignItems:'center'}}>
            <Text>{displayName}</Text>
        </View>
    )
}

export default userScreen; 