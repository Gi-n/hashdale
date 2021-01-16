import { FETCH_TAGS_ERROR, FETCH_TAGS_SUCCESS, LOADING } from "../constants/actionTypes";

import googleApi from '../../helpers/axiosInstance'

export const fetchVisionApi = (image) => async dispatch => {
    console.log("calling in action",image)
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
            "https://vision.googleapis.com/v1/images:annotate?key=6LdBnhQUAAAAAMkYSqdAnkafemcA6JtM1N3hlgiL",
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