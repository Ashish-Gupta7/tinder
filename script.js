// get data

var users = [
    {
        profilePic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMsg: 7,
        location: "Kerala, India",
        name: "Victoria",
        age: 21,
        interests: [{
            icon: `<i class="ri-music-2-line"></i>`,
            interest: "music"
        },
        {
            icon: `<i class="ri-paint-fill"></i>`,
            interest: "painting"
        },
        {
            icon: `<i class="ri-walk-line"></i>`,
            interest: "walking"
        }],
        bio: "Lorem, amet consectetur adipisicing elit. Molestiae quaerat amet quae facilis! A, molestiae.",
        isFriend: null
    },
    {
        profilePic: "https://images.unsplash.com/photo-1597226843607-9428e087f8b9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic: "https://images.unsplash.com/photo-1603080948624-12c7a4ee73ae?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMsg: 4,
        location: "Delhi, India",
        name: "Mahi",
        age: 20,
        interests: [{
            icon: `<i class="ri-music-2-line"></i>`,
            interest: "music"
        },
        {
            icon: `<i class="ri-paint-fill"></i>`,
            interest: "painting"
        }],
        bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae quaerat amet quae facilis! A, molestiae.",
        isFriend: null
    },
    {
        profilePic: "https://images.unsplash.com/photo-1591014441032-1c4302d2191b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMsg: 6,
        location: "Bhopal, India",
        name: "Manvi",
        age: 23,
        interests: [{
            icon: `<i class="ri-quill-pen-fill"></i>`,
            interest: "drawing"
        },
        {
            icon: `<i class="ri-book-marked-line"></i>`,
            interest: "reading"
        }],
        bio: "Lorem ipsum dolor sit adipisicing elit. Molestiae quaerat amet quae facilis! A, molestiae.",
        isFriend: null
    },
    {
        profilePic: "https://images.unsplash.com/photo-1553404633-859669c11246?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic: "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMsg: 2,
        location: "Kolkata, India",
        name: "Allina",
        age: 24,
        interests: [{
            icon: `<i class="ri-music-2-line"></i>`,
            interest: "music"
        },
        {
            icon: `<i class="ri-road-map-fill"></i>`,
            interest: "travelling"
        }],
        bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae quaerat amet.",
        isFriend: null
    }
];

function select(elm) {
    return document.querySelector(elm);
}

var curr = 0;
let isAnimating = false;

function setData(idx) {
    select(".prflimg img").src = users[idx].profilePic;
    select(".badge h5").textContent = users[idx].pendingMsg;
    select(".location h3").textContent = users[idx].location;
    select(".nameage h1:nth-child(1)").textContent = users[idx].name;
    select(".nameage h1:nth-child(2)").textContent = users[idx].age;
    select(".bio p").textContent = users[idx].bio;
    
    var clutter = "";
    users[idx].interests.forEach(elm => {
        clutter += `<div class="tag flex gap-2 items-center px-3 py-1 bg-white/30 rounded-full text-sm text-white tracking-tight">
                        ${elm.icon}
                        <h3 class="capitalize">${elm.interest}</h3>
                </div>`;
    });
    select(".tags").innerHTML = clutter;
}

(function setInitial() {
    select(".maincard img").src = users[curr].displayPic;
    select(".incomingcard img").src = users[curr + 1].displayPic;

    setData(curr);
    curr = 2;
})();


function imageChange() {
    if(!isAnimating) {
        isAnimating = true;
        let tl = gsap.timeline({
            onComplete: () => {
                isAnimating = false;
                let main = select(".maincard");
                let incoming = select(".incomingcard");
    
                gsap.set(main, {
                    scale: 1,
                    opacity: 1
                });
    
                if(curr === users.length) curr = 0;
                select(".maincard img").src = users[curr].displayPic;
                curr++;
    
                incoming.classList.remove("z-[2]");
                incoming.classList.add("z-[3]");
                incoming.classList.remove("incomingcard");
    
                main.classList.remove("z-[3]");
                main.classList.add("z-[2]");
                main.classList.remove("maincard");
    
                incoming.classList.add("maincard");
                main.classList.add("incomingcard");
            }
        });
    
        tl.to(".maincard", {
            scale: 1.1,
            opacity: 0,
            ease: Circ,
            duration: 1.2
        }, "same");
        tl.from(".incomingcard", {
            scale: 1.1,
            opacity: 0,
            ease: Circ,
            duration: 1.2
        }, "same");
    }
}

let deny = select(".deny");
let accept = select(".accept");

let isAnimating1 = false;
deny.addEventListener("click", () => {
    imageChange();
    setData(curr-1);

    if(!isAnimating1) {
        isAnimating1 = true;
        let tl1 = gsap.timeline({
            onComplete: () => {
                isAnimating1 = false;
            }
        });

        tl1.from(".details .element", {
            y: "100%",
            opacity: 0,
            stagger: .06,
            ease: Circ,
            duration: 1.2
        });
    }
});
accept.addEventListener("click", () => {
    imageChange();
    setData(curr-1);

    if(!isAnimating1) {
        isAnimating1 = true;
        let tl1 = gsap.timeline({
            onComplete: () => {
                isAnimating1 = false;
            }
        });

        tl1.from(".details .element", {
            y: "100%",
            opacity: 0,
            stagger: .06,
            ease: Circ,
            duration: 1.2
        });
    }
});


function containerCreator() {
    document.querySelectorAll(".element").forEach(elm => {
        let div = document.createElement("div");
        div.classList.add(`${elm.classList[1]}container`, "overflow-hidden");
        div.appendChild(elm);
        select(".details").appendChild(div);
    });
}

