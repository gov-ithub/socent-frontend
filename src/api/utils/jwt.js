import decode from 'jwt-decode';

export function getTokenExpirationDate(token) {
  const decoded = decode(token);
  if (!decoded.exp) {
    return null;
  }

  const date = new Date(0);
  date.setUTCSeconds(decoded.exp);

  return date;
}

export function isTokenExpired(token) {
  const date = getTokenExpirationDate(token);
  const offsetSeconds = 0;

  if (date === null) {
    return false;
  }

  return !(date.valueOf() > (new Date().valueOf() + (offsetSeconds * 1000)));
}
