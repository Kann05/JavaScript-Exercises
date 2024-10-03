document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    })

    const hamMenu = document.querySelector(".ham-menu");
    const cartmenu = document.querySelector(".shoppingcartindex");

    const offScreenMenu = document.querySelector(".off-screen-menu");
    const offScreenCartMenu = document.querySelector(".off-screen-cart-menu");

    hamMenu.addEventListener("click", () => {
        hamMenu.classList.toggle("active");
        offScreenMenu.classList.toggle("active");
    });

    cartmenu.addEventListener("click", () => {
        cartmenu.classList.toggle("active");
        offScreenCartMenu.classList.toggle("active");
    });

    const faqonclick = () => {
        const connections = document.querySelectorAll(".insidefaq");
        connections.forEach((connection) => {
            connection.addEventListener('click', () => {
                const connecttodiv = connection.querySelector(".faqdescription1");
                const connecttodiv2 = connection.querySelector(".faqdescription2");
                const connecttodiv3 = connection.querySelector(".faqdescription3");
                const connecttodivgift = connection.querySelector(".faqdescriptiongift");


                if (connection.contains(connecttodiv)) {
                    if (connecttodiv.innerHTML === "") {
                        connecttodiv.innerHTML = "Join our Discord server, submit a ticket with your desired account details, pay using the provided methods, and receive your account credentials promptly. Easy and efficient!";
                    } else {
                        connecttodiv.innerHTML = "";
                    }
                }

                if (connection.contains(connecttodiv2)) {
                    if (connecttodiv2.innerHTML === "") {
                        connecttodiv2.innerHTML = "Active RP accounts are those currently in use, played within the last month. Inactive RP accounts, on the other hand, haven't been accessed for over a month.";
                    } else {
                        connecttodiv2.innerHTML = "";
                    }
                }

                if (connection.contains(connecttodiv3)) {
                    if (connecttodiv3.innerHTML === "") {
                        connecttodiv3.innerHTML = "Yes, you will receive a 24-hour warranty with every account purchase from us. Please note that refunds are not permitted.";
                    } else {
                        connecttodiv3.innerHTML = "";
                    }
                }
                if (connection.contains(connecttodivgift)) {
                    if (connecttodivgift.innerHTML === "") {
                        connecttodivgift.innerHTML = "You provide us with your in-game name and tag (e.g., SummonerName#1234) along with your region. Our staff will then contact you and send a friend request. Once you accept the friend request, your gift will be sent instantly.";
                    } else {
                        connecttodivgift.innerHTML = "";
                    }
                }
            });
        });
    };
    faqonclick();
});
