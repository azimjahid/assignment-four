    
    // ticket increase & decrease part
    function ticketCounting(ticketClass, isIncrease) {
        let ticketsNum = ticketsAmount(ticketClass);
        if (isIncrease == true) {
            ticketsNum++;
        } else {
            ticketsNum--;
        }
        if (ticketsNum < 0) {
            ticketsNum = 0;
        }
        document.getElementById(ticketClass + "-tickets").value = ticketsNum;
        priceCounting();
    }

    // Total Ticket price part
    function priceCounting() {
        let firstClassTicketsNum = ticketsAmount("firstClass");
        let economyClassTicketsNum = ticketsAmount("economyClass");

        let subTotal = (firstClassTicketsNum * 150) + (economyClassTicketsNum * 100);
        let tax = (subTotal * 10) / 100;
        let grandTotal = subTotal + tax;

        document.getElementById("sub-total").innerText = '$' + subTotal;
        document.getElementById("total-tax").innerText = '$' + tax;
        document.getElementById("grand-total").innerText = '$' + grandTotal;
    }

    // Ticket amount function part
    function ticketsAmount(ticketClass) {
        let tickets = document.getElementById(ticketClass + "-tickets").value;
        let ticketsNum = parseInt(tickets);
        return ticketsNum;
    }

    // popup function part
    function showPopup() {
        let firstClassTicket = ticketsAmount("firstClass");
        let economyClassTicket = ticketsAmount("economyClass");
        let totalToPay = document.getElementById("grand-total").innerText;

        document.getElementById("total-firstClass").innerText = firstClassTicket;
        document.getElementById("total-economyClass").innerText = economyClassTicket;
        document.getElementById("total-toPay").innerText = totalToPay;
        document.getElementById("comfirm-ticket").style.transform = 'scale(1) translate(-50%, -50%)';
    }

    function closePopup() {
        document.getElementById("comfirm-ticket").style.transform = 'scale(0) translate(-50%, -50%)';
    }
    // popup function part end
    // thank you