const fs = require("fs");

//  const quote = "Make everyday a little less ordinarily";
 
// fs.writeFile("html-.txt", quote, () => {
//   console.log("Completed Writing");
//   const quote2 = "Make everyday a little less ordinarily";
// });
// const quote2 = "Love makes life beautiful..!!";
// for(let i = 1;i <=10;i++){
//     fs.writeFile(`./backup/text-${i}.html`, quote2, () => {
//         console.log(`Completed Writing text-${i}.html`); 
//     });
//     }

    const[, , noofFiles] = process.argv;
    console.log(noofFiles);
    const quote3 = "Just smile out and face the situation...";
    // for(let i = 1;i <=noofFiles;i++){
    //     fs.writeFile(`./backup/file-${i}.txt`, quote3, () => {
    //         console.log(`Completed Writing file-${i}.txt`); 
    //     });
    //     }

    // <<<<<Reading a file >>>>>>
    // fs.readFile("./nice.txt", "utf-8", (err, data) => {
    //     if (err) {
    //       console.log("Error❌", err);
    //     }
    //     console.log("The content of the file is", data);
    //   });

      //<<<Appending a file >>>

    //   const quote4 = "\ntake care";

    //   fs.appendFile("./cool.txt", quote4, () => {
    //     console.log("completed writing");
    //   });
//<<<Deleting a File>>>

fs.unlink("./cool.txt",(err) => {
    if(err) throw err;
    console.log("File deleted");
});





// ------
// console.log(document);
// -------
// console.log(global);
// --------
// const double = (num) => num*2;
// console.log(double(10)) ;
// console.log(process.argv) ;
// -----------
// const quote2 = "Live more, worry Less🥳";
//Task - 1 - 7: 20
//Create the below file with quote 2 as a content
// /backup/
// text-1.html
// text-2.html
// text-3.html
//...
// text-10.html

// for (let i = 1; i <= 10; i++) {
//   fs.writeFile(`./backup/text-${i}.html`, quote2, () => {
//     console.log(`Completed Writing text-${i}.html`);
//   });
// }

// const [, , noofFiles] = process.argv;
// console.log(noofFiles);

// const quote3 = "Happy day🥳🥳";

// for (let i = 1; i <= noofFiles; i++) {
//   fs.writeFile(`./backup/note-${i}.txt`, quote3, () => {
//     console.log(`Completed Writing note-${i}.txt`);
//   });
// }



// const quote4 = "\nTake Care";

// fs.appendFile("./nice.txt", quote4, () => {
//   console.log("Completed Writing");
// });

// fs.unlink("./nice.txt", (err) => {
//   if (err) throw err;
//   console.log("File deleted");
// });