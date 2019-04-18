import React, { Component } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import api from "../../services/api";
import styles from "./styles";
import logo from "../../assets/logo.png";

export default class Main extends Component {
  state = {
    newBox: ""
  };

  handleSingIn = async () => {
    const response = await api.post("boxes", {
      title: this.state.newBox
    });

    this.props.navigation.navigate("Box");
  };
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} height={55} width={200} source={logo} />

        <TextInput
          style={styles.input}
          placeholder="Crie um box"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          value={this.state.newBox}
          onChangeText={value => {
            this.setState({ newBox: value });
          }}
        />

        <TouchableOpacity onPress={this.handleSingIn} style={styles.button}>
          <Text style={styles.buttonText}>Criar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
