export interface Thumbnail {
  path: string
  extension: string
}

export interface Comics {
  available: number
  collectionURI: string
  items: Item[]
  returned: number
}

export interface Series {
  available: number
  collectionURI: string
  items: Item[]
  returned: number
}

export interface Item {
  resourceURI: string
  name: string
  type?: string
}

export interface Stories {
  available: number
  collectionURI: string
  items: Item[]
  returned: number
}

export interface Events {
  available: number
  collectionURI: string
  items: Item[]
  returned: number
}

export interface Url {
  type: string
  url: string
}

export interface Datum {
  id: number
  name: string
  description: string
  modified: Date
  thumbnail: Thumbnail
  resourceURI: string
  comics: Comics
  series: Series
  stories: Stories
  events: Events
  urls: Url[]
}

export interface Meta {
  offset: number
  limit: number
  total: number
  count: number
}

export interface MarvelResponse {
  data: Datum[]
  meta: Meta
}
