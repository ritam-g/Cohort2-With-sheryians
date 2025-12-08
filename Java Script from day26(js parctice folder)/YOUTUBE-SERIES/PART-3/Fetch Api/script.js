// ✅ Target MAIN
const main = document.querySelector("main");

// ✅ Add Layout Styling to MAIN (optional but recommended)
main.className =
  "min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex flex-wrap items-center justify-center gap-10 p-10";

// ✅ Fetch Users (Modern Async/Await)
async function fetchUsers() {
  try {
    const res = await fetch("https://randomuser.me/api/?results=3");
    const data = await res.json();

    data.results.forEach(user => {
      const userCard = createUserCard(user);
      main.appendChild(userCard);
    });

  } catch (error) {
    console.error("API Error:", error);
  }
}

fetchUsers();


// ✅ Reusable Card Function (Enhanced UI)
function createUserCard(user) {

  // ✅ Card
  const card = document.createElement("div");
  card.className =
    "group relative max-w-sm w-full bg-white/5 backdrop-blur-xl text-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-indigo-500/40 border border-white/10";

  // ✅ Image Wrapper
  const imgWrap = document.createElement("div");
  imgWrap.className = "relative overflow-hidden";

  // ✅ Image
  const img = document.createElement("img");
  img.src = user.picture?.large || "";
  img.alt = user.name.first;
  img.className =
    "w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110";

  // ✅ Gender Badge
  const badge = document.createElement("span");
  badge.className =
    "absolute top-4 left-4 bg-black/70 backdrop-blur px-3 py-1 text-xs rounded-full tracking-wide";
  badge.innerText = user.gender.toUpperCase();

  imgWrap.appendChild(img);
  imgWrap.appendChild(badge);

  // ✅ Content Wrapper
  const content = document.createElement("div");
  content.className = "p-6 space-y-3";

  // ✅ Name
  const name = document.createElement("h2");
  name.className = "text-2xl font-bold tracking-wide";
  name.innerText = `${user.name.first} ${user.name.last}`;

  // ✅ Role
  const role = document.createElement("p");
  role.className = "text-indigo-400 text-sm font-medium";
  role.innerText = "Verified Community Member";

  // ✅ Description
  const desc = document.createElement("p");
  desc.className = "text-gray-300 text-sm leading-relaxed";
  desc.innerText = `📍 ${user.location.city}, ${user.location.country}
📧 ${user.email}`;

  // ✅ Buttons Wrapper
  const btnWrapper = document.createElement("div");
  btnWrapper.className = "flex gap-4 pt-4";

  // ✅ Follow Button
  const followBtn = document.createElement("button");
  followBtn.className =
    "flex-1 bg-indigo-500 hover:bg-indigo-600 py-2 rounded-xl text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/50";
  followBtn.innerText = "Follow";

  // ✅ Message Button
  const msgBtn = document.createElement("button");
  msgBtn.className =
    "flex-1 border border-white/20 hover:bg-white/10 py-2 rounded-xl text-sm font-semibold transition-all duration-300";
  msgBtn.innerText = "Message";

  // ✅ Append Buttons
  btnWrapper.appendChild(followBtn);
  btnWrapper.appendChild(msgBtn);

  // ✅ Append Content
  content.appendChild(name);
  content.appendChild(role);
  content.appendChild(desc);
  content.appendChild(btnWrapper);

  // ✅ Final Card Structure
  card.appendChild(imgWrap);
  card.appendChild(content);

  return card;
}
