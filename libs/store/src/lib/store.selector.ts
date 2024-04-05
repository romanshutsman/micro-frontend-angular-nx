import {createFeature, createFeatureSelector, createSelector} from "@ngrx/store";
import {AssetState, initialState, storeReducer} from "./store.reducer";


const selectStoreFeature = createFeatureSelector<AssetState>('store');

export const selectAllAssets = createSelector(
  selectStoreFeature,
  (state: AssetState) => state.assets
);

export const selectSelectedAsset = createSelector(
  selectStoreFeature,
  (state: AssetState) => state.selectedAsset
);
export const storeFeature = createFeature({name: 'store', reducer: storeReducer} as any);
