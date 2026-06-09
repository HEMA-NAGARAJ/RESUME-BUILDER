function generateResume(){

let name=document.getElementById("name").value;
let address=document.getElementById("address").value;
let mobile=document.getElementById("mobile").value;
let email=document.getElementById("email").value;
let career=document.getElementById("career").value;

let ug=document.getElementById("ug").value;
let hsc=document.getElementById("hsc").value;
let sslc=document.getElementById("sslc").value;

let technical=document.getElementById("technical").value;
let soft=document.getElementById("soft").value;

let internship=document.getElementById("internship").value;
let achievement=document.getElementById("achievement").value;

let title=document.getElementById("title").value;
let domain=document.getElementById("domain").value;
let tools=document.getElementById("tools").value;
let description=document.getElementById("description").value;
let language = document.getElementById("language").value;

document.getElementById("resume").innerHTML = `
<center>
<h2>${name}</h2>
</center>

<h3>CONTACT</h3>
<p><b>Address:</b> ${address}</p>
<p><b>Mobile:</b> ${mobile}</p>
<p><b>Email:</b> ${email}</p>

<h3>CAREER OBJECTIVE</h3>
<p>${career}</p>

<h3>EDUCATION</h3>
<p><b>UG:</b> ${ug}</p>
<p><b>HSC:</b> ${hsc}</p>
<p><b>SSLC:</b> ${sslc}</p>

<h3>TECHNICAL SKILLS</h3>
<ul>
<li>${technical}</li>
</ul>

<h3>SOFT SKILLS</h3>
<ul>
<li>${soft}</li>
</ul>

<h3>INTERNSHIP</h3>
<p>${internship}</p>

<h3>ACHIEVEMENT</h3>
<p>${achievement}</p>

<h3>PROJECT</h3>
<p><b>Title:</b> ${title}</p>
<p><b>Domain:</b> ${domain}</p>
<p><b>Tools Used:</b> ${tools}</p>
<p><b>Description:</b> ${description}</p>

<h3>LANGUAGES KNOWN</h3>
<p>${language}</p>

<h3>DECLARATION</h3>
<p>I hereby declare that the information provided above is true and correct to the best of my knowledge.</p>
`;
}
