/* ============================================
   projects list and link maker
   update project dict to add more yippee
   ============================================ */

/*
 label: name on icon
 href: name of linked html page
 num: card number (order of projects)
 img: linked image for icon
*/
const PROJECTS = [
  {label: "Woodwind", href: "woodwind.html", num: 1, img: "woodwind.jpg"},
  {label: "Woodwind", href: "woodwind.html", num: 2, img: "woodwind.jpg"},
  {label: "Woodwind", href: "woodwind.html", num: 3, img: "woodwind.jpg"},
  {label: "Woodwind", href: "woodwind.html", num: 4, img: "woodwind.jpg"}
]

function makeBoxes() {
  const section = document.querySelector('#cards');
  PROJECTS.sort((a,b) => a.num - b.num);
  for (const project of PROJECTS){
    const card = document.createElement("card"+project.num);
    card.innerHTML = `
        <article class="card">
          <a href="${project.href}">
            <span class="card-number">${project.num}</span>
            <br>
            <img src="${project.img}" style="border:5px outset black">
            <h2>${project.label}</h2>
          </a>
        </article>
    `;
    section.append(card);
  }
  
}
// ── Run ───────────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  makeBoxes();
});
