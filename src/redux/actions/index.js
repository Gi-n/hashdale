import { FETCH_TAGS_ERROR, FETCH_TAGS_SUCCESS, LOADING } from "../constants/actionTypes";

import googleApi from '../../helpers/axiosInstance'

let KEY = "************************************88"

export const fetchVisionApi = (image) => async dispatch => {
  console.log("calling in action", image)
  dispatch({
    type: LOADING
  })
  try {
    let body = JSON.stringify({
      requests: [
        {
          features: [
            { type: "LABEL_DETECTION", maxResults: 10 },
            { type: "LANDMARK_DETECTION", maxResults: 5 },
            { type: "FACE_DETECTION", maxResults: 5 }
          ],
          image: {
            source: {
              imageUri: image
            }
          }
        }
      ]
    });
    let response = await fetch(
      `https://vision.googleapis.com/v1/images:annotate?key=${KEY}`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "POST",
        body: body
      }
    );
    let responseJson = await response.json();
    console.log(responseJson);
    dispatch({ type: FETCH_TAGS_SUCCESS, payload: response.data });
  } catch (error) {
    console.error(error)
    dispatch({ type: FETCH_TAGS_ERROR, payload: error.response.data });
  }
}