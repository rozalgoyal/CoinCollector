import React from 'react';
import {View,TouchableOpacity, Text} from 'react-native';
function Custombutton({title,onPress,...props})
{
    return(
        
            <View>
              <TouchableOpacity onPress={onPress} style={{backgroundColor:'#D3AE36',height:50,width:'80%',alignSelf:'center',borderRadius:10,marginTop:30}}>
                  <Text  style={{color:'black',textAlign:'center',fontSize:20,marginTop:10,fontFamily:'Berlin Sans FB'}}>{title}</Text>
              </TouchableOpacity>
            </View>
        
    )
}
export default Custombutton