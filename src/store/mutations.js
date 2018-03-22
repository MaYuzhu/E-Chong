import Vue from 'vue'

import {
  RECEIVE_CATEGORYS,
  RECEIVE_BRAND,
  RECEIVE_HOMEPAGE,
  RECEIVE_ALLBRANDS,
} from './mutation-type'

export default {
  [RECEIVE_CATEGORYS](state,{categorys}){
    state.categorys = categorys
  },
  [RECEIVE_BRAND](state,{brand}){
    state.brand = brand
  },
  [RECEIVE_ALLBRANDS](state,{allbrands}){
    state.allbrands = allbrands
  },
  [RECEIVE_HOMEPAGE](state,{homepage}){
    state.homepage = homepage
  }

}
