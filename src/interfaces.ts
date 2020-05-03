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

export interface Character {
  loaded?: boolean
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
  data: Character[]
  meta: Meta
}

export interface RouteParams {
  page: string
  id: string
}

export interface Options {
  count: number
  page: string
}

export interface Payload {
  options: Options
  response?: MarvelResponse
  errorMessage?: string
}

export interface Action {
  type: ActionType
  payload: Payload
}

export enum ActionType {
  CHARACTERS_REQUEST_PENDING = '[Characters] Making a request to Marvel API',
  CHARACTERS_REQUEST_SUCCEEDED = '[Characters] Request to Marvel API succeeded',
  CHARACTERS_REQUEST_FAILED = '[Characters] Request to Marvel API failed',
}
