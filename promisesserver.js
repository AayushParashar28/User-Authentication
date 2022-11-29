function downloadSong() {

    console.log("Downloading started .....");

    return new Promise(function callback(resolve, reject) {
        
        setTimeout(function fun() {

            resolve("excuses");

        }, 1000);
    })
}

function writeSong() {

    console.log("File Started");

    // return new Promise(function callback(resolve, reject) {
        
    //     setTimeout(function fun1() {

    //         resolve("excuses");

    //     }, 1000);
    // })
}


function drivelinkSong() {

    console.log("Drive Started ");

    // return new Promise(function callback(resolve, reject) {
        
    //     setTimeout(function fun() {

    //         resolve(value);

    //     }, 1000);
    // })
}

let value = downloadSong();

value.then(function fun1(v) {

    console.log("Downloaded Song  = ",v +".mp3");
    console.log("Song Download Completed");

    let v1 = writeSong();
    return v + ".mp3"
}).then(function fun2(v1){
    
    console.log("File name : " + v1 + ".txt");
    console.log("File Ends");
    let v2 = drivelinkSong();
    return v1 + ".txt" ;

 }).then(function fun3(v2){

    console.log("Drive link is = www.drive.google.com/", v2);
    console.log("Drive Ends");

})