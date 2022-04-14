import http from "../http_common";

export const getAllCategory = () => {
    return http.get("/category");
};

export const getCategory = (id)=> {
    return http.get(`/category/${id}`);
};

export const createCategory = (data) => {
    return http.post("/category", data);
};

export const updateCategory = (id, data) => {
    return http.put(`/category/${id}`, data);
};

export const removeCategory = (id)=> {
    return http.delete(`/category/${id}`);
};