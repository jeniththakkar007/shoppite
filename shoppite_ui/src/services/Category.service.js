import http from "./http_common";

export const getAllCategory = () => {
    return http.get("api/Category/GetCategoriesAndSubCategories");
};