const pocketdb = require('./pocketdb.js');

const ERR_METHOD = [
  "INVALID_METHOD",
  "POST is the only method accepted for the endpoint /set.js",
  400
];
const ERR_PARAM = [
  "INCOMPLETE_PARAM",
  "Incomplete parameters. Please view the documentation "
]

module.exports = async (req, res) => {
  function resolve(data, reqdata) {
    res.status(200).send(JSON.stringify({
      success: true,
      result: data,
      request: reqdata
    }));
  }
  function reject([ error, message, status ], reqdata) {
    res.status(status).send(JSON.stringify({
      success: false,
      error, message,
      request: reqdata || {}
    }));
  }
  if(req.method != "POST") {
    return reject(ERR_METHOD);
  }
}