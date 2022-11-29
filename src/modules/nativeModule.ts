import VersionStore from '../nativeInterface';
import { Platform } from 'react-native';

export function getBundleId() {
  return Platform.OS === 'android'
    ? VersionStore.getBundleId()
    : VersionStore.getBundleId;
}

export function getVersion() {
  return Platform.OS === 'android'
    ? VersionStore.getVersion()
    : VersionStore.getVersion;
}
