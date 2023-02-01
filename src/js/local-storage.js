export const save = (key, value) => {
    try {
        localStorage.setItem(key, value);
    } catch (error) {
        console.log("error", error.message);
    }
}

export const load = key => localStorage.getItem(key);

export const clear = () => localStorage.clear();