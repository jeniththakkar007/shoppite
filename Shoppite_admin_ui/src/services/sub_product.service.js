import http from "../http_common";

export const getAllSub_Product = () => {
    return http.get("/subproduct");
};

export const getSub_Product = (id) => {
    return http.get(`/subproduct/${id}`);
};

export const createSub_Product = (data) => {
    console.log(data);
    return http.post("/subproduct", data);
};

export const updateSub_Product= (id, data) => {
    return http.put(`/subproduct/${id}`, data);
};

export const removeSub_Product = (id) => {
    return http.delete(`/subproduct/${id}`);
};

