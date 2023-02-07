import axios from "axios";
const url = 'https://localhost:7152';

export async function getNotes() {
  try {
    const response = await axios.get(url + '/api/Note');
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }

}

export async function addNote(name, description) {
  var data = JSON.stringify({
    "name": name,
    "description": description
  });
  var config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://localhost:7152/api/Note',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };
  console.log(data)
  axios(config)
    .then(function (response) {
      return JSON.stringify(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function updateNoteContent(id, name, description) {
  var data = JSON.stringify({
    "id": id,
    "name": name,
    "description": description
  });
  console.log(data);
  var config = {
    method: 'put',
    maxBodyLength: Infinity,
    url: 'https://localhost:7152/api/Note',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function deleteNote(id) {
  var data = '';

  var config = {
    method: 'delete',
    maxBodyLength: Infinity,
    url: 'https://localhost:7152/api/Note/' + id,
    headers: {},
    data: data
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

}






