// ==========================================
// GRADE 4 WORKSHEETS WEBSITE
// ==========================================


// ==========================================
// SUBJECT INFORMATION
// ==========================================

const subjects = [

    {
        name: "Math",
        folder: "math",
        icon: "📐",
        description:
            "Numbers, calculations and problem solving"
    },

    {
        name: "English",
        folder: "english",
        icon: "📖",
        description:
            "Reading, writing, grammar and comprehension"
    },

    {
        name: "Afrikaans",
        folder: "afrikaans",
        icon: "🇿🇦",
        description:
            "Afrikaanse lees, taal en skryfwerk"
    },

    {
        name: "Social Studies",
        folder: "ss",
        icon: "🌍",
        description:
            "Social Studies worksheets and activities"
    },

    {
        name: "NST",
        folder: "nst",
        icon: "🔬",
        description:
            "Natural Science and Technology"
    },

    {
        name: "isiZulu",
        folder: "isizulu",
        icon: "🗣️",
        description:
            "IsiZulu worksheets and activities"
    },

    {
        name: "Life Skills",
        folder: "life-skills",
        icon: "❤️",
        description:
            "Life Skills activities"
    },

    {
        name: "Robotics",
        folder: "robotics",
        icon: "🤖",
        description:
            "Robotics and coding activities"
    }

];


// ==========================================
// WORKSHEET INFORMATION
// ==========================================

const worksheets = {


    // =========================
    // MATH
    // =========================

    math: [
    
        {
        title: "Math worksheets ",
        description: "Worksheets",
        file: "worksheets/Math/Grade-4-Fractions.pdf"
    },

      {
        title: "Math worksheets ",
        description: "Worksheets",
        file: "worksheets/Math/Grade-4-Fractions-1.pdf"
    },

          {
        title: "Math worksheets ",
        description: "Worksheets",
        file: "worksheets/Math/Grade-4-Fractions-2.pdf"
    },

          {
        title: "Math worksheets ",
        description: "Worksheets",
        file: "worksheets/Math/Grade-4-Fractions-3.pdf"
    },

          {
        title: "Math worksheets ",
        description: "Worksheets",
        file: "worksheets/Math/Grade-4-Fractions-4.pdf"
    },

          {
        title: "Math worksheets ",
        description: "Worksheets",
        file: "worksheets/Math/Grade-4-Fractions-5.pdf"
    },

         {
        title: "Royal schools past papers",
        description: "Past papers",
        file: "worksheets/Math/Assignment-Revision-1.pdf"
      
    },

        {
            title: "Royal schools past papers",
            description: "Past papers",
            file: "worksheets/Math/Grade-4-Mathematics-Paper-1-QP-2024"
        },

        {
            title: "Royal schools past paers",
            description: "Past papers",
            file: "worksheets/Math/Grade-4-Mathematics-Paper-2-QP-2024"
        },

          {
        title: "Math worksheets ",
        description: "Worksheets",
        file: "worksheets/Math/Grade-4-Graph-worksheet-1.pdf"
    },

        {
        title: "Math worksheets ",
        description: "Worksheets",
        file: "worksheets/Math/Grade-4-Graph-worksheet-2.pdf"
    },

    {
        title: "Math worksheets ",
        description: "Worksheets",
        file: "worksheets/Math/Grade-4-Graph-worksheet-3.pdf"
    },

        {
        title: "Math worksheets ",
        description: "Worksheets",
        file: "worksheets/Math/Grade-4-Graph-worksheet-4.pdf"
    },

{
        title: "Math worksheets ",
        description: "Worksheets",
        file: "worksheets/Math/Grade-4-Mathematics-Paper-2-QP-2024.pdf"
    },

    ],


    // =========================
    // ENGLISH
    // =========================

    english: [

        // worksheets english 
     {
        title: "English past papers",
        description: "June/Nov past paper",
        file: "worksheets/English/Grade-4-English-Exam-June-2022.pdf"
    },

  {
        title: "English past papers",
        description: "June/Nov past paper",
        file: "worksheets/English/Paper-2-Revision.pdf"
    },

    ],


    // =========================
    // AFRIKAANS
    // =========================

    afrikaans: [

        // Add Afrikaans PDFs here
           {
        title: "Afrikaans past papers",
        description: "June/Nov past paper",
        file: "worksheets/Afrikaans/Grade-4-Afrikaans-Exam-June-2022.pdf"
    },


               {
        title: "Afrikaans past papers",
        description: "June/Nov past paper",
        file: "worksheets/Afrikaans/Grade-4-Afrikaans-Memo-June-2022.pdf"
    },

               {
        title: "Afrikaans past papers",
        description: "June/Nov past paper",
        file: "worksheets/Afrikaans/Grade-4-Afrikaans-Script-November-2022.pdf"
    },

               {
        title: "Afrikaans past papers",
        description: "June/Nov past paper",
        file: "worksheets/Afrikaans/Grade-4-Afrikaans-Memo-November-2022.pdf"
    
    },

         {
        title: "Afrikaans past papers",
        description: "June/Nov past paper",
        file: "worksheets/Afrikaans/Novelle-Graad4.pdf"
    },

    ],


    // =========================
    // SOCIAL STUDIES
    // =========================

    ss: [

        // Add SS PDFs here

    ],


    // =========================
    // NST
    // =========================

    nst: [

        // Add NST PDFs here
          {
        title: "Natural science study Material ",
        description: "Natural Science and Technology",
        file: "worksheets/NST/Study-Material-NST.pdf"
    },

    ],


    // =========================
    // ISIZULU
    // =========================

    isizulu: [

        // Add isiZulu PDFs here

    ],


    // =========================
    // LIFE SKILLS
    // =========================

    "life-skills": [

        // Add Life Skills PDFs here

    ],


    // =========================
    // ROBOTICS
    // =========================

    robotics: [

        // Add Robotics PDFs here
                 {
        title: "Robotics Study Material ",
        description: "Study Material",
        file: "worksheets/Robotics/Study-notes-term2.pdf"
    },

         {
        title: "Robotics Study Material ",
        description: "Study Material",
        file: "worksheets/Robotics/Test1Grade4-Memo.pdf"
    },
    ]

};


