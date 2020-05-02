import { MarvelResponse } from '../interfaces'
import { getCharacters } from '../api'

export interface Options {
  path: string
  count: number
  index: number
}

export interface Action {
  type: ActionType
  payload: any
}

export interface Payload {
  options: Options
  response?: MarvelResponse
  errorMessage?: string
}

export enum ActionType {
  CHARACTERS_REQUEST_PENDING = '[Characters] Making a request to Marvel API',
  CHARACTERS_REQUEST_SUCCEEDED = '[Characters] Request to Marvel API succeeded',
  CHARACTERS_REQUEST_FAILED = '[Characters] Request to Marvel API failed',
}

export const charactersRequestPending = (options: Options): Action => {
  return { type: ActionType.CHARACTERS_REQUEST_PENDING, payload: { options } }
}

export const charactersRequestSuccess = (options: Options, response: MarvelResponse) => {
  return { type: ActionType.CHARACTERS_REQUEST_SUCCEEDED, payload: { response, options } }
}

export const charactersRequestFailed = (options: Options, errorMessage: string) => {
  return { type: ActionType.CHARACTERS_REQUEST_FAILED, payload: { options, errorMessage } }
}

export function charactersRequestThunk(options: Options) {
  return (dispatch) => {
    dispatch(charactersRequestPending(options))
    getCharacters('0').then((response) => {
      if (response?.data?.length > 0 && response?.meta) {
        dispatch(charactersRequestSuccess(options, response))
      } else {
        dispatch(charactersRequestFailed(options, 'Empty result from api'))
      }
    })
  }
}
