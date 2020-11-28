const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_USER": {
      return {
        user: action.payload,
      };
    }
    case "UPDATE_BIO": {
      return {
        user: action.payload,
      };
    }
    case "UPDATE_USERNAME": {
      return {
        user: action.payload,
      };
    }
    case "UPDATE_OCCUPATION": {
      return {
        user: action.payload,
      };
    }
    default:
      return state;
  }
};

//Creates a default user profile
export async function fetchUser(dispatch) {
  let user = {
    bio: "Default Bio",
    username: "John Doe",
    occupation: "Student",
    uri:
      "https://ap.rdcpix.com/f67f6160888509efab3ab114fbfddddal-m3829931301xd-w1020_h770_q80.jpg",
  };

  dispatch({ type: "FETCH_USER", payload: user });
}

export default userReducer;
