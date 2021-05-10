import React from 'react';
import {View,TextInput} from 'react-native';



function CustomInput({placeholder})
{
    return(
        <View>
            <TextInput placeholder={placeholder} placeholderTextColor="#00000061" 
            style={{height:50,width:'80%',borderRadius:9,borderWidth:1,borderColor:'#959593',marginTop:28,alignSelf:'center'}}></TextInput>
        </View>
    )
}
export default CustomInput