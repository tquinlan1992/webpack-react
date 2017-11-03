import axios from 'axios';

const getConfigsPromise = new Promise((resolve, reject) => {
    axios.get(`/environment.json`)
        .then((res: any) => {
            console.log("res", res);
            resolve(res.data);
        });
});

getConfigsPromise.then((res:any) => {
    axios.get(res.api + "/test.json")
        .then((res: any) => {
            console.log("api test data", res.data);
        });
})

export default getConfigsPromise;
