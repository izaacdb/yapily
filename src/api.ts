import dotenv from 'dotenv'
import api from 'marvel-api'
import { MarvelResponse } from './interfaces'

dotenv.config({ path: '../.env' })

console.log(process.env.PUBLIC_KEY)

const marvel = api.createClient({
  publicKey: process.env.REACT_APP_PUBLIC_KEY,
  privateKey: process.env.REACT_APP_PRIVATE_KEY,
})

// export const getCharacters = ({ count, page }: Options): Promise<MarvelResponse> => {
//   return marvel.characters.findAll(count, page * count)
// }

export const getCharactersByLetter = ({ page, count }): Promise<MarvelResponse> => {
  return marvel.characters.findNameStartsWith(page, count).then((res: MarvelResponse) => {
    console.log(
      JSON.stringify({
        ...res,
        data: res.data.filter((d) => !d.thumbnail.path.includes('image_not_available')),
      })
    )
    return {
      ...res,
      data: res.data.filter((d) => !d.thumbnail.path.includes('image_not_available')),
    }
  })
}

// export const getCharacter = (id: string): Promise<MarvelResponse> => {
//   return marvel.characters.find(id)
// }
