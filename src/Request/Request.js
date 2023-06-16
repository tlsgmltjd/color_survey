import axios from "axios";

const BASE_URL = "https://learn.codeit.kr/api/";

/*
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
*/

export async function getData(offset, limit) {
  // then(()=>{}) 안에서의 return은 getData 함수 자체의 반환값이 아니라
  // then 콜백 함수 내부의 반환값이기 때문에 getData 함수는 항상 undefined를 return한다.
  // 그래서 axios 앞에 return을 붙혀야한다.

  return axios
    .get(`${BASE_URL}color-surveys?offset=${offset}&limit=${limit}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
}

export async function PostData(mbti, colorCode) {
  axios
    .post(`${BASE_URL}color-surveys`, {
      mbti: mbti,
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
