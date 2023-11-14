export function saveUserSession(user) {
  localStorage.setItem("user", JSON.stringify(user));
}
export function getUserSession() {
  return JSON.parse(localStorage.getItem("user"));
}
