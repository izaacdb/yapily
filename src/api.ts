import api from 'marvel-api'
import dotenv from 'dotenv'
import { MarvelResponse } from './interfaces'

dotenv.config({ path: '../.env' })

export const count = 20

console.log(process.env.PUBLIC_KEY)

const marvel = api.createClient({
  publicKey: '1e9e03fdc8d585786be50d077f9dc76e',
  privateKey: '472667cb287d2a0afe7a77ad07e4774fbbba67f6',
})

export const getCharacters = (index = '0'): Promise<MarvelResponse> => {
  return marvel.characters.findAll(count, index).fail(console.error)
}

export const getCharacter = (id: string): Promise<MarvelResponse> => {
  return marvel.characters.find(id).fail(console.error)
}
