

const loadData=async ()=>{//#1 Add API 
const apiData=`https://openapi.programming-hero.com/api/ai/tools`;   
const res=await fetch(apiData);//convert res to jeson
const data=await res.json();//convert res to jeson
const postData=data.data.tools;
//console.log(postData);
displayFullData(postData)//Call API
}

const displayFullData=(postData)=>{ //#2 Get Data From Load data

    console.log(postData);
    const postContainer=document.getElementById('blog-data-container')//2.2 //Now need to show post in blog post card container


    const showAllContainer=document.getElementById('show-all-container');
   if(postData.length>4){
       showAllContainer.classList.remove('hidden')
   }else{
    showAllContainer.classList.add('hidden')
   } 
    //console.log(postData.length);
    postData=postData.slice(0,6)//Display data main page 6
    
    postData.forEach(data=>{//2.1 data show one by oner to user
        console.log(data);
        const postDataCard=document.createElement('div');//create div
        postDataCard.classList=`card w-96 bg-gray-100 shadow-xl`;//create class 

                             //  add data dynamicaly
        postDataCard.innerHTML=`
        
        <figure class="px-10 pt-10">
        <img src="${data.image}" alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title ">Features</h2>

        <ol class="text-left ">
        ${data.features.map((feature,index) => `<li class="mb-2">${index +1}.${feature}</li>`).join('')}
        </ol>

        <div class="border-b-2 border-[#c2c2c2] w-[350px]">
        
        </div>
        <h2 class="card-title">${data.name}</h2>
        <div class="flex gap-20 items-center ">
        <p class="">Publised Date: ${data.published_in
        }</p>
        <a href="#">
        <svg class="bg-[#ffdfdf] p-2 w-12 h-12 rounded-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M4.5 12H19.5M19.5 12L12.75 5.25M19.5 12L12.75 18.75" stroke="#EB5757" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></a>
        </div>
        
      </div>

        `;
        //Step 2.3 appendChild
        postContainer.appendChild(postDataCard);//Apendchild postdatacard

    })

}
loadData();


