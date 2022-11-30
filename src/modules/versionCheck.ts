import { Platform } from 'react-native';
import { getVersion, getBundleId } from './nativeModule';

const bundleId = getBundleId();
const country = 'BR';

interface IVerifyVersionStoreWithApp {
  country?: string;
}

const getAndroidVersion = async (getCountry?: string) => {
  const urlGoogle = 'https://play.google.com/store/apps/details';
  const textError = `App with bundle ID "${bundleId}" not found in Google Play.`;

  const url = `${urlGoogle}?id=${bundleId}&hl=${getCountry || country}`;
  let res;

  try {
    const responseFetch = await fetch(url, {
      method: 'GET',
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.96 Mobile Safari/537.36',
      },
    });

    res = await responseFetch.text();
  } catch (e: any) {
    console.log(e.response);
    if (e.response && e.response.status && e.response.status === 404) {
      throw new Error(textError);
    }
    throw e;
  }

  let version: string = '';

  if (res.includes('Introuvable')) {
    console.warn(textError);
  } else {
    // @ts-ignore
    version = res.match(/\[\[\[['"]((\d+\.)+\d+)['"]\]\],/)[1];
  }

  return {
    version: version || null,
    releasedAt: new Date().toISOString(),
    notes: '',
    url: `${urlGoogle}?id=${bundleId}&hl=${country}`,
    lastChecked: new Date().toISOString(),
    publishedStore: !!version,
  };
};

const getIosVersion = async (getCountry?: string) => {
  const url = `https://itunes.apple.com/lookup?lang=en&bundleId=${bundleId}&country=${
    getCountry || country
  }&_=${new Date().valueOf()}`;

  const response = await fetch(url);
  let res = await response.json();

  if (!res || !('results' in res)) {
    throw new Error('Unknown error connecting to iTunes.');
  }
  // @ts-ignore
  if (!res.results.length) {
    console.warn('App for this bundle ID not found.');
  }
  // @ts-ignore
  res = res.results[0];

  return {
    version: res?.version || null,
    released: res?.currentVersionReleaseDate || res?.releaseDate || null,
    notes: res?.releaseNotes || '',
    url: res?.trackViewUrl || res?.artistViewUrl || res?.sellerUrl || null,
    lastChecked: new Date().toISOString(),
    publishedStore: !!res?.version,
  };
};

export const versionStoreWithApp = async (
  data: IVerifyVersionStoreWithApp | undefined = undefined
): Promise<{
  show: boolean;
  url: string;
  publishedStore: boolean;
  versionApp: string;
  versionStore: string;
}> => {
  const result =
    Platform.OS === 'ios'
      ? await getIosVersion(data?.country)
      : await getAndroidVersion(data?.country);

  const versionApp = getVersion();
  const versionStore = result.version;

  const show = !!(versionApp < versionStore);

  return {
    show,
    url: result.publishedStore ? result.url : '',
    publishedStore: result.publishedStore,
    versionApp: versionApp ? String(versionApp) : '',
    versionStore,
  };
};
