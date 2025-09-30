async function loadTutors() {
try {
const res = await fetch("data/tutors.json");
const tutors = await res.json();

const list = document.getElementById("tutorList");
list.innerHTML = "";

tutors.forEach(tutor => {
const card = document.createElement("div");
card.className = "card";
card.style.marginBottom = "16px";

// 🎓 Demo Tutor special button
const lessonBtnText = tutor.name === "Demo Tutor" ? "🎓 Book Demo Lesson" : "📹 Start Lesson";

card.innerHTML = `
<img src="${tutor.photo}" alt="${tutor.name}" style="width:100px;height:100px;border-radius:50%;object-fit:cover;">
<h4>${tutor.name}</h4>
<p><strong>Subjects:</strong> ${tutor.subjects}</p>
<p><strong>Languages:</strong> ${tutor.languages}</p>
<p><strong>Rates:</strong> ${tutor.rate30} CFA / 30 mins — ${tutor.rate60} CFA / 1 hr</p>
<button class="btn" onclick="startLesson('${tutor.name}')">${lessonBtnText}</button>
<button class="btn" onclick="startChat('${tutor.name}')">💬 Chat</button>
<a href="https://paydunya.com/checkout/live_public_Y9lldVvGSq0bp3OW11W4xFceQOC" target="_blank">
<button class="btn">💳 Pay</button>
</a>
`;
list.appendChild(card);
});
} catch (err) {
console.error("Error loading tutors:", err);
document.getElementById("tutorList").innerHTML = "<p>⚠️ Unable to load tutors.</p>";
}
}

function startChat(tutorName) {
openModal("chatBox");
document.getElementById("chatTitle").innerText = "Chat with " + tutorName;
}

// Load tutors when page is ready
document.addEventListener("DOMContentLoaded", loadTutors);
