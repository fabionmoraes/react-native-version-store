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

const [result, setResult] = useState(null)

useEffect(() => {
  versionStoreWithApp().then(event => {
    console.log('event', event)
    setResult(event)
  })
}, [])
```
### Dados de retorno

```json
{
  "show": true, // or false,
  "url": "", // or url appstore / playstore
  "publishedStore": true, // or false not published in the store
}
```

## Exemplo de uso

Utilizando a library react-native-version-store
Open [use-react-native-version-store-example](https://github.com/fabionmoraes/native-version-store)
