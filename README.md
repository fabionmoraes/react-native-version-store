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

//or

const handle = async () => {
  const result = await versionStoreWithApp('BR') // Country por default é BR
}
```
### Dados de retorno

```json
{
  "show": true,
  "url": "",
  "publishedStore": true,
}
```

show = true: Nesse caso quer dizer que tá disponível para atualização na loja.
show = false: Nessa caso não tem atualização disponível.
url: Retorna a url da lojas (appstore / playstore)
publishedStore = true: O app tá disponivel na loja.
publishedStore = false: O app indisponível na loja.

## Exemplo de uso

Utilizando a library react-native-version-store
Open [use-react-native-version-store-example](https://github.com/fabionmoraes/native-version-store)
