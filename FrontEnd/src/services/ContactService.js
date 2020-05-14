import axios from 'axios';

export default {
  getAll: async (user,password) => {
    let res = await axios.get(`/api/contact/`+user+`/`+password);
    // console.log(Object.values(res.data))
    // console.log(typeof(res.data[0]["contacts"]))
    return res.data[0]["contacts"] || [];
  }
}