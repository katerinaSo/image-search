import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
          "Client-ID ed420bd263ff5690a5aaab697b1040f0b396162f02a5e19427651eb1e6e03007"
      }
})