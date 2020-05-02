import api from 'marvel-api'
import dotenv from 'dotenv'
import { MarvelResponse } from './interfaces'
import { Options } from './state/actions'

dotenv.config({ path: '../.env' })

console.log(process.env.PUBLIC_KEY)

const marvel = api.createClient({
  publicKey: '1e9e03fdc8d585786be50d077f9dc76e',
  privateKey: '472667cb287d2a0afe7a77ad07e4774fbbba67f6',
})

export const getCharacters = ({ count, page }: Options): Promise<MarvelResponse> => {
  // eg. Get 20 characters at page 3, offset 60. Characters 60-80.
  return marvel.characters.findAll(count, page * count).fail(console.error)
}

export const getCharacter = (id: string): Promise<MarvelResponse> => {
  return marvel.characters.find(id).fail(console.error)
}
