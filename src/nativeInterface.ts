import { NativeModules, Platform } from 'react-native';

interface DeviceInfoModule {
  getBundleId: () => string;
  getVersion: () => string;
}

let VersionStore: DeviceInfoModule | undefined = NativeModules.VersionStore;

const LINKING_ERROR =
  `The package 'react-native-version-store' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

if (!VersionStore) {
  // Produce an error if we don't have the native module
  if (
    Platform.OS === 'android' ||
    Platform.OS === 'ios' ||
    // @ts-ignore
    Platform.OS === 'dom'
  ) {
    throw new Error(LINKING_ERROR);
  }
}

export default VersionStore as DeviceInfoModule;
