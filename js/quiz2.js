// display 1-20
for(let i =1; i<=20; i+=1){
    console.log(i)
}

// display เลขคู่ 1-20
for(let i =1; i<=20; i++){
    console.log(i%2 == 0 ? i: "")
}

//คูณด้วยสองทุก element
let mapmul = [-1,2,3,56,6,-93,0,4].map(el =>el * 2)
console.log(mapmul)

// จนที่หารสองลงตัว
let filterdivZero = [10,12,44,55,89,0,12,1].filter(el =>el/2 == 0)
console.log(filterdivZero)
