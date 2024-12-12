export const generalGET = (req, res) => {
  const myObj = {
    status: 200,
    response: "OK",
  };
  res.send(myObj);
};
