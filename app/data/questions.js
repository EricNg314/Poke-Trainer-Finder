
$(document).ready(function () {
    let questions = [
        "You are aiming to be the pokemon master?",
        "Do you believe SLOWPOKEs are intelligent?",
        "Do you often feel like a DITTO?",
        "Are you scared of a CHARIZARD?",
        "Would you buy MAGIKARP for $500?",
        "Have you ever checked the inside of a VICTREEBEL?",
        "Do you feel an ELECTRODE would make a good house pokemon?",
        "Do you prefer a TOGEPI more than ENTEI?",
        "Will you learn to read all 28 UNOWN shapes?",
        "Would you enter MEW in a pokemon contest?"
    ];

    let answers = [
        "1 (Strongly Disagree)",
        "2",
        "3",
        "4",
        "5 (Strongly Agree)"
    ]

    for (let i = 0; i < questions.length; i++) {
        let questionDiv = $("<div>");
        let label = $("<p>");
        let select = $("<select>");

        questionDiv.addClass("form-group");
        label.addClass("my-0");
        label.text(questions[i]);
        select.attr("id", "question-" + i);
        select.addClass("custom-select questions")

        for (let j = 0; j < answers.length; j++) {
            let option = $("<option>");
            option.text(answers[j]);
            select.append(option);
        }

        questionDiv.append(label);
        questionDiv.append(select);
        $("#questionsList").append(questionDiv);
    };
});
