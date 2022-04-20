import http from "../http_common";

export const getAllSub_Product = () => {
    return http.get("/api/sub_products/all");
};

export const getSub_Product = (id) => {
    return http.get(`/subproduct/${id}`);
};

export const getAllSubProduct_by_id = (id) => {
    return http.get(`/api/sub_products/get/${id}`);
};

export const search_Sub_Data = (data) => {
    console.log(data);
    return http.post(`/api/sub_products/getserachdata`,data);
};

export const createSub_Product = (data) => {
    return http.post("/api/sub_products/add", data);
};

export const updateSub_Product= (id, data) => {
    return http.put(`/api/sub_products/update/${id}`, data);
};

export const removeSub_Product = (id) => {
    return http.delete(`/api/sub_products/${id}`);
};

