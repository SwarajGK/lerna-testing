import lodash from "lodash";

export const cloneDeepFromLodash = (object) => {
  return lodash.cloneDeep(object);
};

export const concat = (array, value) => {
  return lodash.concat(array, value);
};
