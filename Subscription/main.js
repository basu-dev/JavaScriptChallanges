
export class Observable{
    constructor(){
        if(typeof Observable.instance=="object"){
            return Observable.instance
        }
        Observable.instance=this
    }
    subscribers=[] 
     subsribe=(subsriber)=>{
        this.subscribers.push(new subsriber('nice'))
     }
     unsubscribe=(unsubscriber)=>{
         for(let i=0;i<this.subscribers.length;i++){
             if(this.subscribers[i]===unsubscriber){
                 this.subscribers.slice(i,1);
                 return unsubscriber
             }
             else{
                 return false
             }
         }
     }
     publish(data){
         this.subscribers.forEach(s=>{
            
            if(s.onObserve){
                
                s.onObserve(data)
            }
         })
     }
}

export class myApp{
    a={
        data:""
    }
    constructor(a){
        this.a= this.proxify(this.a);
        if(a=="nice"){
            if(typeof myApp.instance ==='object'){
                return myApp.instance
            }
        }
        myApp.instance=this
        console.log("app started")
         document.querySelector("router").innerHTML=this.template;
         document.querySelector("input").addEventListener("keyup",
            (e)=>{
                this.a.data=e.target.value
            }
            )
        }
          o=new Observable();
            proxify=(model)=>{
                self=this;
                return new Proxy(model,{
                    set(target,prop,value){
                        target[prop]=value
                        self.o.publish(self.a.data);
                        return true
                    }
                })
            }
     
     createTemplate(templateString){
         templateString.split("<")
     }
     template=`
     <h3>MyAPP</h3>
     <!--abc-->
     <!-def--->
     <div >
     <input type="text" name="text">
     <button>Click</button>
     </div>
     `
    }
    export function component(object){
        // console.log(object.constructor.toString().split("constructor(")[1].split(")")[0])

    }
    class Component{
        a=new Observable();
        constructor(createNew){
            if(createNew=='nice'){
                if(typeof Component.instance==='object'){
                    return Component.instance
                }
            }
            Component.instance=this
            this.a.subsribe(Component)
        }
        onObserve(data){
            console.log("from component",data)
        }
    }
    export class basu  {
        template=document.querySelector("basu")
        a=new Observable();
        div=document.createElement("div");
        
        constructor(createNew){
            component(createNew);
            if(createNew=='nice'){
                if(typeof basu.instance==='object'){
                    return basu.instance
                }
            }
            basu.instance=this
            this.a.subsribe(basu)
            this.template.setAttribute("id","basu")
            this.template.append(this.div)
        }
        html(data,values){
            console.log("data",data,values)
            let newdata=[]
            data.forEach(x=>{
                newdata.push( x.concat('<!---->'))
            })
            let clone=this.div.cloneNode(true)
            
            console.log(clone.ENTITY_NODE)

            console.log("Newdata",newdata)
            return newdata.toLocaleString();
        
        }
        onObserve(data){
            
            let template=this.html`<div>${data}</div>`
            this.div.innerHTML=`<h5>Data Passed From MyApp Component To Dev Coomponent</h5>${data}`
            console.log("from basu",data)
            this.div.innerHTML=template
        }

}


let app=new myApp();
let c=new basu();
let m=new Component();










