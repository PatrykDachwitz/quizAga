import { ref, toValue, watchEffect } from "vue";

export function useFetch(url) {
    const date = ref(null);
    const error = ref(null);

    watchEffect(() => {
        date.value = null;
        error.value = null;

        fetch(toValue(url))
            .then(response => response.json())
            .then(json => date.value = json[0])
            .catch(err => error.value = err)

    });

    return {date, error}
}