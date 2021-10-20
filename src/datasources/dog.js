const { RESTDataSource } = require('apollo-datasource-rest');

class DogAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://dog.ceo/api/';
  }
  static getImagePath({ breed }) {
    return `/breed/${breed}/images/random`;
  }

  async fetchImages({ breed }) {
    const response = await this.get(`breed/${breed}/images`);
    return response?.message || [];
  }

  async fetchAllDogs() {
    const response = await this.get('breeds/list/all');
    const data = response?.message;
    return Promise.all(
      Object.keys(data).map(async (breed) => {
        const images = await this.fetchImages({ breed });
        return {
          breed,
          images,
          subBreeds: data[breed],
        };
      })
    );
  }

  async fetchDogByBreed({ breed }) {
    const subBreedsRes = await this.get(`breed/${breed}/list`);
    const images = await this.fetchImages({ breed });
    return {
      breed,
      images,
      subBreeds: subBreedsRes?.message,
    };
  }
}

module.exports = DogAPI;
