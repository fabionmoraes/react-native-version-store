import VersionStore from '../nativeInterface';

export function getBundleId() {
  return VersionStore.getBundleId();
}

export function getVersion() {
  return VersionStore.getVersion();
}
