export const updateUsername = (user, username) => {
  user.username = username;
  return {
    type: "UPDATE_USERNAME",
    payload: user,
  };
};
