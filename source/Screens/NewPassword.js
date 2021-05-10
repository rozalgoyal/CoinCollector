import { Text,Icon, Container, Content} from 'native-base';
import React from 'react';
import {Image, View} from 'react-native';
import CustomAbsolute from '../Components/CustomAbsolute';
import Custombutton from '../Components/CustomButton';
import CustomInput from '../Components/CustomInput';
function NewPassword()
{
    return(
        <View style={{backgroundColor:'white',flex:1}}>
           
           <Icon name='trash'/>
          <Image source={require('../Assets/image21.jpg')} style={{alignSelf:'center',height:100,width:90,marginTop:30}}/>
          <Text style={{alignSelf:'center',fontFamily:'Berlin Sans FB',fontSize:23,marginTop:20}}>Enter New Password</Text>
          <View style={{marginTop:35}}>
              <CustomInput placeholder={'   Enter your password'}
              keyboardType="password"/>
              <CustomAbsolute title={'New Password'}/>
              <CustomInput placeholder={'   Enter your password'}
              keyboardType="password"/>
              <CustomAbsolute title={'Confirm Password'}/>
              <Custombutton title={'Save'}/>
          </View>
          
        </View>
    )
}
export default NewPassword