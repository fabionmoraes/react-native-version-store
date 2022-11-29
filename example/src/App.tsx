import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import {
  getBundleId,
  getVersion,
  versionStoreWithApp,
} from 'react-native-version-store';

export default function App() {
  React.useEffect(() => {
    async function load() {
      const teste = await versionStoreWithApp();
      console.log('teste', teste);
    }

    load();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {getVersion()}</Text>
      <Text>{getBundleId()}</Text>
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
});
