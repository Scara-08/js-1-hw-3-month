

// let div = document.querySelector('div')
// div.innerHTML = "hhduvv"
// div.classList = "blue"
// dov.style.color  = "red"
// console.log(div);


document.addEventListener('DOMContentLoaded', function(){


const array = [
    {
        name: 'xiao',
        
        age: 2000
    }, 

    {
        name: 'klee',
        age: 14
    },

     {
        name: 'ganyu',
        age: 2500
    } ,

    {
        name: 'shenhe',
        age: 1500
    },

     {
        name: 'yelan',
        age: 20
    }
]


const container = document.getElementById('container')




array.forEach(item => {
    const div = document.createElement('div');
    div.innerHTML = `
    <div style="
    flex-wrap:wrap;
    font-weight: 1000;
      text-align : center;
      border: 3px solid black;
      border-radius: 40px;
      width : 450px;
      align-items:center;
      margin-bottom: 10px;
      margin-top: 20px;
      justify-content: center;
      padding: 10px;
      #container style="
    ">
      <p> ${item.name}</p>
      <p> ${item.age}</p>
      <p style="
      gap:5px;
      </p>
    </div>
  `;
  container.appendChild(div);
});
})

container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.alignItems = 'center';
container.style.justifyContent = 'center';
container.style.padding = '30px';
container.style.margin = '15px';


// let div = document.querySelector("div")
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     div.innerHTML += `<div>${element.name}<div/>`
// }




// let age = document.querySelectorAll("div")
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     div.innerHTML += `<div>${element.age}<div/>`
// }


// for (let i = 0; i < array.length; i++) {
//     const arr2 = array[i];
//     array.style.border = "1px blue solid";
//     array.style.padding = "1rem";
//   }
  


//    function filterArrays(array) {
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//        if ( element.age > 20) {
//         newArray.push(element)
//        }
        
//     }
//       return newArray
//    }

    // function Test(array) {
    //     const calback = item => item.age > 20
          //return array.filter(calback)
    //     return.array.filter(item => item.age > 20)
    // }




//   let arr2 = filterArrays(array);
//   console.log(arr2);

  // let filterAge = (array) => array.filter((element) => element.age > 20);




















