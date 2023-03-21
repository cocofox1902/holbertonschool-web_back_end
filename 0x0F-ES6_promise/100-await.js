import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  let result = {
    photo: null,
    user: null,
  };

  try {
    result = {
      photo: await uploadPhoto(),
      user: await createUser(),
    };
    return result;
  } catch (error) {
    return result;
  }
}
