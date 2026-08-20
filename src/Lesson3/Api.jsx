import axios from "axios";
const Api = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID wLGIpSJDmC2Xec6P4-fAdGOgF9MCTmY-hjWNORbXX8c",
    },
    params: { query: term },
  });

  return response.data.results;
};

export default Api;
