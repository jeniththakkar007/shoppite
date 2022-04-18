import http from "../http_common";

export const getAllCategory = () => {
    return http.get("/api/category/all");
};
export const getcategory_by_id = (id) => {
    return http.get(`/api/category/get/${id}`);
};

export const getCategory = (id)=> {
    return http.get(`/category/${id}`);
};

export const createCategory = (data) => {
    return http.post("/api/category/add", data);
};

export const updateCategory = (id, data) => {
    return http.put(`/api/category/update/${id}`, data);
};

export const removeCategory = (id)=> {
    return http.delete(`api/category/${id}`);
};