import http from "../http_common";

export const getAllProducts = () => {
    return http.get("/api/products/all");
};

export const getAllProduct_by_id = (id) => {
    return http.get(`/api/products/get/${id}`);
};

export const search_Pro_Data = (data) => {
    console.log(data);
    return http.post(`/api/products/getserachdata`,data);
};

export const createProduct = (data) => {
    return http.post("/api/products/add", data);
};

export const updateProduct = (id, data) => {
    return http.put(`/api/products/update/${id}`, data);
};

export const removeProduct = (id) => {
    return http.delete(`/api/products/${id}`);
};

