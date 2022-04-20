
    function Array()
    {
        Object.defineProperty(this, "length", {
            value: 0,                                 // better than `undefined`
            writable: true,                           // important!
            enumerable: false,                        // could be omitted
          });


          for (let i = 0; i < arguments.length; i++)
                { 
                  this[i] = arguments[i];
                }
                this.length = arguments.length;
    };

    Array.prototype.window = function (value)
    {
        let index=this.length;
        this[index]=value;
        this.length++
    };

    
    var arrObj=new Array("hii");
    console.log(arrObj)
    arrObj.window("j")
    arrObj.window(100)
    arrObj.window("Ashutosh")
    arrObj.window("masai")
    arrObj.window(20)


    var obj1=Object.values(arrObj)
    var head=document.createElement("h1").innerText="Before revesrse Array :- " 

    document.querySelector("body").append(head);

    var head1=document.createElement("h1").innerHTML=obj1

    var brea=document.createElement("br")
    document.querySelector("body").append(head1,brea);

    var bag=""
    for(let k=obj1.length-1;k>=0;k--)
    {
      bag+=obj1[k]+" "
    }
    var head2=document.createElement("h1").innerText="After revesrse Array :- "
    document.querySelector("body").append(head2);
    
    var head3=document.createElement("h1").innerHTML=bag
    document.querySelector("body").append(head3);