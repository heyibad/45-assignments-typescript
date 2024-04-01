
const carsInfo=(manufacturer:string,model:string,...features:[string,any][]):
{[key:string]:any}=>
{
    let info:{[key:string]:any}={
        manufacturer,
        model}
    if(features.length>0){

        for (const [key,val] of features) {
            info[key]=val
        }
    }
return info
}
console.log(carsInfo("Tesla","Model Y",["Color","Red"],["Roof",false],["Glass","Black"]))