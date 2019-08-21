import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID eed5dbcc90e4b13e9ad086521c4c39d8a166595906ce6a3ab7bfc7782fa8d1dd'
  }
});
