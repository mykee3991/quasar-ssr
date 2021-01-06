export interface GeneralStateInterface {
  prop: boolean;
  pageData: any;
}

function state(): GeneralStateInterface {
  return {
    prop: false,
    pageData: null,
  }
};

export default state;
