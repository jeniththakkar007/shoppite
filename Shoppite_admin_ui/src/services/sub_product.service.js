import http from "../http_common";

export const getAllSub_Product = () => {
    return http.get("/subProduct");
};

export const getSub_Product = (id) => {
    return http.get(`/subproducts/${id}`);
};

export const createSub_Product = (data) => {
    return http.post("/subproducts", data);
};

export const updateSub_Product= (id, data) => {
    return http.put(`/subproducts/${id}`, data);
};

export const removeSub_Product = (id) => {
    return http.delete(`/subproducts/${id}`);
};

