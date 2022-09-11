function getFortune() {
    var fortunes = ["It is certain!", "It is decidedly so!", "Without a doubt!", "You may rely on it!", "Most likely!", "Outlook good!", "Yes!", "Signs point to yes!", "No doubt!", "Reply hazy, try later.", "Ask again later.", "Better not say now.", "Cannot predict now.", "Ask again.", "Don't count on it.", "My reply is no.", "Sources say no.", "Outlook not so good.", "Very doubtful."]
    var random = Math.floor(Math.random() * fortunes.length);
               document.getElementById("message").textContent = fortunes[random];
              }