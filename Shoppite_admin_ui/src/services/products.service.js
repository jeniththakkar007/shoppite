import http from "../http_common";

export const getAllProducts = () => {
    return http.get("/api/products/all");
};

export const getProduct = (id) => {
    return http.get(`/products/${id}`);
};

export const createProduct = (data) => {
    console.log(data);
    return http.post("/products", data);
};

export const updateProduct = (id, data) => {
    return http.put(`/products/${id}`, data);
};

export const removeProduct = (id) => {
    return http.delete(`/products/${id}`);
};

