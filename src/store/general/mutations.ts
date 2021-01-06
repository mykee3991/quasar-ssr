import { MutationTree } from 'vuex';
import { GeneralStateInterface } from './state';

const mutation: MutationTree<GeneralStateInterface> = {
  setPageData (state: GeneralStateInterface, data: any) {
    state.pageData = data
  }
};

export default mutation;
