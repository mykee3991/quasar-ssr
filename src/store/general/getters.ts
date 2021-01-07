import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { GeneralStateInterface } from './state';

const getters: GetterTree<GeneralStateInterface, StateInterface> = {
  pageData (state) {
    return state.pageData
  }
};

export default getters;
