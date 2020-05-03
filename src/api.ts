import dotenv from 'dotenv'
import api from 'marvel-api'
import { MarvelResponse } from './interfaces'

dotenv.config({ path: '../.env' })

console.log(process.env.PUBLIC_KEY)

const marvel = api.createClient({
  publicKey: '07933b3939e6c43444a8d1eb8c4203c7',
  privateKey: '19e187736b64ad7cfac69c29d96bfaa94c559046',
})

// export const getCharacters = ({ count, page }: Options): Promise<MarvelResponse> => {
//   return marvel.characters.findAll(count, page * count)
// }

export const getCharactersByLetter = ({ page, count }): Promise<MarvelResponse> => {
  return marvel.characters.findNameStartsWith(page, count).then((res: MarvelResponse) => {
    return {
      ...res,
      data: res.data.filter((d) => !d.thumbnail.path.includes('image_not_available')),
    }
  })
}

// export const getCharacter = (id: string): Promise<MarvelResponse> => {
//   return marvel.characters.find(id)
// }
