export const getConnectionString = ({ DB_USER, DB_PASSWORD }) => {
  const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@devconnect.jr90h.mongodb.net/DevConnect`;
  return url;
};
