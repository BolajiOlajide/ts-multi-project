import fetch from 'node-fetch';

const BASE_URL = 'https://api.github.com';

export const getUserInfo = async (username: string): Promise<void> => {
    const response = await fetch(`${BASE_URL}/users/${username}`);
    const data = await response.json();
    console.log(data);
    return
}