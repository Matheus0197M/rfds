import {
  StyleSheet,
  Text,
  View,
  TextInput,
  InputAccessoryView,
} from "react-native";
import { Host, Button } from "@expo/ui";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Header = () => {
  return (
    <SafeAreaProvider>
      <View style={styles.header}>
        <Text style={styles.h2}>Resolva em um FDS!</Text>
        <View style={styles.nav}>
          <TextInput style={styles.input} placeholder={"Como resolver..."} />
          <Host matchContents>
            <Button
              style={styles.button}
              label="Pesquisar"
              onPress={() => alert("Pesquisa rápida!")}
            />
          </Host>
        </View>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    marginTop: 25,
    backgroundColor: "#00839f",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
    // position: "static"
  },
  nav: {
    gap: 10,
    flexDirection: "row",
  },
  h2: {
    color: "white",
    fontSize: 20,
    fontStyle: "italic",
  },
  input: {
    backgroundColor: "#eee",
    borderRadius: 16,
  },
  button: {},
});

export default Header;
