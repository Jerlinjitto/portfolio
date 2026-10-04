const EMAIL = "jerlinjv390@gmail.com";
const gmail = (s="", b="") => `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${encodeURIComponent(s)}&body=${encodeURIComponent(b)}`;

// Gmail chat button + form
const g = document.getElementById("gchat");
g.href = gmail("Hello Jerlin, I saw your portfolio");
g.target = "_blank"; g.rel = "noopener";
document.getElementById("mailForm").addEventListener("submit", e => {
  e.preventDefault();
  const n = fName.value, m = fEmail.value, t = fMsg.value;
  window.open(gmail(`Portfolio message from ${n}`, `${t}\n\nFrom: ${n} (${m})`), "_blank", "noopener");
});

// Typewriter
const words = ["Full Stack Developer", "Django Developer", "React Developer"];
let w = 0, c = 0, del = false;
(function type() {
  const el = document.getElementById("typed"), word = words[w];
  el.textContent = word.slice(0, c);
  if (!del && c++ === word.length) { del = true; return setTimeout(type, 1400); }
  if (del && --c === 0) { del = false; w = (w + 1) % words.length; }
  setTimeout(type, del ? 45 : 90);
})();

// Reveal on scroll
const io = new IntersectionObserver(es => es.forEach(x => x.isIntersecting && x.target.classList.add("in")), { threshold: .15 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

// Mobile menu
const menu = document.getElementById("menu");
document.getElementById("burger").onclick = () => menu.classList.toggle("open");
menu.addEventListener("click", () => menu.classList.remove("open"));
document.getElementById("yr").textContent = new Date().getFullYear();

// ==========================================
// PROJECT DATA
// ==========================================
const PROJECTS = {
    clinical: {
        title: "Clinical Management System",
        img: "assets/CMS Project Image.png",
        desc: "A full stack web application designed to manage patients, appointments, consultations, prescriptions, laboratory services, pharmacy operations and billing in one integrated platform. The system provides role-based access for administrators, receptionists, doctors, pharmacists and laboratory technicians.",
        features: [
            "Role-based user authentication",
            "Patient registration and management",
            "Appointment scheduling and management",
            "Doctor consultation and prescription management",
            "Pharmacy inventory and billing",
            "Laboratory test and report management",
            "OPD billing and invoice management",
            "Admin dashboard and staff management",
            "Secure JWT authentication",
            "Responsive user interface"
        ],
        stack: [
            "Django",
            "Django REST Framework",
            "React.js",
            "MySQL",
            "Rest Api",
            "JWT"
        ]
    },

    movie: {
        title: "Movie Ticket Booking System",
        img: "assets/MTB Project Image.png",
        desc: "A full stack web application that allows users to browse movies, choose theatres and show timings, select seats from an interactive seat map and book tickets online. The React.js frontend provides a responsive booking experience while the Django backend manages authentication, movies, shows, seat availability and bookings.",
        features: [
            "User registration and secure login",
            "Browse movies and movie details",
            "Theatre and showtime selection",
            "Interactive seat selection",
            "Available and booked seat management",
            "Online ticket booking",
            "Booking summary and history",
            "Admin management for movies and theatres",
            "Show and booking management",
            "Responsive design for mobile and desktop"
        ],
        stack: [
            "Django",
            "Django REST Framework",
            "React.js",
            "MySQL",
            "Fast Api"
        ]
    },

    hospital: {
        title: "Hospital Management System",
        img: "assets/HMS Project Image.png",
        desc: "A web-based application designed to simplify and organize essential hospital operations. The system helps manage patient information, doctors, appointments, prescriptions and other day-to-day hospital activities through a simple and user-friendly interface.",
        features: [
            "Patient registration and management",
            "Patient record management",
            "Doctor information management",
            "Department management",
            "Appointment scheduling",
            "Prescription management",
            "Organized patient information",
            "Simple and user-friendly interface",
        ],
        stack: [
            "HTML",
            "CSS",
            "JavaScript",
        ]
    }
};

// ==========================================
// MODAL ELEMENTS
// ==========================================
const modal = document.getElementById("modal");
const mImg = document.getElementById("mImg");
const mTitle = document.getElementById("mTitle");
const mDesc = document.getElementById("mDesc");
const mFeat = document.getElementById("mFeat");
const mStack = document.getElementById("mStack");
const mClose = document.getElementById("mClose");

// ==========================================
// OPEN PROJECT
// ==========================================
document.querySelectorAll("[data-open]").forEach(button => {
    button.addEventListener("click", function () {
        const projectId = this.getAttribute("data-open");
        const project = PROJECTS[projectId];
        // Check if project exists
        if (!project) {
            console.error("Project not found:", projectId);
            return;
        }

        // Set image
        if (mImg) {
            mImg.src = project.img;
            mImg.alt = project.title;
        }

        // Set title
        if (mTitle) {
            mTitle.textContent = project.title;
        }

        // Set description
        if (mDesc) {
            mDesc.textContent = project.desc;
        }

        // Set features
        if (mFeat) {
            mFeat.innerHTML = project.features
                .map(feature => `<li>${feature}</li>`)
                .join("");
        }

        // Set technology stack
        if (mStack) {
            mStack.innerHTML = project.stack
                .map(technology => `<span>${technology}</span>`)
                .join("");
        }

        // Open modal
        if (modal) {
            modal.classList.add("open");
            modal.setAttribute("aria-hidden", "false");
        }
    });
});

// ==========================================
// CLOSE MODAL
// ==========================================
function closeProjectModal() {
    if (!modal) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
}

// ==========================================
// CLOSE BUTTON
// ==========================================
if (mClose) {
    mClose.addEventListener("click", closeProjectModal);
}

// ==========================================
// CLICK OUTSIDE MODAL TO CLOSE
// ==========================================
if (modal) {
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeProjectModal();
        }
    });
}

// ==========================================
// ESCAPE KEY TO CLOSE
// ==========================================
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeProjectModal();
    }
});