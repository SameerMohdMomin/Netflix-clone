const api_key = "0871c3a4e00ca667d8038873996b5300";

const requests = {
    fetchOriginal : "https://api.themoviedb.org/3/discover/tv?api_key=<<api_key>>&with_networks=213",
    fetchrated : "/movie/top_rated?api_key=0871c3a4e00ca667d8038873996b5300&language=en-US&page=1",
    fetchTranding : "/trending/all/day?api_key=0871c3a4e00ca667d8038873996b5300",
    fetchpopular : "/movie/popular?api_key=0871c3a4e00ca667d8038873996b5300&language=en-US",
    fetchtvlatest1 : "/tv/latest?api_key=0871c3a4e00ca667d8038873996b5300&language=en-US",
    fetchtvlatest : "/tv/top_rated?api_key=<<api_key>>&language=en-US&page=1",
    fetchtrand: "/trending/movie/day?api_key=0871c3a4e00ca667d8038873996b5300",
    fetchUpcomming : "/movie/upcoming?api_key=0871c3a4e00ca667d8038873996b5300&language=en-US&page=1",
    
    
}
export default requests;





