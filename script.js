var apiUrl = "https://random-word-api.herokuapp.com/word?number=1"
var giphyUrl = "https://api.giphy.com/v1/gifs/search?api_key=PBuPORQaE9lAx6fCIU8FGRCA90p8Fyti"

    async function myFunc(){
        try{
            var response = await fetch(apiUrl);
            var data = await response.json();

            var word = data.toString();
            console.log(word);
          
            var response1 = await fetch(giphyUrl+"&q="+word+"&limit=25");
            var data1 = await response1.json();
            console.log(data1)
            var imageUrl = data1.data[0].images.original.url;
           console.log(imageUrl)
           let object = document.createElement("object");
           object.data = data1.data[0].images.original.url;
           document.body.append(object);
          } catch (error) {
            console.log(error.message)} 
    }
    
    myFunc()
