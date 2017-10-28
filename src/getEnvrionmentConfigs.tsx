import axios from 'axios';

const getConfigsPromise = new Promise((resolve, reject) => {
    axios.get(`/environmentConfigs/environment.json`)
        .then((res: any) => {
            console.log("res", res);
            resolve(res.data);
        });
});

export default getConfigsPromise;
