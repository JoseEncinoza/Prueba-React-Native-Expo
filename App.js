import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

const ZohoSalesIQ = require('react-native-zohosalesiq-mobilisten').ZohoSalesIQ;

ZohoSales = {
  setKeys: async function () {
    const country = 'ar';
    console.log("COUNTRY ZOHO", country)
    // MEXICO
    if (country == 'mx') {
      console.log('pre inicio chat');
      // Felicidad Cliente - Ar (Lu)
      if (Platform.OS === 'ios') {
        console.log('quiere ejecutar ZOHO CHAT MX IOS');
        ZohoSalesIQ.init("DWv7h0RAuFeSTYUnDjIQt0ZJvGta5eA4hducg70ScAU%3D", "aOZ49KuM8aJZNHgO7FSZB59BjwUlRba8bH6XQzdQ6n59OcqZ0dvfDZAgJP2tRoDRVozO%2FzMGDJMVUjYvE2TiwUfoUdRMIQPXxr4Wxm22jVefQ%2B7dI2QKtA%3D%3D");
        ZohoSalesIQ.setLauncherVisibility(false);
        //By default, if you wish to display the chat button/bubble on the application, then use .setLauncherVisibility() API.
      }
      else {
        console.log('quiere ejecutar ZOHO CHAT MX Android');
        ZohoSalesIQ.initWithCallback("DWv7h0RAuFeSTYUnDjIQt0ZJvGta5eA4hducg70ScAU%3D", "aOZ49KuM8aJZNHgO7FSZB59BjwUlRba8bH6XQzdQ6n59OcqZ0dvfDZAgJP2tRoDR7%2BCDLJHug%2BUfw5xTyu2NO2MXBK9D6R1mvOnvE9dT1HVlkwyRkN9PKA%3D%3D", (success) => {
          if (success) {
            ZohoSalesIQ.setLauncherVisibility(false);
            ZohoSalesIQ.disableInAppNotification();
            ZohoSalesIQ.disablePreChatForms();
          }
          else {
            console.log("ERROR AL CARGAR")
          }
        });
      }

    }
    // ARGENTINA
    else {
      console.log('pre inicio chat');
      // Felicidad Cliente - Ar (Lu)
      if (Platform.OS === 'ios') {
        console.log('quiere ejecutar ZOHO CHAT AR IOS EN MEET TEST');
        ZohoSalesIQ.init("DWv7h0RAuFcTZOMdIeB6gUa%2FZgbX40G7QsjfLyAMAQkfrLzYrrP695lPLv5UIwzU", "aOZ49KuM8aJZNHgO7FSZBxD5rPSppxTNk1bFLQ7NNYKDOXG0iYdnhS0tB0VTb%2FgarnZL8N0GX3nsoqA3PK56E2RGBacLwX3Df15%2FPKF%2FO2RqIU8QrxNGSxvageETnHlfY34u2Fq4bIBdA3S7Z%2B19KNEpZZV4Jdw%2B");
        ZohoSalesIQ.setLauncherVisibility(false);
        //By default, if you wish to display the chat button/bubble on the application, then use .setLauncherVisibility() API.
      }
      else {
        console.log('quiere ejecutar ZOHO CHAT AR Android');
        ZohoSalesIQ.initWithCallback("DWv7h0RAuFcTZOMdIeB6gUa%2FZgbX40G7QsjfLyAMAQkfrLzYrrP695lPLv5UIwzU", "aOZ49KuM8aJZNHgO7FSZBxD5rPSppxTNk1bFLQ7NNYKDOXG0iYdnhS0tB0VTb%2Fgaq%2Fj2SIunoB7E%2FGenmzzcx%2FAg5pbdvEjSjJwg0b5iyYN3L%2B%2BXznmKcxvageETnHlfY34u2Fq4bIBdA3S7Z%2B19KNEpZZV4Jdw%2B", (success) => {
          if (success) {
            ZohoSalesIQ.setLauncherVisibility(false);
          }
          else {
            console.log("ERROR AL CARGAR")
          }
        });
      }
    }
  },

  openChat: async function () {
    await this.setKeys()
    ZohoSalesIQ.openChat();
  }
}

export default function App() {


  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button onPress={() => ZohoSales.openChat()} title="Chat" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
