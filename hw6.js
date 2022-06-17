class vector {
    constructor(array) {
        this.a = array
      }

      length() {
        let b= 0
      for(let i=0; i<this.a.length; i++)
      {
        b+= this.a[i]*this.a[i]
      }
        return Math.sqrt(b)
    }

  
  neg() {
      let a = []
      let i=0
      for (i<this;x.length;i++)
       {
         a[i] = this.x[i]*-1;
       }
      return new Vector(a)
    }

    add(p2) {
      let a = [];
      for (let i=0; i<this.a.length; i++) {
        a[i] = p1.a[i]+p2.a[i]
      }
      return new Vector(a)
    }
     sub(p2) { 
      return this.add(p2.neg())
    }

    distance(p2) { 
      return this.sub(p2).length()
    }
  
    toString() {
      return this.a.toString()
    }

    dot()
    {
        let c = 0
        for(let i = 0; i < this.a.length; i++)
        {
            c += p1.a[i] * p2.a[i]
        }
        return c
    }
}

  let p1 = new Vector([2,3,4]), p2 = new Vector([1,2,3])
  console.log("p1=", p1, ", p2=", p2)
  console.log("p1.length() =",p1.length(), ", p2.length() =",p2.length())
  console.log("p1.neg()=", p1.neg(), ", p2.neg()=", p2.neg())
  console.log("p1.add(p2)=", p1.add(p2))
  console.log("p1.sub(p2)=", p1.sub(p2))
  console.log("p1.distance(p2)=", p1.distance(p2))
  console.log("p1.toString() =", p1.toString(), ", p2.toString() =",p2+'')
  console.log("p1.dot(p2)", p1.dot(p2))
