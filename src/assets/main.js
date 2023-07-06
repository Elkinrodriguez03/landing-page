const url = 'https://youtube-v311.p.rapidapi.com/playlists/?part=snippet&channelId=UCviSxznmY5IEfiV9u82Vb7A&maxResults=5';
const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '93509f9c04msh345659ce7f2801ep1a723bjsnf235657aafac',
		'X-RapidAPI-Host': 'youtube-v311.p.rapidapi.com'
	}
};

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const playlists = await fetchData(url);
        let view = `
        ${playlists.items.map(playlist => `
            <div class="group relative">
            <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src=${playlist.snippet.thumbnails.high.url} alt="${playlist.snippet.description}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${playlist.snippet.title}
                </h3>
            </div>
            </div>        
        `)}
        `;
        content.innerHTML = view
    } catch (error) {
        console.log(error);
    }
})();