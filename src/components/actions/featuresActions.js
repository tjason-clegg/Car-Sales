export const ADD_FEATURE = "ADD_FEATURE";

export const addFeature = (featureId, price) => {
  console.log(featureId);
  return { type: ADD_FEATURE, payload: { id: featureId, price: price } };
};
