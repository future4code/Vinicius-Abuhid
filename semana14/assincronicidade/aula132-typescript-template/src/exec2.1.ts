import axios, {AxiosResponse} from 'axios'

const baseURL: string = "https://jsonplaceholder.typicode.com/posts/"
const method : string = process.argv[2]
const postId1: string = process.argv[3]
const postId2: string = process.argv[4]
const postId3: string = process.argv[5]
let promise1: Promise<AxiosResponse>
let promise2: Promise<AxiosResponse>
let promise3: Promise<AxiosResponse>

switch(method){
    case 'get':
    promise1 = axios.get(baseURL + postId1);
    promise2 = axios.get(baseURL + postId2);
    promise3 = axios.get(baseURL + postId3);
    break;
    case 'post':
    promise1 = axios.post(baseURL);
    promise2 = axios.post(baseURL);
    promise3 = axios.post(baseURL);
    break;
    case 'put':
    promise1 = axios.put(baseURL + postId1);
    promise2 = axios.put(baseURL + postId2);
    promise3 = axios.put(baseURL + postId3);
    break;
    case 'delete':
    promise1 = axios.delete(baseURL + postId1);
    promise2 = axios.delete(baseURL + postId2);
    promise3 = axios.delete(baseURL + postId3);
    break;
    case 'getPostComments':
    promise1 = axios.get(`${baseURL}${postId1}/comments`)
    default:''
}

method !== 'getPostComments'? 
Promise.all([promise1, promise2, promise3]).then((data: AxiosResponse[]) => {
    const allPosts = data.map(post => {
        return post.data
    })
    console.log('Operação bem-sucedida', allPosts)
}).catch(err => {
    console.log(err)
})
:
promise1.then(data => {
    console.log(data.data)
}).catch(error => {
    console.log(error)
})