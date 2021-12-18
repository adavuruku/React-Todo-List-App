async function getApiPromise(promiseArray){
    try{
        let t = await Promise.all(promiseArray)
        return t[0].data.map((el)=>{
            const comments = t[1].data.filter((e)=>e.postId === el.id).map((f)=>f.body).join("\n")
                return {
                    ...el,
                    comments
                }
        })
    }catch(error){
        console.log(error)
        return null
    }
}


async function processReq(){
    let URL1 = 'https://jsonplaceholder.typicode.com/posts';
    let URL2 = 'https://jsonplaceholder.typicode.com/comments';
    const fetchURL = (url) => axios.get(url);
    const promiseArray = [URL1, URL2].map(fetchURL);
    let jsonRes = await getApiPromise(promiseArray)
    const fields = ['userId', 'id','title','body', 'comments']
    json2csvParser = new Parser({ fields, quote:'' });
    csv = json2csvParser.parse(jsonRes);
    console.log(csv)
}