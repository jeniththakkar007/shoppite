import http from "../http_common";

export const getAllSub_Product = () => {
    return http.get("api/sub_products/all");
};

export const getSub_Product = (id) => {
    return http.get(`/subproducts/${id}`);
};

export const createSub_Product = (data) => {
    return http.post("/api/sub_products/add", data);
};

export const updateSub_Product= (id, data) => {
    return http.put(`/api/sub_products/update`, data);
};

export const removeSub_Product = (id) => {
    return http.delete(`/api/sub_products/${id}`);
};

