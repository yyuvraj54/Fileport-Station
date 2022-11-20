
import {  getStorage, ref, listAll ,getMetadata,getDownloadURL} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-storage.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
 
const firebaseConfig = {
  apiKey: "AIzaSyAkcICNrHwHPzF_tWfUhILN8tSFh9mS9vk",
  authDomain: "nearme-3e1b1.firebaseapp.com",
  projectId: "nearme-3e1b1",
  storageBucket: "nearme-3e1b1.appspot.com",
  messagingSenderId: "765204067810",
  appId: "1:765204067810:web:0debad2a2ff117089b35bb",
  measurementId: "G-M4QSJLHCHR"
};
var filesize=[];
var filedate=[];
var filename=[];
var link=[];
var sno=0;



function addrow(filename,size,data,link){
  sno++;
  document.querySelector("#newrow").innerHTML+=`<tr><th scope="row">${sno}</th>
    <td>${filename}</td>
    <td>${data}</td>
    <td>${size} bytes</td>
    <td><img class="icons" src="icons/download.png"  alt="download-icon"><a href="${link}" target="_blank">Download link</a></td>
    </tr>
  `;
  
}
 
 

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);



 const storage = getStorage();
 const listRef = ref(storage, 'images');
const tableRow=document.querySelector("#newrow")
 



var index=0;



  listAll(listRef)
    .then((res) => {
      res.items.forEach((itemRef) => {
          getDownloadURL(ref(storage, itemRef.fullPath))
          .then((url) => {
          const metaRef = ref(storage, 'images/'+itemRef.name);
          getMetadata(metaRef)
          .then((metadata) => {
            
            link[index]=url;
            filename[index]=metadata.name;
            filesize[index]=metadata.size;
            filedate[index]=metadata.timeCreated;

            addrow(filename[index],filesize[index],filedate[index],link[index]);
            index++;
            

                })
                .catch((error) => {
                  console.log("Not able to get metadata:",error);
                });
          
      
          })
          .catch((error) => {
            console.log("Error In getting file url :",error)
          });

      
  });
  }).catch((error) => {
    console.log("Not able to load data from firebase storage :" ,error)

  });





   
 






  








       