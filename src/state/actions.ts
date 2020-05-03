import { getCharactersByLetter } from '../api'
import { Action, ActionType, MarvelResponse, Options } from '../interfaces'

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
    getCharactersByLetter(options).then((response) => {
      if (response?.data?.length > 0 && response?.meta) {
        dispatch(charactersRequestSuccess(options, response))
      } else {
        dispatch(charactersRequestFailed(options, 'Empty result from api'))
      }
    })
  }
}
