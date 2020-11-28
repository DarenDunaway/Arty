export const updateBio = (user, bio) => {
  user.bio = bio;
  return {
    type: "UPDATE_USER",
    payload: user,
  };
};
