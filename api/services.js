export default {
  async getServices(axios, params) {
    try {
      let res;

      if (axios) {
        res = await axios.get("/service", {
          ...params,
        });
      }
      return res.data.results;
    } catch (e) {
      console.log(e);
    }
  },
};
