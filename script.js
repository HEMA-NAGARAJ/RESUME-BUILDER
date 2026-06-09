function generateResume() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let skills = document.getElementById("skills").value;
    let education = document.getElementById("education").value;

    document.getElementById("resume").innerHTML = `
        <h2>${name}</h2>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Skills: ${skills}</p>
        <p>Education: ${education}</p>
    `;
}
