import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:44384",
    headers: {
        "Content-type": "application/json"
    }
});