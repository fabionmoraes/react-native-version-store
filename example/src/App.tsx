import * as React from 'react';

import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import {
  getBundleId,
  getVersion,
  versionStoreWithApp,
  Alert,
} from 'react-native-version-store';

export default function App() {
  React.useEffect(() => {
    async function load() {
      const teste = await versionStoreWithApp();
      console.log('teste', teste);
    }

    load();
  }, []);

  const handleAlertDefault = () => {
    Alert({
      title: 'Atualizar app',
      description: 'Atualize o seu app agora',
      buttons: {
        cancel: 'Agora Não',
        open: 'Quero Atualizar',
      },
      handleClick: (result) => console.log(result),
    });
  };

  return (
    <View style={styles.container}>
      <Text>Result: {getVersion()}</Text>
      <Text>{getBundleId()}</Text>

      <View>
        <TouchableHighlight onPress={handleAlertDefault}>
          <Text style={styles.link}>Clique aqui Alert Default</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  link: {
    color: '#000',
    fontSize: 12,
  },
});
