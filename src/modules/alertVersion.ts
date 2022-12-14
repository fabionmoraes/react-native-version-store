import { Alert as AlertRN, Linking } from 'react-native';
import { versionStoreWithApp } from './versionCheck';

type AlertParams = {
  countyStore?: string;
  title: string;
  description: string;
  buttons?: {
    cancel: string;
    open: string;
  };
  handleClick?: (res: boolean) => void;
};

export const Alert = async (data: AlertParams) => {
  const countryStore = data?.countyStore;
  const result = await versionStoreWithApp(
    countryStore
      ? {
          country: countryStore,
        }
      : undefined
  );

  if (result.show) {
    AlertRN.alert(data.title, data.description, [
      {
        text: data.buttons ? data.buttons.cancel : 'Cancel',
        onPress: () => (data.handleClick ? data.handleClick(true) : {}),
        style: 'cancel',
      },
      {
        text: data.buttons ? data.buttons.open : 'Open',
        onPress: () => {
          if (data.handleClick) {
            data.handleClick(true);
          }

          Linking.canOpenURL(result.url).then((supported) => {
            if (supported) Linking.openURL(result.url);
          });
        },
      },
    ]);
  }
};
