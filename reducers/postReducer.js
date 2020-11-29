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

//Fetches the initial array of posts
export async function fetchPosts(dispatch) {
  const postArray = [];

  const users = [
    {
      name: "John Doe",
      avatar_uri:
        "https://images.generated.photos/YK8FaJrvA_kB8sh6QgrOkanq6G8ak3W7c62DjW1dcpA/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAyODM3MjAuanBn.jpg",
    },
    {
      name: "Jane Doe",
      avatar_uri:
        "https://images.generated.photos/Q3jx0x773rW6MB2AaHQCztPKNmjoQWqH2jXsuND_T4g/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA5MDAwODkuanBn.jpg",
    },
    {
      name: "Johnny Appleseed",
      avatar_uri:
        "https://images.generated.photos/jPZ1NQyZT3W99wB8k_2uRLSQCScq0WvhPiJ2Iwyse5M/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAyNDM3MjEuanBn.jpg",
    },
  ];

  function getRandomIndex() {
    return Math.floor(Math.random() * users.length);
  }

  await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) =>
      json.map((post) => {
        let index = getRandomIndex();
        post.name = users[index].name;
        post.uri = users[index].avatar_uri;
        postArray.push(post);
      })
    );

  dispatch({ type: "FETCH_POSTS", payload: postArray });
}

export default postReducer;
