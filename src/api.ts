import dotenv from 'dotenv'
import api from 'marvel-api'
import { MarvelResponse } from './interfaces'
import { Options } from './state/actions'

dotenv.config({ path: '../.env' })

console.log(process.env.PUBLIC_KEY)

const marvel = api.createClient({
  publicKey: '07933b3939e6c43444a8d1eb8c4203c7',
  privateKey: '19e187736b64ad7cfac69c29d96bfaa94c559046',
})

export const getCharacters = ({ count, page }: Options): Promise<MarvelResponse> => {
  // eg. Get 20 characters at page 3, offset 60. Characters 60-80.
  return marvel.characters.findNameStartsWith('s')
}

export const getCharacter = (id: string): Promise<MarvelResponse> => {
  return marvel.characters.find(id)
}
