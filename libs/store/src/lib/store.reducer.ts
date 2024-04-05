import {createFeature, createReducer, on} from "@ngrx/store";
import {setAssetsAction, setSelectedAssetAction} from "./store.action";

export interface AssetState {
  assets: string[],
  selectedAsset: string
}

export const initialState: AssetState = {
  assets: [],
  selectedAsset: ''
}

export const storeReducer = createReducer(initialState,
  on(setAssetsAction, (state, action) => {
  return {
    ...state,
    assets: action.data
  }
}),
  on(setSelectedAssetAction, (state , action) => {
    return {
      ...state,
      selectedAsset: action.data
    }
  })
  )

