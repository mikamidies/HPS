export default {
  async getAttributes(axios, params) {
    try {
      let res;

      if (axios) {
        res = await axios.get("/attributes", {
          ...params,
        });
      }
      return res.data.results;
    } catch (e) {
      console.log(e);
    }
  },
};
