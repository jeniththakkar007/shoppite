import http from "../http_common";

export const getAllProducts = () => {
    return http.get("/api/products/all");
};

export const getProduct = (id) => {
    return http.get(`/products/${id}`);
};

export const createProduct = (data) => {
    return http.post("/api/products/add", data);
};

export const updateProduct = (id, data) => {
    return http.put(`/api/products/update`, data);
};

export const removeProduct = (id) => {
    return http.delete(`/api/products/${id}`);
};

