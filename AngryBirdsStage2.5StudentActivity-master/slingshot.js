class String{
    constructor(bodyA,pointB)
    {
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            lenght:10
        }
       this.sling1=loadImage("sling1.png")
       this.sling2=loadImage("sling2.png")
       this.sling3=loadImage("sling3.png")
       this.sling=Constraint.create(options)

    }
    display(){
       if(this.sling.bodyA) {
           var pointB=this.sling.bodyA.position
           var pointA=this.sling.pointB
       
     line(bodyA.x,bodyA.y.pointB.x,pointB.y)}

    }
}