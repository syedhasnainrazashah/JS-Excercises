function make_album(artist_name,album_title,num_of_tracks){
    if(num_of_tracks==undefined){
        return {artist_name,album_title};

    }
   return {artist_name,album_title,num_of_tracks};
}

console.log(make_album("Hasnain", "love", 2))
console.log(make_album("Oun", "Revenge"))

