// BE API emiulation using localstorage

export const postLocalStorage = (key, value) => {
  try {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  } catch (error) {
    // A more advanced implementation would handle the error case
    console.log(error);
  }
}

export const getLocalStorage = (key) => {
  if (typeof window === "undefined") {
    return undefined;
  }
  try {
    // Get from local storage by key
    const item = window.localStorage.getItem(key);
    // Parse stored json or if none return undefined
    return item ? JSON.parse(item) : undefined;
  } catch (error) {
    // If error also return initialValue
    console.log(error);
    return undefined;
  }
}