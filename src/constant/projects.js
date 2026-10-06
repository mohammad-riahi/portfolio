import img1 from "../assets/contactapp.jpg";
import img2 from "../assets/bookApp.jpg";
import img3 from "../assets/crypto app.jpg";

const projectsDetails = [
  {
    link: "https://contact-app-eight-snowy.vercel.app",
    name: "Contact App",
    id: 1,
    image: img1,
    tools: ["HTML", "CSS", "JAVASCRIPT", "REACT"],
    des: " A responsive contact manager where users can add, view, and delete contacts ",
  },
  {
    link: "https://book-app-gamma-sand.vercel.app/",
    name: "Book App",
    id: 2,
    image: img2,
    tools: ["HTML", "CSS", "JAVASCRIPT", "REACT", "localAPI"],
    des: "A responsive app showing different books with some detail about each one of them; being able to search for your book and adding specific book to your favorite list ",
  },
  {
    link: "https://crypto-app-livid-five.vercel.app/",
    name: "Cypto App",
    id: 3,
    image: img3,
    tools: ["HTML", "CSS", "JAVASCRIPT", "REACT", "RESTAPI", "Rechart library"],
    des: "A responsive app showing different books with some detail about each one of them; being able to search for your book and adding specific book to your favorite list ",
  },
];

export { projectsDetails };
