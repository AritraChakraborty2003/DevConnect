export const getConnectionString = ({ DB_USER, DB_PASSWORD }) => {
  const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@devconnectdb.70klf.mongodb.net/?retryWrites=true&w=majority&appName=DevConnectDB`;
  return url;
};
