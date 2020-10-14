import axios from 'axios'

export function fetchProjects() {
  return new Promise((resolve, reject) => {
    axios
      .get('https://portfolio-2020-6cd16.firebaseio.com/projects.json')
      .then((response) => resolve(response))
      .catch((error) => reject(error))
  })
}
