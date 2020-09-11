console.log("fetch data")

// API website link =  https://jsonplaceholder.typicode.com/

    // fetching data throught promises

         // get request

fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json() )
        .then((json) => console.log(json))


        // post request

fetch ("https://jsonplaceholder.typicode.com/posts",{

        method : "POST",
        body : JSON.stringify({

            title : "hello",
            body : "world",
            userid : 4
        }),
        headers : {

            "Content-type": "application/json; charset=UTF-8"
        }
})
    .then((response) => response.json())
        .then((json) => console.log(json));


    // fetching data throught asyn/await 

    

        // get request

async function getData(){

        let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        console.log(response)

        let json = await response.json();
        console.log(json)
}

getData()

        // post request

async function postData() {

        let response = await fetch("https://jsonplaceholder.typicode.com/posts",{

                method : "POST",
                body : JSON.stringify({
                    
                    title : "foo",
                    body : "bar",
                    userId : 5
                }),

                headers : {

                    "Content-type": "application/json; charset=UTF-8"
                }
        })

        console.log( "response = " , response)

        let json = await response.json();
        console.log(json)

        console.log("response in json = " , json)
}

postData()