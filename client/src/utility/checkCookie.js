export const checkCookie = () => {
  const cookie = document.cookie
    .split('; ')
    .find(row => row.startsWith('token='));
  if (cookie) {
    const token = cookie.split('=')[1];
    return token;
  }
  return null;
};
