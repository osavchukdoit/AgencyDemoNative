import { View, Text, Button } from "react-native"

export const AboutScreen =({navigation})=>{
    const loadScene =()=>{
        navigation.navigate("Employers")
    }
    
    return(
        <View>
            <Text>AboutScreen</Text>
            <Button title="go to Employers" onPress={loadScene}/>
        </View>
    )
}