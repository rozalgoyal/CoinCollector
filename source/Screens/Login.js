import { CheckBox ,Text} from 'native-base';
import React from 'react';
import {View,Image,TouchableOpacity} from 'react-native';
import CustomAbsolute from '../Components/CustomAbsolute';

import Custombutton from '../Components/CustomButton';
import CustomInput from '../Components/CustomInput';

function Login(props)
{
    return(
        <View style={{flex:1,backgroundColor:'white'}}>
            <Image source={require('../Assets/image21.jpg')} style={{alignSelf:'center',height:130,width:120,marginTop:40}}/>
            
           <CustomInput placeholder={'     Enter your email id'} 
           keyboardType="email-address" />
           <CustomAbsolute title={'Email'}  />
          
           <CustomInput placeholder={'     Enter your password'}
           keyboardType="password" 
           secureTextEntry={true}/>
           <CustomAbsolute title={'Password'}  />

           <View style={{flexDirection:'row',marginLeft:30,marginTop:20,color:'#707070'}} >
           <CheckBox value={false} color='#707070' style={{borderWidth:0.5,borderRadius:4,borderWidth:1}}/>
           <Text style={{marginLeft:20,color:'#707070',fontSize:15}}>Remember</Text>
           <TouchableOpacity onPress={()=>props.navigation.navigate('VerificationCode')}>
                <Text style={{color:'#707070',fontSize:15,marginLeft:80}}>Forgot Password?</Text>
          </TouchableOpacity>
           </View>
           <Custombutton title={'Login'} />
           <View  style={{flexDirection:'row',marginLeft:70}}>
           <Text style={{marginTop:20,textAlign:'center',color:'#00000061'}}>Don't have an account?</Text>
           <TouchableOpacity 
           onPress={()=>props.navigation.navigate('SignUp')}><Text  style={{marginTop:20,textAlign:'center',color:'#707070'}}>Sign Up</Text></TouchableOpacity>
           </View>
        </View>
    )
}
export default Login