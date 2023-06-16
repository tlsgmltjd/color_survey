import axios from "axios";

const BASE_URL = "https://learn.codeit.kr/api/";

export async function getData(offset, limit) {
  try {
    const response = await axios.get(
      `${BASE_URL}color-surveys?offset=${offset}&limit=${limit}`
    );
    return response;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function PostData(mbti, colorCode) {
  axios
    .post(`${BASE_URL}color-surveys`, {
      mati: mati,
      colorCode: colorCode,
      password: "0301",
    })
    .then(function (response) {
      console.log(response);
      return response;
    })
    .catch(function (error) {
      console.log(error);
      return null;
    });
}
