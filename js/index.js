window.addEventListener("DOMContentLoaded", () => {
    const textPara = document.getElementById("textPara");
    const text = "Jana Gana Mana Adhinayak Jaya He Bharat Bhagya Vidhata, Punjab Sindhu Gujarat Maratha Dravida Utkala Banga, Vindhya Himachal Yamuna Ganga Uchchala Jaladhi Taranga, Tava Shubh Name Jage, Tava Shubh Ashish Mange, Gahe Tava Jaya Gatha, Jana Gana Mangala Dayak Jaya He Bharat Bhagya Vidhata, Jaya He, Jaya He, Jaya He, Jaya Jaya Jaya Jaya He!";

    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            const new_span = document.createElement("span");
            new_span.textContent = text[i];
            new_span.classList.add("letter");
            textPara.appendChild(new_span);
            setTimeout(() => textPara.removeChild(new_span), 10000);
        }, i * 170);
    }
    setTimeout(() => {
        textPara.innerHTML = text;
        textPara.classList.remove("text-[50px]");
        textPara.classList.add("text-[35px]");
    }, text.length * 170 + 10000);
});
