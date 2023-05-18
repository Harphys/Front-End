const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/frontend4.jpeg") {
    myImage.setAttribute("src", "images/frontend3.jpeg");
  } else {
    myImage.setAttribute("src", "images/frontend4.jpeg");
    
  }
};

let myHeading = document.querySelector("h1");

let myButton = document.querySelector("button");
myButton.onclick = () => {
    setUserName();
  };


function setUserName() {
    const myName = prompt("Kindly input your first and last name Ma/Sir.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Welcome to my Front End Development Pratice Session, ${myName}`;
    }
    let myButton2 = document.querySelector("button");
    myButton2.textContent = `Thank you Mr, ${myName}`;

  }


  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome to my Front End Development Pratice Session,`;
  }