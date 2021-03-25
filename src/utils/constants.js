require("dotenv").config();

const port = process.env.REACT_APP_BACKEND_PORT;
const deployedUrl = process.env.REACT_APP_BACKEND_DEPLOYED;
export const url = port === "0" ? deployedUrl : "http://localhost:" + port;
console.log(url);

export const drawerWidth = 240;
export const PERMISSION_IDS = {
  OWNER: 1,
  MEMBER: 2
};
export const PAGINATION_SIZE = 50;
export const SLICE_SIZE = 10;
