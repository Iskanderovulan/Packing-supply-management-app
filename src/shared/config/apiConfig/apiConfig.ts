export const BASE_URL = "https://admin-panel-backend-1egy.onrender.com/v1/";

const API_PATH = {
    AUTH: "auth",
};

export const API_ENDPOINTS = {
    PRODUCTS: "products",
    PACKS: "packs",
    COLORS: "colors",
    MATERIALS: "materials",
    LOGIN: `${API_PATH.AUTH}/login`,
    REGISTER: `${API_PATH.AUTH}/register`,
    REFRESH_TOKEN: `${API_PATH.AUTH}/refresh-tokens`,
    LOGOUT: `${API_PATH.AUTH}/logout`,
    USERS: "/users",
};
