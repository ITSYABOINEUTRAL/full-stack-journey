import axios from 'axios';

// Get GitHub users
export const getUsers = async () => {
  try {
    const response = await axios.get(
      'https://api.github.com/users'
    );

    return response.data;
  } catch (error) {
    console.error(
      'Error fetching GitHub users:',
      error.response?.data || error.message
    );

    return null;
  }
};

// Search for GitHub users
export const searchUsers = async (text) => {
  try {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${encodeURIComponent(text)}`,
      {
        headers: {
          Authorization: `YOUR_GITHUB_TOKEN`
        }
      }
    );

    return response.data.items;
  } catch (error) {
    console.error(
      'Error searching GitHub users:',
      error.response?.data || error.message
    );

    return null;
  }
};