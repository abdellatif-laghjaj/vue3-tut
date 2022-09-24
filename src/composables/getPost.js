import {ref} from "vue";
import API_URL from "@/env";

const getPost = (id) => {
    const post = ref({});
    const error = ref('');

    const load = async () => {
        try {
            const data = await fetch(API_URL + '/posts/' + id);
            if (!data.ok) {
                throw Error("Could not fetch the data for that resource");
            }
            post.value = await data.json();
        } catch (err) {
            error.value = err.message;
            console.log(err.message);
        }
    }

    return {post, error, load}
}

export default getPost