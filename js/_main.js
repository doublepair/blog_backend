console.log("main");

var posts = [];

posts.push(new Post("titolo", "corpo", true, false, ["tag"]));
posts.push(new Post("titolo", "corpo", false, false, ["tag"]));
posts.push(new Post("titolo", "corpo", true, true, ["tag"]));
posts.push(new Post("titolo", "corpo", false, true, ["tag"]));






// $(document).ready(function () {



//     // $(".send-comment").click(function () {
//     //     var commentText = $(".comment-text").val();

//     //     var commentContainer = $(".comments-container");
//     //     var commentRow = '<li class="list-group-item"><a href="#" class="badge badge-light">'  + '</a>' + commentText + '</li>';

//     //     commentContainer.append(commentRow);

//     // });

    // for(var i = 0; i< posts.length; i++){
    //     var post = posts[i];
    //     if(post.public === true){
    //         createUIPost(post);
    //     }


//     // }



//     // $("#savePostBtn").click(addPost);


// });


// function createUIPost(post){
//     var postContainer = $("#postContainer").clone();
//     postContainer.css("display","block");
//     postContainer.attr("id","");
//     postContainer.addClass("class","postContainer");

//     var postHeader = postContainer.find(".card-header");
//     var postBody = postContainer.find(".card-text");

//     postHeader.html(post.title);
//     postBody.html(post.body);

//     $("#postsRow").append(postContainer);

// }


// function closeModal(){
//     $("#newPostModal").modal("hide");
// }

// function resetModal(){
//     $("#postTitle").val("");
//     $("#postBody").val("");

// }
