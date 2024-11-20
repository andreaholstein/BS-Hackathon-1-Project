class TravelApi {
  constructor(apiKey, activity) {
    this.baseUrl = "https://serpapi.com/search.json?engine=google_local";
    this.apiKey = apiKey;
  }

  async getDestinations(activity) {
    console.log("hello");
    try {
      const url = `${this.baseUrl}&q=${activity}&location=Canada&api_key=${this.apiKey}`;
      const response = await axios.get(url);
      return response.data.local_results;
    } catch (error) {
      console.log("Cannot get destinations");
      console.log(error);
    }
  }
}
