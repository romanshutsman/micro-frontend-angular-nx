import {createAction, props} from "@ngrx/store";


export const setAssetsAction = createAction('[Root] Set Assets', props<{ data: string[] }>())

export const setSelectedAssetAction = createAction('[Root] Set Asset', props<{ data: string }>())
