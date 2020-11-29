export const updateOccupation = (user, occupation) => {
  user.occupation = occupation;
  return {
    type: "UPDATE_OCCUPATION",
    payload: user,
  };
};
