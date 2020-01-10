import axios from 'axios';
import fetchApi from './helper';
import {fetchGraphQL} from './helper';
import {getFullUrl} from './helper';

// Profile Update
export const updateUserProfile = (data, headers) => {
  return fetchApi('put', 'api/users', data, headers);
};

// fetch list of stories
export const fetchStories = () => {
  let query = `{
    stories(limit:10,offset:0) {
      id,
      title,
      description,
      image,
      publishDate,
      author{id,bio}
    }
  }`;
  return fetchGraphQL(query);
};

// do login
export const login = data => {
  console.log('login', data);
  let query = `mutation {
    login(loginInput: {callingCode: "${data.callingCode}", phoneNumber: "${data.phoneNumber}", firebaseUid: "${data.firebaseUid}"}) {
      accessToken
      profile{
        displayName
        profilePicture
      }
    }
  }`;
  return fetchGraphQL(query);
};

// update profile
export const updateProfile = data => {
  console.log('updateProfile', data);
  let query = `mutation {
    updateProfile(updateProfileInput: {displayName: "${data.displayName}", profilePicture: "${data.profilePicture}"}) {
        displayName
        profilePicture
    }
  }`;
  return fetchGraphQL(query, data.accessToken);
};
