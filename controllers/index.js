console.log("funziona");

class PostController{


    constructor(){
        this.posts = [];
        this.restController = new RestController();
        //UI
        this.postsContainer;
        this.postContainer;
        this.modal;
        this.openModalBtn;
        this.modalTitle;
        this.modalDescription;
        this.modalPublicCheck;
        this.addPostBtn;
        this.tag;

    }
    
    init() {
        $(document).ready(function () {
            console.log(this);
            this.postsRow = $("#postsRow");
            this.postContainer = $("#postContainer");
            this.modal = $("#newPostModal");
            this.modalTitle = $("#postTitle");
            this.modalBody = $("#postBody");
            this.modalPublicCheck = $("#publicCheck");
            this.modalFeaturedCheck = $("#featuredCheck");
            this.addPostBtn = $("#savePostBtn");
            this.tag = [""];
            
            this.addPostBtn.click(function(){
                var post = new Post(
                    this.modalTitle.val(),
                    this.modalBody.val(),
                    this.modalPublicCheck.is(":checked"),
                    this.modalFeaturedCheck.is(":checked"),
                    this.tag
                );
                this.newPost(post);
                this.closeModal();
                this.resetModal();
            }.bind(this));

            for(var i in posts){this.createUIPost(post[i]);}
            this.getPosts();

           


        }.bind(this));

    }

    

    getPosts() {

        this.restController.get(function(data,status,xhr){
                 var postArr = [];
                for(var i in data){
                    if(post.public){
                        if(post.featured){
                            this.createUIPost(post);
                        }
                        else{
                            postArr.push(post);
                        }
                    }
                    if(post.public === true){
                        console.log(this);
                        this.createUIPost(post);
                    }
                }

                console.log("funziona data aaa");
                console.log(data);

        }.bind(this));
    }

    

    newPost(post){
        console.log()
        var data = {
            "title":post.title,
            "body": post.body,
            "featured": post.featured,
            "public": post.public,
            "tag": [
                "notizie",
                "covid"
            ]

        }

        

        $.post({
            url:"http://localhost:3000/tasks",
            data : JSON.stringify(data),
            success:function(data,status,xhr){
                this.createUIPost(post);

            }.bind(this)


            


        })


    }


    addPost(post) {

        console.log("post",post);
        var postContainer = $("#postContainer").clone();
        postContainer.css("display","block");
        postContainer.attr("id","");
        postContainer.addClass("class","postContainer");
    
        var postHeader = postContainer.find(".card-header");
        var postBody = postContainer.find(".card-text");
    
        postHeader.html(post.title);
        postBody.html(post.body);
    
        $("#postsRow").append(postContainer);



    }

    

    createUIPost(post){
        var postContainer = $("#postContainer").clone();
        postContainer.css("display","block");
        postContainer.attr("id","");
        postContainer.addClass("class","postContainer");
    
        var postHeader = postContainer.find(".card-header");
        var postBody = postContainer.find(".card-text");
    
        postHeader.html(post.title);
        postBody.html(post.body);
    
        $("#postsRow").append(postContainer);
    
    }

    closeModal() {
        this.modal.modal("hide");
    }


    openModal() {
        this.modal("show")
    }


    resetModal() {
        this.modalTitle.val("");
        this.modalBody.val("");

    }

    

    
}