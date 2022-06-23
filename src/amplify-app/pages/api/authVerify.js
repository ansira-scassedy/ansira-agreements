var api = async (req, res) => {
    if (req.method === "POST") {
      const authRequest = req.body;

      console.log(JSON.stringify(authRequest));
      res.status(201).json(authRequest);
    } else {
      console.log(req.body);
      res.status(200);
    }
  };
  
  
  export default api;
  







  