import axios from 'axios';

let _apiURI = null;
if (process.env.NODE_ENV === 'development') {
  _apiURI = location.protocol + '//' + location.hostname + ':3001/';
} else {
  _apiURI = 'https://socent.cezarneaga.eu/api/v1/';
}

function getEnterprises() {
  return axios.get(_apiURI + 'enterprises?status=neq|10')
}
function getEnterprise(id) {
  return axios.get(`${_apiURI}enterprises/${id}`)
}
function getEnterprisesPublic() {
  return axios.get('/public')
}
export default { getEnterprises, getEnterprisesPublic, getEnterprise }
