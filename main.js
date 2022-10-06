
   
if(!String.prototype.include){
    String.prototype.include=function(search, start){
        if(search instanceof RegExp){
            throw TypeError('Đối số đầu tiên phải là một biểu thức chính quy');
        }
        if(start=== undefined){
            start=0;
        }
        return this.indexOf(search,start)!==-1;
    }
}


let myName ='ngo van quy';
console.log(myName.include('ngo',0));
