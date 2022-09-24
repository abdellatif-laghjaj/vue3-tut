import {ref} from "vue";
import API_URL from "@/env";

const getPosts = () => {

    const posts = ref([]);
    const error = ref('');

    const load = async () => {
        try {
            let data = await fetch(API_URL + '/posts');
            if (!data.ok) {
                throw Error("Could not fetch the data for that resource");
            }

            posts.value = await data.json();
        } catch (err) {
            error.value = err.message;
            console.log(err.message)
        }
    }

    return {posts, error, load}
}

export default getPosts;