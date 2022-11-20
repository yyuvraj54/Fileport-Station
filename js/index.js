
const firebaseConfig = {
    apiKey: "AIzaSyAkcICNrHwHPzF_tWfUhILN8tSFh9mS9vk",
    authDomain: "nearme-3e1b1.firebaseapp.com",
    projectId: "nearme-3e1b1",
    storageBucket: "nearme-3e1b1.appspot.com",
    messagingSenderId: "765204067810",
    appId: "1:765204067810:web:0debad2a2ff117089b35bb",
    measurementId: "G-M4QSJLHCHR"
  };
  firebase.initializeApp(firebaseConfig);
  
var fileItem;
var fileName;
  function getFile(e){
    fileItem=e.target.files[0];
    console.log("File Item:"+fileItem)
    fileName=fileItem.name;
    console.log("File Name:"+fileName)
    
  }





  const fileItemObj=document.querySelector('#photo');
  const uploadBtn=document.querySelector("#uploadfile");
  uploadBtn.addEventListener('click',()=>{ 
    if(fileName==undefined){
      alert("Please Choose a file")
    }
    else{
    

    let storageRef=firebase.storage().ref("images/"+fileName);
    let uploadTask=storageRef.put(fileItem);

    uploadTask.on("state_changed",(snapshot)=>{
      
  
    },(error)=>{
        console.log("Error is ",error);
    },()=>{
        uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
          
            location.reload();
            alert("File Uploaded");    
            console.log("URL ",url);
        })
    
    })
}
  })