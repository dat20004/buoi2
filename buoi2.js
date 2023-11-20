//1. Viết chương trình JavaScript để in ra tất cả các số từ 1 đến 10 bằng vòng lặp for.
//for( let i = 1 ; i < 10 ; i++){
//    console.log(i+1)
//}
//2. Tạo một biến n và sử dụng vòng lặp for để tính tổng các số từ 1 đến n.
//const n = 300;
//let sum = 0;
//for(let i = 0 ; i <= n ; i++){
//  sum+=i;
//}
//console.log("tổng các số từ 1 đến n :",sum);
//3. Viết chương trình JavaScript để in ra tất cả số chẵn từ 1 đến 20 bằng vòng lặp for.

//for(let i = 1 ; i < 20 ; i++){
// if(i%2===0){
//     console.log("tất cả số chẵn từ 1 đến 20 :",i);
// }
//}
//4. Tạo một biến i và sử dụng vòng lặp for để tính giai thừa của i (i!) cho một giá trị i cụ thể.
//const n = 10
//let giaithua = 1
//for (let i = 1; i <= n ; i++){
//    giaithua*=i;
//}
//console.log("giai thua cua i:",giaithua)

//5. Viết chương trình JavaScript để in ra bảng cửu chương từ 2 đến 9 bằng vòng lặp for.
//   const n = 10;
//  for(let i = 1 ; i <= n ; i++){
//  console.log("2 *",i,"=",2*i)
//   }

//  6. Tạo một biến n và sử dụng vòng lặp while để tính tổng các số từ 1 đến n mà là bội số của 3 hoặc 5.
//   const n = 30;
//  let sum = 0;
//  let i = 1;
//  while(i <= 30){
//      if (i % 3 === 0 || i % 5 === 0){
//          sum+=i;
//       }
//       i++;
//   }
//  console.log("tổng các số từ 1 đến n :",sum)
//7. Viết chương trình JavaScript để tìm tất cả số nguyên tố từ 1 đến 50 bằng vòng lặp.
// const n = 50;
// for(let i = 2 ; i <= n ; i++){
//  let ok = 1;
// for (let j =  2 ; j < i ;j++ ){
//       if( i % j === 0 ){
//           ok = 0;
//       }
//   }
//        if(ok === 1){
//           console.log(i,"Là số nguyên tố")
//       }
//  }

//9. Viết chương trình JavaScript để đảo ngược một chuỗi văn bản bằng vòng lặp (ví dụ: "hello" thành "olleh").
//   const text = "hello"
//  let newText = ""
// for(let i = text.length - 1 ; i >= 0 ; i--){
//    newText += text[i]
// }
//   console.log(newText)

//10. Tạo một biến year và sử dụng vòng lặp while để in ra tất cả các năm nhuận từ year đến year + 50.
//const year = 2020
//let i = 2020;
//while (i <= 2070) {
//   if (i % 4 === 0 && i % 100 !== 0 || i % 400 === 0) {
//       console.log(i, "là năm nhuận")
//    }
//    i++
//}

// Tạo một biến n và sử dụng vòng lặp while để in ra tất cả các số nguyên tố từ 1 đến n.

const n = 100;
let i = 1;
while (i <= n) {
      if(i > 1){
   if (i === 2 || i === 3 || i === 5 || i === 7) {
     console.log(i, "Là số nguyên tố")
 }
   if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0) {
      console.log(i, "Là số nguyên tố")
 }
      }
 i++
    }

//11. Viết chương trình JavaScript để tạo một hình tam giác vuông bằng dấu sao (*) bằng vòng lặp.

//const n = 5;
// let hinh=""
//for (let i = 1; i <= n; i++) {
//   let tamgiac = " ";
//   for (let j = 1; j <= i; j++) {
//       tamgiac += "*";
//   }
//  console.log(tamgiac)
//}

//13. Viết chương trình JavaScript để in ra tất cả các số Armstrong (số mà tổng lũy thừa của các chữ số bằng chính nó) từ 1 đến 100.
//function count(n) {
//    let cnt = 0;
 //   while (n) {
 //       n /= 10;
  //      ++cnt;
  //  }
  //  return cnt;
//}
//function armstrong(n) {
  ///  let sum = 0;
  //  let tmp = n;
  //  let d = count(n);
  //  while (n) {
  //      sum += Math.pow(n % 10, d);
  //      n /= 10;
  //  }
  //  return sum === tmp;
//}
//for (let i = 1; i<= 100; i++) {
 //   if (armstrong(i) === true) {
  //      console.log(i)
  //  }
//}





