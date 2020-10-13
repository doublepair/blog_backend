

console.log("dddd");

class RestController {

  constructor() {
    
  }

  get(onSuccess, onError) {
      $.get({
          url: "http://localhost:3000/articles",
          success: onSuccess,
          dataType: "json"
      });
  }





  post(data, onSuccess, onError) {
      $.post({
          type: "POST",
          url: "http://localhost:3000/articles",
          data: JSON.stringify(data),
          dataType: "json",
          success: onSuccess,
          contentType: "application/json"
      });
  }

  patch(data, onSucces, onError){
    $.patch({
      type: "PATCH", 
      url: "http://localhost:3000/articles",
      data: JSON.stringify(data),
      dataType: "json",
      success: onSuccess,
      contentType: "application/json"
    })
  }



  delete(data, onSuccess, onError) {
      $.delete({
          type: "DELETE",
          url: "http://localhost:3000/articles",
          success: onSuccess,
          dataType: "json"
      });
  }


  put(url, data, onSuccess, onError) {
      $.put({
          url: url,
          type: "put",
          success: onSuccess,
          dataType: "json"
      });
  }




}


/*
class RestController{

    constructor(){}

    get(){
        var posts = [];
        var settings = {
            "url": "http://localhost:3000/articles",
            "method": "GET",
            "timeout": 0,
          };
          
          $.ajax(settings).done(function (response) {
            console.log(response);
          
                    for(var i in response){
                        var np = response[i];
                        posts.push(
                            new Post(np.title, np.body, np.public, np.featured, np.tag)
                        );
                    }
                 
            }
        
        );

        return posts;
    }

    post(url, post){
      var postId = null;
    

      $.ajax({
        type: "POST",
        url: "http://localhost:3000/articles",
        data: JSON.stringify(post),
        contentType: "application/json",
        
        async: false,
        success: function(data, response){
          postId = data.data._id;
          co
        }
      })

    }

    
    delete(url, post){

        var settings = {
            "url": "http://localhost:3000/articles",
            "method": "DELETE",
            "timeout": 0,
          };
          
          $.ajax(settings).done(function (response) {
            console.log(response);
          });
          
        }};

        



        /*const http = require('http');

const hostname = '127.0.0.1'; //localhost
const port = 3000;

const server = http.createServer(function(req, res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end("Ciao a tutti");
});

server.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});*/

