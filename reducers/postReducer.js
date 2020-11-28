const postReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS": {
      return {
        posts: [...action.payload],
      };
    }
    case "ADD_POST": {
      return {
        posts: [action.payload, ...state.posts],
      };
    }
    default:
      return state;
  }
};

export async function fetchPosts(dispatch) {
  const response = [];

  await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) =>
      json.map((post) => {
        response.push(post);
      })
    );
  dispatch({ type: "FETCH_POSTS", payload: response });
}

export default postReducer;
