 const Container = document.querySelector("#root");

 const reactElement={
   type:'a',
   props: {
         href:'https://google.com',
         target:'_blank' 
   },
   children:'click me to vist' 
 }

 function customeRender(reactElement,Container){
    // I comment this code cause hear you can see i have to write setAttributes again and again to make it more clean and 
    // reusable we use loop 
//    const domElement=document.createElement(reactElement.type)
//    domElement.innerHTML=reactElement.children;
//    domElement.setAttribute('href',reactElement.props.href)
//    domElement.setAttribute('target',reactElement.props.target)
   
//    Container.appendChild(domElement);

const domElement=document.createElement(reactElement.type);
domElement.innerHTML=reactElement.children;
for (const i in reactElement.props) {
    
     domElement.setAttribute(i,reactElement.props[i]) // hear i traverse in props
    }
    Container.appendChild(domElement);
}



 
 customeRender(reactElement,Container);