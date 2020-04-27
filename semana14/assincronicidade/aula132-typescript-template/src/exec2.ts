import axios, { AxiosResponse } from 'axios'

const id1 = process.argv[2]
const id2 = process.argv[3]
const id3 = process.argv[4]

const baseURL: string = 'https://jsonplaceholder.typicode.com/posts/'

const promiseFirstPost: Promise<AxiosResponse> = axios.get(baseURL + id1.toString())
const promiseSecondPost: Promise<AxiosResponse> = axios.get(baseURL + id2.toString())
const promiseThirdPost: Promise<AxiosResponse> = axios.get(baseURL + id3.toString())
Promise.all([promiseFirstPost, promiseSecondPost, promiseThirdPost])
.then((data: AxiosResponse[]) => {
    const allTitles = data.map(item => {
        return item.data.title
    })
    console.log(allTitles)
})
.catch(err => {
    console.log(err);  
})