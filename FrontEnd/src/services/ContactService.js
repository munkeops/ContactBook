import axios from 'axios';

export default {
  getAll: async () => {
    let res = await axios.get(`/api/contact/rohan9025/rohan123`);
    // console.log(Object.values(res.data))
    // console.log(typeof(res.data[0]["contacts"]))
    return res.data[0]["contacts"] || [];
  }
}