const searchForm = document.getElementById("search-form")
const searchBox= document.getElementById("search-box")
const searchResult = document.getElementById("search-result")
const showMoreBtn = document.getElementById("show-more-btn")

// Lc800tgSjEW3IXQtXUYAOQIKLniVu8WHC3mfazL4jys

let keyword= '';
let page = 1;
let per_page =21;
let accessKey= "Lc800tgSjEW3IXQtXUYAOQIKLniVu8WHC3mfazL4jys";


async function searchImages() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?&page=${page}&query=${keyword}&per_page=${per_page}&client_id=${accessKey}`

    const response = await fetch(url)
    const data = await response.json();

    if(page === 1){
        searchResult.innerHTML = "";
    }

    const results = data.results;
    results.map((results)=>{
        const image = document.createElement("img");
        image.src = results.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = results.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);

        showMoreBtn.style.display = "block";

        console.log(data);
    })
}

searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    searchImages();

})
showMoreBtn.addEventListener("click",()=>{
    page++;
    searchImages();
})
