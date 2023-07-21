const pages = {}

pages.base_url = "http://localhost/Full-Stack-Mini-Project/backend/";

pages.print_message = (message) =>{
    console.log(message);
}

pages.getAPI = async (url) =>{
    try{
        return await axios(url)
    }catch(error){
        pages.print_message("Error from GET API: " + error)
    }
}

pages.postAPI = async (api_url, api_data) => {
    try{
        return await axios.post(
            api_url,
            api_data
        );
    }catch(error){
        pages.print_message("Error from Linking (POST)" + error)
    }
}

//the below is the script for the index page
pages.page_signin = async () => {
    const index_url = pages.base_url + "signin.php"
    
  
    document.getElementById("signin").addEventListener("submit", () => {
       const username = document.getElementById("username").value;
       const password = document.getElementById("password").value;
       api_data = { 
        username: username,
        password: password
         }  
       let result = pages.postAPI(index_url,api_data)
       
      
       if(result["status"] =="success"){
        window.location.href = pages.base_url+"dashboard.php?username="+ result["first_name"];
       }
  
});
}

//the below is the script for the signup page
pages.page_signup = async() => {
    const index_url = pages.base_url + "signup.php"
  
     document.getElementById("signup").addEventListener("submit", () => {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const first_name = document.getElementById("first_name").value;
        const last_name = document.getElementById("last_name").value;
       
        api_data = { 
            username: username,
            password: password,
            first_name: first_name,
            last_name:last_name
             }  
           let result = pages.postAPI(index_url,api_data)
           
          
           if(result["status"] =="success"){
            window.location.href = index_url+"signin.html";
           }
    
        
       
});
    }

//the below is the script for the articles page
pages.page_dashboard = () => {
   // const articles_url = pages.base_url + "get_articles.php";
    pages.print_message("Hello Artciles from JS")
}

//this will load the scripts of the mentioned page
pages.loadFor = (page) => {
    eval("pages.page_" + page + "();")
    
}






