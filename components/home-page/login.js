import React from 'react';
import { View, Text } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage, Header, Button } from 'react-native-elements'

        // <FormValidationMessage>{'Username is incorrect'}</FormValidationMessage>
        // <FormValidationMessage>{'Password is incorrect'}</FormValidationMessage>
const Login = (props) => {
  return(
    <View style={{marginBottom: 30}}>
      <View>
        <Header
          backgroundColor='#800000'
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Login', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
      </View>
      <View>
        <FormLabel>Email</FormLabel>
        <FormInput />

        <FormLabel>Password</FormLabel>
        <FormInput secureTextEntry={true}/>

        <Button
          raised
          backgroundColor='#800000'
          icon={{name: 'arrow-circle-right', type: 'font-awesome'}}
          title='Submit'
        />

      </View>
    </View>
  )
}

export default Login;