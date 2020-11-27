//Couldn't figure out how to add a post,
//so this is technically not used

export const addPost = (post) => {
  return {
    type: "ADD_POST",
    payload: post,
  };
};
