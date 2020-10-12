const http = require('http');

const hostname = '127.0.0.1'; //localhost
const port = 3000;

const server = http.createServer(function(req, res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end("Ciao a tutti");
});

server.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});



class RestController{

    constructor(){}

    get(){
        var posts = [];
        var settings = {
            "url": "https://texty-89895.firebaseio.com/posts.json",
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

    
    delete(url, post){

        var settings = {
            "url": "https://texty-89895.firebaseio.com/posts/MJ6_Ktrt5-UflMmf8Yk.json",
            "method": "DELETE",
            "timeout": 0,
          };
          
          $.ajax(settings).done(function (response) {
            console.log(response);
          });
          
        }};

        
