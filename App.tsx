import { SafeAreaProvider } from "react-native-safe-area-context";
import  Header  from "../rfds/components/header";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
// import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function App() {
  // const insets = useSafeAreaInsets();

  return (
    <SafeAreaProvider>
      <Header />
        <View style={styles.container}>
          <Text>Resolva em um FDS!</Text>
          <View id="gridDisplay" style={styles.gridDisplay}>

            <View id="gridEsquerda" style={styles.gridColuna}>
              <View style={styles.comodo}>
                <Image
                  style={styles.imgComodo}
                  source={require("../rfds/assets/todas.png")}
                  placeholder={require("../rfds/assets/todas.png")}
                  contentFit="cover"
                  transition={1000}
                />
                <Text style={styles.nomeComodo}>Todas as soluções</Text>
              </View>
              <View style={styles.comodo}>
                <Image
                  style={styles.imgComodo}
                  source={require("../rfds/assets/banheiro.png")}
                  placeholder={require("../rfds/assets/banheiro.png")}
                  contentFit="cover"
                  transition={1000}
                />
                <Text style={styles.nomeComodo}>Banheiro</Text>
              </View>
              <View style={styles.comodo}>
                <Image
                  style={styles.imgComodo}
                  source={require("../rfds/assets/sala.png")}
                  placeholder={require("../rfds/assets/sala.png")}
                  contentFit="cover"
                  transition={1000}
                />
                <Text style={styles.nomeComodo}>Sala</Text>
              </View>
              <View style={styles.comodo}>
                <Image
                  style={styles.imgComodo}
                  source={require("../rfds/assets/cozinha.png")}
                  placeholder={require("../rfds/assets/cozinha.png")}
                  contentFit="cover"
                  transition={1000}
                />
                <Text style={styles.nomeComodo}>Cozinha</Text>
              </View>
            </View>

            <View id="gridDireita" style={styles.gridColuna}>
              <View style={styles.comodo}>
                <Image
                  style={styles.imgComodo}
                  source={require("../rfds/assets/quarto.png")}
                  placeholder={require("../rfds/assets/quarto.png")}
                  contentFit="cover"
                  transition={1000}
                />
                <Text style={styles.nomeComodo}>Quarto</Text>
              </View>
              <View style={styles.comodo}>
                <Image
                  style={styles.imgComodo}
                  source={require("../rfds/assets/corredor.png")}
                  placeholder={require("../rfds/assets/corredor.png")}
                  contentFit="cover"
                  transition={1000}
                />
                <Text style={styles.nomeComodo}>Corredor (es)</Text>
              </View>
              <View style={styles.comodo}>
                <Image
                  style={styles.imgComodo}
                  source={require("../rfds/assets/areaExterna.png")}
                  placeholder={require("../rfds/assets/areaExterna.png")}
                  contentFit="cover"
                  transition={1000}
                />
                <Text style={styles.nomeComodo}>Área externa</Text>
              </View>
              <View style={styles.comodo}>
                <Image
                  style={styles.imgComodo}
                  source={require("../rfds/assets/outros.png")}
                  placeholder={require("../rfds/assets/outros.png")}
                  contentFit="cover"
                  transition={1000}
                />
                <Text style={styles.nomeComodo}>Outros</Text>
              </View>
            </View>
          </View>
          <StatusBar style="auto" />
        </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  gridDisplay: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "95%",
    backgroundColor: "#2fa0e8",
    padding: 10,
    columnGap: 5
  },

  gridColuna: {
    gap: 10,
    width: "50%",
  },

  comodo: {
    display: "flex",
    flexDirection: "column",
    height: 80,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 14,
  },

  imgComodo: {
    width: "100%",
    height: 80,
    borderRadius: 14,
  },

  nomeComodo: {
    backgroundColor: "#64646480",
    color: "white",
    fontSize: 18,
    position: "relative",
    bottom: 50,
    left: 0,
    zIndex: 10,
    padding: 8
  },

});
