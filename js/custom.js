
let seeBtn = document.getElementById("seeBtn");
let closeBtn = document.getElementById("closeBtn");
let detailsP = document.getElementById("detailsP");

function seem() {
    detailsP.classList.remove("d-none");
    seeBtn.classList.add("d-none");
    closeBtn.classList.remove("d-none");
    

  }

  function seel(){
      detailsP.classList.add("d-none");
      seeBtn.classList.remove("d-none");
      closeBtn.classList.add("d-none");
     
  }

  //for another -2

  let seeBtn2 = document.getElementById("seeBtn2");
  let closeBtn2 = document.getElementById("closeBtn2")
  let detailsP2 = document.getElementById("detailsP2");
  
  function seem2() {
      detailsP2.classList.remove("d-none");
      seeBtn2.classList.add("d-none");
      closeBtn2.classList.remove("d-none");
  
    }
  
    function seel2(){
        detailsP2.classList.add("d-none");
        seeBtn2.classList.remove("d-none");
        closeBtn2.classList.add("d-none")
    }
  

//for another -3

let seeBtn3 = document.getElementById("seeBtn3");
let closeBtn3 = document.getElementById("closeBtn3")
let detailsP3 = document.getElementById("detailsP3");

function seem3() {
    detailsP3.classList.remove("d-none");
    seeBtn3.classList.add("d-none");
    closeBtn3.classList.remove("d-none");

  }

  function seel3(){
      detailsP3.classList.add("d-none");
      seeBtn3.classList.remove("d-none");
      closeBtn3.classList.add("d-none")
  }


let seeBtn4 = document.getElementById("seeBtn4");
let closeBtn4 = document.getElementById("closeBtn4")
let detailsP4 = document.getElementById("detailsP4");

function seem4() {
    detailsP4.classList.remove("d-none");
    seeBtn4.classList.add("d-none");
    closeBtn4.classList.remove("d-none");

  }

  function seel4(){
      detailsP4.classList.add("d-none");
      seeBtn4.classList.remove("d-none");
      closeBtn4.classList.add("d-none")
  }






let rowDivs = document.getElementsByClassName("rowDiv");
let tables = document.getElementsByClassName('table');
let nightButtons = document.getElementsByClassName("mode");
let dayButtons = document.getElementsByClassName("mode2");
let navBar = document.getElementById("navBar");
let h1Title =document.getElementById("nav_title");
let header =document.getElementById("header");
let body = document.getElementsByTagName("body")[0];



function night() {
    // Set background color for rowDivs
    for (let i = 0; i < rowDivs.length; i++) {
        rowDivs[i].style.backgroundColor = "green";
    }
    
    // Set text color for tables
    for (let i = 0; i < tables.length; i++) {
        tables[i].style.color = "white";
    }
    
    // Hide night buttons and show day buttons
    for (let i = 0; i < nightButtons.length; i++) {
        nightButtons[i].classList.add("d-none");
    }
    
    for (let i = 0; i < dayButtons.length; i++) {
        dayButtons[i].classList.remove("d-none");
    }

    if(navBar){
        navBar.style.backgroundColor = "green";
    }

    if (h1Title) {
        h1Title.style.color = "white";
    }

    if (header) {
        header.style.color = "white";
    }

    if (body) {

        body.style.backgroundColor="black"
    }

    // Set background color for titleRow

}

function day() {
    // Set background color for rowDivs
    for (let i = 0; i < rowDivs.length; i++) {
        rowDivs[i].style.backgroundColor = "rgba(10,200, 400, 1)";
    }
    
    // Set text color for tables back to default (optional)
    for (let i = 0; i < tables.length; i++) {
        tables[i].style.color = ""; // assuming the default color
    }
    
    // Hide day buttons and show night buttons
    for (let i = 0; i < dayButtons.length; i++) {
        dayButtons[i].classList.add("d-none");
    }
    
    for (let i = 0; i < nightButtons.length; i++) {
        nightButtons[i].classList.remove("d-none");
    }

    if(navBar){
        navBar.style.backgroundColor = "rgba(10,200, 400, 1)";
    }
    if (h1Title) {
        h1Title.style.color = "black";
    }

    if (header) {
        header.style.color = "black";
    }

    if (body) {
        body.style.backgroundColor = "rgba(195, 216, 221, 1)";
    }
    // Set background color for titleRow

}


// search option to found data


  document.getElementById("searchInput").addEventListener("input", function () {
  let filter = this.value.toLowerCase();
  let rows = document.querySelectorAll("#table .row");

  rows.forEach((row) => {
    if (row.id === "headingRowID" || row.id === "bottom") return;

    let text = row.innerText.toLowerCase();
    row.style.display = text.includes(filter) ? "" : "none";
  });
});




                     //sent data //


// emailjs init //
(function () {
  emailjs.init({
    publicKey: "TghekllL5hZiZEKWi",
  });
})();

let sendMail = () => {
  const nameInput = document.getElementById("orgInput");
  const addressInput = document.getElementById("addressInput");
  const numberInput = document.getElementById("contactInput");
  const searchInput = document.getElementById("searchInput");

  const name = nameInput.value.trim();
  const address = addressInput.value.trim();
  const number = numberInput.value.trim();

  // Validation
  if (!name || !address) {
    alert("⚠️ প্রতিষ্ঠানের নাম এবং ঠিকানা অবশ্যই দিতে হবে!");
    return;
  }

  // Check existing rows to find if name or address matches
  let rows = document.querySelectorAll("#table .row");
  for (let row of rows) {
    if (row.id === "headingRowID" || row.id === "bottom") continue;
    let rowText = row.innerText.toLowerCase();
    if (
      rowText.includes(name.toLowerCase()) ||
      rowText.includes(address.toLowerCase())
    ) {
      alert("এই তথ্য ইতিমধ্যে আছে!");
      
      // Set search input value and trigger input event for filtering
      searchInput.value = name + " " + address;
      // Manually dispatch input event to trigger search filter
      searchInput.dispatchEvent(new Event("input"));

      return; // stop sending email
    }
  }

  // If no match, send the email
  let sentItem = {
    name: name,
    address: address,
    number: number,
  };

  emailjs
    .send("service_sf01pgf", "template_wh0vhvt", sentItem)
    .then(() => {
      alert("✅ তথ্য সফলভাবে পাঠানো হয়েছে!");

      // Clear input fields
      nameInput.value = "";
      addressInput.value = "";
      numberInput.value = "";
    })
    .catch((error) => {
      alert("❌ ইমেইল পাঠাতে সমস্যা হয়েছে: " + error.text);
      console.error("EmailJS Error:", error);
    });
};








const files = ["dhaka.html", "dhaka2.html", "dhaka3.html", "dhaka4.html"]; // Add all HTML file names here
const resultsDiv = document.getElementById("results");

document.getElementById("searchInput").addEventListener("input", async function () {
  const query = this.value.toLowerCase();
  resultsDiv.innerHTML = ""; // Clear previous results

  for (let file of files) {
    try {
      const response = await fetch(file);
      const html = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const text = doc.body.innerText.toLowerCase();

      if (text.includes(query)) {
        const match = document.createElement("div");
        match.innerHTML = `<strong>Found in:</strong> <a href="${file}" target="_blank">${file}</a>`;
        resultsDiv.appendChild(match);
      }
    } catch (err) {
      console.error("Error loading", file, err);
    }
  }
});

// to execute counter
fetch('https://api.countapi.xyz/hit/salafimasjid/visits')
          .then(res => res.json())
          .then(res => {
            document.getElementById('count').innerText = res.value;
          })
          .catch(err => console.log('Error:', err));

