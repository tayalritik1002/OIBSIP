// // document.querySelector('.cross').style.display= 'none'
// document.querySelector('.hamburger').addEventListener("click", ()=>{
//     document.querySelector('.sidebar').classList.toggle('sidebarGo');
//     if(document.querySelector('.sidebar').classList.contains('.sidebarGo')){
//         document.querySelector('.hamburger').style.display = 'inline'
//         document.querySelector('.cross').style.display = 'none'
//     }
//     else{
//         setTimeout(()=>{
//             document.querySelector('.cross').style.display = 'inline'
//         }, 200);
//         document.querySelector('.hamburger').style.display = 'none'
//     }
// })

// document.querySelector('.cross').addEventListener("click", ()=>{
//     document.querySelector('.sidebar').classList.toggle('sidebarGo');
//     if(document.querySelector('.sidebar').classList.contains('.sidebarGo')){
//         document.querySelector('sidebar').classList.remove('.sidebarGo')
//         document.querySelector('.cross').style.display = 'inline'
//         document.querySelector('.hamburger').style.display = 'inline'
//     }
//     else{
//         document.querySelector('sidebar').classList.add('.sidebarGo')
//         document.querySelector('.hamburger').style.display = 'inline'
//         document.querySelector('.cross').style.display = 'inline'
//     }
// })

document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
})
document.querySelector('.cross').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
})