// ==========================================
// FIND HTML ELEMENTS
// ==========================================

const subjectContainer =
    document.getElementById(
        "subjectContainer"
    );


const worksheetContainer =
    document.getElementById(
        "worksheetContainer"
    );


// ==========================================
// DISPLAY SUBJECTS
// ==========================================

function displaySubjects() {

    subjectContainer.innerHTML = "";


    subjects.forEach(function(subject) {

        const card =
            document.createElement("div");


        card.className =
            "subject-card";


        card.innerHTML = `

            <div class="subject-icon">
                ${subject.icon}
            </div>

            <h3>
                ${subject.name}
            </h3>

            <p>
                ${subject.description}
            </p>

        `;


        card.addEventListener(
            "click",
            function() {

                displayWorksheets(subject);

            }
        );


        subjectContainer.appendChild(card);

    });

}


// ==========================================
// DISPLAY WORKSHEETS
// ==========================================

function displayWorksheets(subject) {

    worksheetContainer.innerHTML = "";


    const heading =
        document.createElement("h2");


    heading.innerHTML =
        `${subject.icon} ${subject.name} Worksheets`;


    worksheetContainer.appendChild(
        heading
    );


    // ======================================
    // BACK BUTTON
    // ======================================

    const backButton =
        document.createElement("button");


    backButton.className =
        "back-button";


    backButton.textContent =
        "← Back to Subjects";


    backButton.addEventListener(
        "click",
        function() {

            worksheetContainer.innerHTML = "";

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );


    worksheetContainer.appendChild(
        backButton
    );


    // ======================================
    // WORKSHEET LIST
    // ======================================

    const list =
        document.createElement("div");


    list.className =
        "worksheet-list";


    const subjectWorksheets =
        worksheets[subject.folder];


    // ======================================
    // NO WORKSHEETS
    // ======================================

    if (
        !subjectWorksheets ||
        subjectWorksheets.length === 0
    ) {

        const message =
            document.createElement("div");


        message.className =
            "worksheet-card";


        message.innerHTML = `

            <div class="pdf-icon">
                📚
            </div>

            <div class="worksheet-info">

                <h3>
                    No worksheets available yet
                </h3>

                <p>
                    Your teacher will add worksheets
                    for ${subject.name}.
                </p>

            </div>

        `;


        list.appendChild(message);

    }


    // ======================================
    // DISPLAY WORKSHEETS
    // ======================================

    else {

        subjectWorksheets.forEach(
            function(worksheet) {


                const card =
                    document.createElement("div");


                card.className =
                    "worksheet-card";


                card.innerHTML = `

                    <div class="pdf-icon">
                        📄
                    </div>


                    <div class="worksheet-info">

                        <h3>
                            ${worksheet.title}
                        </h3>

                        <p>
                            ${worksheet.description}
                        </p>

                    </div>


                    <div class="buttons">


                        <a
                            href="${worksheet.file}"
                            target="_blank"
                            class="view-button"
                        >
                            👁 View PDF
                        </a>


                        <a
                            href="${worksheet.file}"
                            download
                            class="download-button"
                        >
                            ⬇ Download
                        </a>


                    </div>

                `;


                list.appendChild(card);

            }
        );

    }


    worksheetContainer.appendChild(
        list
    );


    worksheetContainer.scrollIntoView({
        behavior: "smooth"
    });

}


// ==========================================
// START WEBSITE
// ==========================================

displaySubjects();

