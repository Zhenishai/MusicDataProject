export function addSection(container, title, content) {
  const section = document.createElement("section");

  const h2 = document.createElement("h2");
  h2.textContent = title;

  const p = document.createElement("p");
  p.textContent = content;

  section.appendChild(h2);
  section.appendChild(p);

  container.appendChild(section);
}