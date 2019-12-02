$(document).ready(function() {

  $(".shake").click(function() {
    shakeAndBake();
  })

  function shakeAndBake() {
    shakingAlert();
    $(".answer").empty();
    $(".shake").hide();
    $(".start-image").fadeOut("slow", function() {
      $(".shake-image").fadeIn(function() {
        var time = 3;
        var timer = setInterval(function() {
          time--;
          if (time == 0) {
            clearInterval(timer);
            $("#shaking-image").remove();
            $(".shake-image").fadeOut("slow", function() {
              $(".end-image").fadeIn(function() {
                $(".answer-splat").show();
                $(".answer").text(answer());
                $(".end-image").delay(1200).fadeOut(function() {
                  $(".start-image").fadeIn("slow");
                  $(".answer-splat").fadeOut("slow");
                  $(".shake").show().focus();
                  $(".shaking-alert").remove();
                })
              });
            })
          }
        }, 1000);
      });
    });
  }

  function answer() {
    var answer = [
      "I'm sorry Dave, I can't answer that.",
      "What you should really ask is- what would Yoda do.",
      "You wish!",
      "Why are you asking me? I'm just a computer.",
      "Ask K2 if he'd add it to HUB.",
      "Better not ask me. I thought Hilary would win.",
      "Meh.",
      "Of course! Why not?",
      "Being positive and reinforcing is boring, so... No.",
      "I'm feeling lucky... and so should you!",
      "If Harry Potter can do it, so can you!",
      "Probably?",
      "Just this once, sure.",
      "My prediction: hedgehogs.",
      "Why don't you answer MY questions once!",
      "Are you friggin' kidding me, NO!",
      "Why don't you ask SIRI? I'm sure she'd be better at this.",
      "Haven't you tried 'googling' for an answer yet?",
      "Trust me, you don't want to know.",
      "I'm too busy thinking of the next way to mock you right now to answer.",
      "You'd get a better response if you first ask me if I cared.",
      "Maybe?",
      "Sure, why not.",
      "Please shake again. I didn't understand the question.",
      "Try again later",
      "Yes",
      "No.",
      "LEEROY JENKINS!",
      "The cake is a lie.",
      "How am I to judge, sure.",
      "Gone fishing",
      "Shhh... don't ask that in public, someone might overhear!",
      "Why don't you have someone shake YOU over and over again and see how YOU feel about answering that question!",
      "I'm sorry, but this service is temporarily on hold while the answer provider is booking their vacation.",
      "No please, go back to shaking me a little more. I kinda liked that.",
      "Concentrate a little harder and try again.",
      "The answer you seek should only be delivered to people wearing tin-foil hats.",
      "You can count on it!",
      "Definitely... probably. Err, maybe?",
      "My dog ate your answer.",
      "Very doubtful",
      "Focus on the past. Your future ain't looking so good.",
      "Have you tried asking your psychiatrist that first?",
      "No doubt.",
      "Absolutely not!",
      "42."
    ];
    var randomNum = Math.floor(Math.random()*(answer.length));
    return answer[randomNum];
  }

  function shakingAlert() {
    $("body").prepend($('<div class="' + 'shaking-alert ' + 'sr-only' + '"></div>"'));
    $(".shaking-alert")
      .attr({ "tabindex": "-1"})
      .append("<p>Shaking the ball!</p>");
    $(".shaking-alert").focus();
  }

});
