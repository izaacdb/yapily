import api from 'marvel-api'
import dotenv from 'dotenv'
import { MarvelResponse } from './interfaces'

dotenv.config()

export const count = 20

const marvel = api.createClient({
  publicKey: process.env.PUBLIC_KEY,
  privateKey: process.env.PRIVATE_KEY,
})

export const getCharacters = (index = '0'): Promise<MarvelResponse> => {
  return marvel.characters.findAll(count, index).fail(console.error)
}

export const getCharacter = (id: string): Promise<MarvelResponse> => {
  return marvel.characters.find(id).fail(console.error)
}
