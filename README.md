# react-native-version-store

## O que a lib faz?

Saber se a versão que ta na loja é superior ou inferior do app instalado.

## Por que devo usá-lo?

- Retorna os dados como URL - VERSÂO etc.
- Fácil de usar e prático

## Instalação

```bash
yarn add react-native-version-store
# or
npm i react-native-version-store --save
```

## Usage

Atualizar aplicativo quando a loja tiver com uma versão mais recente.

## Utilização da Library - versionStoreWithApp

```ts
import { versionStoreWithApp } from 'react-native-version-store';

const [result, setResult] = useState(null);

useEffect(() => {
  versionStoreWithApp().then((event) => {
    console.log('event', event);
    setResult(event);
  });
}, []);

//or

const handle = async () => {
  const result = await versionStoreWithApp({
    country: 'BR', // Country por default é BR -> Local da loja do app
  });
};
```

### Utilização da library com ALERT

```ts
import { Alert } from 'react-native-version-store';

useEffect(() => {
  Alert({
    countryStore: 'BR', // Não obrigatório por default BR
    title: 'Atualizar app',
    description: 'Atualize o seu app agora',
    buttons: {
      cancel: 'Agora Não',
      open: 'Quero Atualizar',
    },
    handleClick: (result) => console.log(result),
  });
}, []);
```

### Dados de retorno

```json
{
  "show": true,
  "url": "",
  "publishedStore": true,
  "versionApp": "",
  "versionStore": ""
}
```

## Exemplo de uso

- **show = true:** nesse caso quer dizer que tá disponível para atualização na loja.
- **show = false:** nessa caso não tem atualização disponível.
- **url:** Retorna a url da lojas (appstore / playstore)
- **publishedStore = true:** o app tá disponivel na loja.
- **publishedStore = false:** o app indisponível na loja.
- **versionApp:** traz a versão do app.
- **versionStore:** traz a versão da loja.

Utilizando a library react-native-version-store
Open [use-react-native-version-store-example](https://github.com/fabionmoraes/native-version-store)
