import React, {useState} from 'react';
import { Button, StyleSheet, Text,  View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { TextInput } from 'react-native-paper';

export type Props = {
  name: string; 
};

const LoginScreen: React.FC<Props> = ({
  name, 
}) => { 

  const [viewPassword, setViewPassword] = useState(true);
  const [viewPasswordIcon, setViewPasswordIcon] = useState("eye-off");
  
 const getViewPassword = () => {
  setViewPassword( !viewPassword ) 
  setViewPasswordIcon( viewPassword?"eye":"eye-off" )  
}; 

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>
      LoginScreen {name} 
      </Text>
      <TextInput
      label="Password"
      secureTextEntry =  {viewPassword} 
      right={<TextInput.Icon name={viewPasswordIcon}  onPress={() => getViewPassword()} />
    }
    />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16
  }
});

export default LoginScreen;

function setState(arg0: (state: any) => { viewPassword: any; }): void {
  throw new Error('Function not implemented.');
}
