import axios from 'axios';

export default {
  getAll: async () => {
    let res = await axios.get(`/api/contact`);
    console.log(res.data)
    console.log(res.data[0]["contacts"])
    return res.data[0]["contacts"] || [];
  }
}