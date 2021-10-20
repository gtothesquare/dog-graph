const { RESTDataSource } = require('apollo-datasource-rest');

class DogAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://dog.ceo/api/';
  }
  static getImagePath({ breed }) {
    return `/breed/${breed}/images/random`;
  }

  async fetchImageUrl({ breed }) {
    const path = DogAPI.getImagePath({ breed });
    const response = await this.get(path);
    return response.message;
  }

  async fetchAllBreeds() {
    const response = await this.get('breeds/list/all');
    const data = response?.message;
    return Promise.all(
      Object.keys(data).map(async (key) => {
        return {
          name: key,
          randomImageUrl: await this.fetchImageUrl({ breed: key }),
          subBreeds: data[key],
        };
      })
    );
  }
}

module.exports = DogAPI;
