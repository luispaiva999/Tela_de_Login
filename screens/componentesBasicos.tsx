import React from "react";
import {
  SafeAreaView,
  Alert,
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";

export type Props = {
  name: string;
};

const Separator = () => <View style={styles.separator} />;

const ComponentesBasicosScreen: React.FC<Props> = ({ name }) => {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
  return (
    <View style={styles.container}>
      <Button
        title="Botão 1"
        onPress={() => Alert.alert("Button with adjusted color pressed")}
      />
      <Button
        title="Botão 2"
        color="black"
        onPress={() => Alert.alert("Button with adjusted color pressed")}
      />
      <Button
        title="Botão titulo define a largura"
        color="red"
        onPress={() => Alert.alert("Button with adjusted color pressed")}
      />
      <View>
        <Text style={styles.title}>
          Todas as interações para o componente são desabilitadas.
        </Text>
        <Button
          title="Press me"
          disabled
          onPress={() => Alert.alert("Cannot press this one")}
        />
      </View>
      <Separator />
      <Text style={styles.title}>
        Esta estratégia de layout permite que o título defina a largura do
        botão.
      </Text>{" "}
      <Separator />
      <View style={styles.fixToText}>
        <Button
          title="Left button"
          onPress={() => Alert.alert("Left button pressed")}
        />
        <Button
          title="Right button"
          onPress={() => Alert.alert("Right button pressed")}
        />
      </View>
      <Separator />
      <View>
        <TextInput style={styles.input} />
      </View>
      {/* <View>
        <Text> Please enter your credentials</Text>
        <TextInput label="Username" left={<TextInput.Icon name="account" />} />
        <TextInput
          label="Password"
          secureTextEntry
          left={<TextInput.Icon name="form-textbox-password" />}
        />
      </View> */}
      <view>
        <TextInput style={styles.input} secureTextEntry={true} />
        <TextInput style={styles.input} keyboardType="phone-pad" />
        <TextInput style={styles.input} keyboardType="email-address" />
      </view>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  greeting: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 16,
  },
  Button: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 16,
    color: "blue",
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "black",
    color: "black",
    //borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default ComponentesBasicosScreen;
