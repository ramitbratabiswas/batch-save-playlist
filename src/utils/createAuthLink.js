import crypto from 'crypto-browserify';

export const createAuthLink = () => {

  const client_id = import.meta.env.VITE_CLIENT_ID;
  const redirect_uri = 'https://bulksaveutility.netlify.app/callback';

  const state = generateRandomString(16);
  const scope = `playlist-read-private
    playlist-read-collaborative
    user-library-read
    user-library-modify`;

  const params = new URLSearchParams({
    response_type: 'code',
    client_id: client_id,
    scope: scope,
    redirect_uri: redirect_uri,
    state: state
  });

  const link = `https://accounts.spotify.com/authorize?${params.toString()}`;

  return link;
}

const generateRandomString = (length) => {
  return crypto
  .randomBytes(60)
  .toString('hex')
  .slice(0, length);
}