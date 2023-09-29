var a = prompt("enter player of X : ")
var b = prompt("enter player of Y : ")
let boxes = Array.from(document.getElementsByClassName("box"));
let blanks = Array(9).fill(null);
let ind = getComputedStyle(document.body).getPropertyValue('--lineblock')
document.querySelector("h1").innerHTML=a+"'s turn"
var player = "X"
function turn () {
    if(player == "X"){
        player = "O"
        document.querySelector("h1").innerHTML=b+"'s turn"
    }
    else{
        player = "X"
        document.querySelector("h1").innerHTML=a+"'s turn"
    }
} 

function sig(n) {
    if (n==1){
        document.getElementById("1").style.color="#66ff00";
    }
    if (n==2){
        document.getElementById("2").style.color="#66ff00";
    }
    if (n==3){
     
        document.getElementById("3").style.color="#66ff00";
    }
    if (n==4){
        document.getElementById("4").style.color="#66ff00";
    }
    if (n==5){
        document.getElementById("5").style.color="#66ff00";
    }
    if (n==6){
        document.getElementById("6").style.color="#66ff00";
    }
    if (n==7){
        document.getElementById("7").style.color="#66ff00";
    }
    if (n==8){
        document.getElementById("8").style.color="#66ff00";
    }
    if (n==9){
        document.getElementById("9").style.color="#66ff00";
    }
    return
}

const start = () => {

  boxes.forEach(box => box.addEventListener('click',playy))

}

function playy(k){
    const id = k.target.id;
    if (!blanks[id]){
         blanks[id] = player 
         k.target.innerText = player

        if(win() != false){

            
            if(player == "X"){
                document.querySelector("h1").innerHTML=a+" has wonnn !!!"
            }
            if(player == "O"){
                document.querySelector("h1").innerHTML=b+" has wonnn !!!"
            }
            
            let line = win();
            sig(line[0]);
            sig(line[1]);
            sig(line[2]);
           
           
            
            
        } 
        
        else{
        
         if(player != "X" && player != " "){
            player = "X"
            document.querySelector("h1").innerHTML=a+"'s turn"
        }
        else{
            player = "O"
            document.querySelector("h1").innerHTML=b+"'s turn"
        }}
         
    }




    
}
const possib=[[1,2,3],
[4,5,6],
[7,8,9],
[1,4,7],
[2,5,8],
[3,6,9],
[1,5,9],
[3,5,7]];

function win(){
    for (const condition of possib) {
        let [a,b,c] = condition
        if (blanks[a] && (blanks[a] == blanks[b] && blanks[a] == blanks[c]) ) {
            return [a,b,c]; 
        }
    }

    return false;

}

let restarter = document.getElementById("res")
restarter.addEventListener("click",restart)

function restart(){
    blanks.fill(null)
    boxes.forEach(box => { box.innerText = ''});
    document.getElementById("1").style.color="white";
    document.getElementById("2").style.color="white";
    document.getElementById("3").style.color="white";
    document.getElementById("4").style.color="white";
    document.getElementById("5").style.color="white";
    document.getElementById("6").style.color="white";
    document.getElementById("7").style.color="white";
    document.getElementById("8").style.color="white";
    document.getElementById("9").style.color="white";
    document.querySelector("h1").innerHTML=a+"'s turn"
}

start()
