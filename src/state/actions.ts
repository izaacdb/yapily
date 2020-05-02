import { MarvelResponse } from '../interfaces'
import { getCharacters } from '../api'

export interface Options {
  count: number
  page: number
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

export const charactersRequestPending = (options: Options): Action => ({
  type: ActionType.CHARACTERS_REQUEST_PENDING,
  payload: { options },
})

export const charactersRequestSuccess = (options: Options, response: MarvelResponse) => ({
  type: ActionType.CHARACTERS_REQUEST_SUCCEEDED,
  payload: { response, options },
})

export const charactersRequestFailed = (options: Options, errorMessage: string) => ({
  type: ActionType.CHARACTERS_REQUEST_FAILED,
  payload: { options, errorMessage },
})

export const charactersRequestThunk = (options: Options) => {
  return (dispatch) => {
    dispatch(charactersRequestPending(options))
    getCharacters(options).then((response) => {
      if (response?.data?.length > 0 && response?.meta) {
        dispatch(charactersRequestSuccess(options, response))
      } else {
        dispatch(charactersRequestFailed(options, 'Empty result from api'))
      }
    })
  }
}
