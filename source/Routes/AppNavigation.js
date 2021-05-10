import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FrontPage from '../Screens/FrontPage';

import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp';
import ForgotPassword from '../Screens/ForgotPassword';
import NewPassword from '../Screens/NewPassword';
import VerificationCode from '../Screens/VerificationCode';

const Stack = createStackNavigator();
function AppNavigation()
{
    return(
        <NavigationContainer>
            <Stack.Navigator 
            initialRouteName='FrontPage'>
                
                   <Stack.Screen name='FrontPage' component={FrontPage}/>   
                 <Stack.Screen name='Login' component={Login}/>  
                 <Stack.Screen name='SignUp' component={SignUp}/> 
                <Stack.Screen name='ForgotPassword' component={ForgotPassword}/>
                 <Stack.Screen name='VerificationCode' component={VerificationCode}/>    
                 <Stack.Screen name='NewPassword' component={NewPassword}/> 
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default AppNavigation;