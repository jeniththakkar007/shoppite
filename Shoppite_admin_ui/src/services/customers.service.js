import http from "../http_common";

export const getAlluser = () => {
    return http.get("/api/user/all");
};
export const deleteuser = (id)=> {
    return http.delete(`/api/user/${id}`);
};
export const getAllstate = () => {
    return http.get("/api/state/all");
};
export const getAllcountry = () => {
    return http.get("/api/country/all");
};
export const getAllcity = () => {
    return http.get("/api/city/all");
};
export const getAllrole = () => {
    return http.get("/api/role/all");
};