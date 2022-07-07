const data = async () => {
    
    let uid;
    let tname;
    let iscomplate;
    
    try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        uid= data.userId
        tname=data.title
        iscomplate = data.completed;
    });
      
    document.querySelector("#uname").innerHTML = `${uid}`;           
    document.querySelector("#tname").innerHTML = `${tname}`;           
    document.querySelector("#iscomplate").innerHTML = `${iscomplate}`;           
  } catch (error) {
     document.querySelector("#title").value = window.alert("ERROR:\n Something Went Wrong...");
  }
};

data();
