

const loadData=async ()=>{//#1 Add API 
const apiData=`https://openapi.programming-hero.com/api/ai/tools`;   
const res=await fetch(apiData);//convert res to jeson
const data=await res.json();//convert res to jeson
const postData=data.data.tools;
//console.log(postData);
displayFullData(postData)//Call API
}

const displayFullData=(postData)=>{ //#2 Get Data From Load data

    //console.log(postData);
    const postContainer=document.getElementById('blog-data-container')//2.2 //Now need to show post in blog post card container
    
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
        <h2 class="card-title">${data.name}</h2>
        <p>${data.description}</p>
        <div class="card-actions">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>

        `;
        //Step 2.3 appendChild
        postContainer.appendChild(postDataCard);//Apendchild postdatacard

    })

}
loadData();


