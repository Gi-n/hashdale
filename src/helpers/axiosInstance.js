import axios from "axios";

const KEY = 'AIzaSyDO5KvbCv3TRFtlmV92hg8A53Kmti7R3QU'

export default axios.create({
    baseURL: `https://vision.googleapis.com/v1/images:annotate?key=${KEY}`,
});
