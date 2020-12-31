import * as React from "react-native";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  StyleSheet,
} from "react-native";
import * as firebase from "firebase";
import db from "../config";
import LottieView from "lottie-react-native";

export default class WelcomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      emailId: "",
      password: "",
    };
  }
  UserLogin = async (email, password) => {
    if (email && password) {
      try {
        const response = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);
        if (response) {
          alert("Successfully Loged In");
        }
      } catch (error) {
        alert("Wrong email or password");
      }
    }
    UserSignup = async (email, password) => {
      if (email && password) {
        try {
          const response = await firebase
            .auth()
            .createUserWithEmailAndPassword(email, password);
          if (response) {
            alert("Successfully Signed Up");
          }
        } catch (error) {
          alert(error.message);
        }
      }
    };
  };
  render() {
    return (
      <View style={styles.profileContainer}>
        <LottieView
          source={require("../assets/Barter.json")}
          style={{ width: "60%" }}
          autoPlay
          loop
        />
        <TextInput
          style={styles.loginBox}
          placeholder="abc@example.com"
          keyboardType="email-address"
          value={this.state.emailId}
          onChangeText={(text) => {
            this.setState({
              emailId: text,
            });
          }}
        ></TextInput>
        <TextInput
          style={styles.loginBox}
          placeholder="abc@example.com"
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={(text) => {
            this.setState({
              password: text,
            });
          }}
        ></TextInput>
        <TouchableOpacity
          style={[styles.button, { margin: 20 }]}
          onPress={this.UserLogin()}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { margin: 20 }]}
          onPress={this.UserSignup()}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8BE85",
  },
  profileContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 65,
    fontWeight: "300",
    paddingBottom: 30,
    color: "#ff3d00",
  },
  loginBox: {
    width: 300,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor: "#ff8a65",
    fontSize: 20,
    margin: 10,
    paddingLeft: 10,
  },
  button: {
    width: 300,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "#ff9800",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16,
  },
  buttonText: {
    color: "#ffff",
    fontWeight: "200",
    fontSize: 20,
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
  },
});
