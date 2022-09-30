const container_div=document.getElementById("container");
const searchVedios = async ()=> {
    try{
         const qurey=document.getElementById("query").value;

        const res =await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&order=viewCount&videoEmbeddeable=true&order=date&maxResults=20&q=${qurey}&key=${API_KEY}`)

        const data=await res.json();
//    console.log(data)
        actual_data=data.items;
      
        appendVideos(actual_data)  

    }
    catch(error){
        console.log("error",error)
    }

};





