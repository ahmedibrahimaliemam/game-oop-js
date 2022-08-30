function Character(name,strength,health){
    this.name=name ;
    this.strength=strength ;
    this.health=health ;
    this.attackBtn=document.querySelector(`#${this.name}-attack`) ;
    this.healthBtn=document.querySelector(`#${this.name}-health`) ;
    this.progress=document.querySelector(`#${this.name}-progress`) ;
    this.gameOver=document.querySelector(`.${this.name}-btn`) ;
}
Character.prototype.attack=function(opponent){
    if(opponent.health>0){
    opponent.health-=this.strength;
    opponent.progress.style.width= `${opponent.health}%` ;
    console.log(opponent.health) 
}
if(opponent.health==0){
    let btn_sasakii=document.querySelector(".btn-sasakii") ;
    let message=document.getElementById("message") ;
    opponent.attackBtn.remove() ;
    opponent.healthBtn.remove() ;
    opponent.gameOver.innerHTML="Game Over !"
    
}



}
Character.prototype.status=function(){
    console.log(`Name ${this.name}`) ;
    console.log(`strength:${this.strength}`) ;
    console.log(`health:${this.health}`) ;
}
Character.prototype.makhealth=function(){
    if(this.health<100){
    this.health+=10 ;
    this.progress.style.width= `${this.health}%` ;
}
    if(this.health>100){
        this.health=100 ;
        this.progress.style.width= `${this.health}%` ;

    }
    
}
let nartoo= new Character("nartoo",10,100) ;
let sasakii= new Character("sasakii",5,100) ;
//define variabls
let progress=document.getElementById("progress") ;
let nartoo_attack=document.getElementById("nartoo-attack") ;
let nartoo_health=document.getElementById("nartoo-health") ;
let sasakii_attack=document.getElementById("sasakii-attack") ;
let sasakii_health=document.getElementById("sasakii-health") ;
nartoo_attack.addEventListener("click",function(){nartoo.attack(sasakii)}) ;
sasakii_health.addEventListener("click",function(){sasakii.makhealth()}) ;
sasakii_attack.addEventListener("click",function(){sasakii.attack(nartoo)}) ;
nartoo_health.addEventListener("click",function(){nartoo.makhealth()}) ;



