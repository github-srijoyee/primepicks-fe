export const base_url="http://localhost:4000/api/";
const getTokenFromLocalStorage = localStorage.getItem("customer")
  ? JSON.parse(localStorage.getItem("customer"))
  : null;
  console.log(getTokenFromLocalStorage);
  console.log("Stored customer token:", getTokenFromLocalStorage ? getTokenFromLocalStorage.token : "No token found");
export const config = {
  headers: {
    Authorization: `Bearer ${
      getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
    }`,
    Accept: "application/json",
  },
};
