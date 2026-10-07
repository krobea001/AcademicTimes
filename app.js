/* ==========================================
   COLLEGEPAST COURSE DATA
========================================== */

const collegePastData = {

    "100": {

        "general": {

            "first": [

                "Foundations of Education",
                "Communication Skills I",
                "Introduction to ICT",
                "Educational Psychology I",
                "Ghanaian Society and Culture",
                "Study Skills",
                "Introduction to Teaching",
                "General Mathematics I"

            ],

            "second": [

                "Communication Skills II",
                "Educational Psychology II",
                "Basic Computing",
                "Introduction to Curriculum",
                "Environmental Studies",
                "Teaching and Learning",
                "General Mathematics II",
                "School and Community"

            ]

        }

    },


    "200": {

        "upper-primary": {

            "first": [

                "Primary Education Methods I",
                "Literacy Development I",
                "Numeracy Education I",
                "Creative Arts Education I",
                "Environmental Science I",
                "Social Studies Education I",
                "Assessment in Primary Education I",
                "Educational Technology I",
                "Classroom Management I",
                "Inclusive Education I"

            ],

            "second": [

                "Primary Education Methods II",
                "Literacy Development II",
                "Numeracy Education II",
                "Creative Arts Education II",
                "Environmental Science II",
                "Social Studies Education II",
                "Assessment in Primary Education II",
                "Educational Technology II",
                "Classroom Management II",
                "Inclusive Education II"

            ]

        },


        "jhs": {

            "mathematics": {

                "first": [
                    "Advanced Number Concepts",
                    "Algebraic Reasoning",
                    "Geometry and Measurement",
                    "Mathematics Teaching Methods I",
                    "Statistics for Teachers I",
                    "Problem Solving in Mathematics I",
                    "Mathematics Curriculum Studies I",
                    "Assessment in Mathematics I"
                ],

                "second": [
                    "Functions and Relations",
                    "Trigonometry Basics",
                    "Probability Concepts",
                    "Mathematics Teaching Methods II",
                    "Statistics for Teachers II",
                    "Problem Solving in Mathematics II",
                    "Mathematics Curriculum Studies II",
                    "Assessment in Mathematics II"
                ]

            },


            "ict": {

                "first": [
                    "Computer Systems",
                    "Programming Fundamentals I",
                    "Database Concepts I",
                    "Networking Fundamentals I",
                    "ICT Teaching Methods I",
                    "Digital Literacy",
                    "Web Development I",
                    "ICT Curriculum Studies I"
                ],

                "second": [
                    "Operating Systems",
                    "Programming Fundamentals II",
                    "Database Concepts II",
                    "Networking Fundamentals II",
                    "ICT Teaching Methods II",
                    "Educational Technology",
                    "Web Development II",
                    "ICT Curriculum Studies II"
                ]

            },


            "social-studies": {

                "first": [
                    "Introduction to Social Studies",
                    "Ghanaian Governance",
                    "Human Geography",
                    "Social Studies Methods I",
                    "Citizenship Education",
                    "Economic Activities",
                    "Society and Development",
                    "Social Studies Assessment I"
                ],

                "second": [
                    "Contemporary Social Issues",
                    "African Governance",
                    "Physical Geography",
                    "Social Studies Methods II",
                    "Democracy and Citizenship",
                    "Economic Development",
                    "Society and Culture",
                    "Social Studies Assessment II"
                ]

            },


            "history": {

                "first": [
                    "Introduction to African History",
                    "Ancient Civilizations",
                    "Ghana Before Independence",
                    "History Teaching Methods I",
                    "African Political Systems",
                    "Colonial History",
                    "Historical Research I",
                    "History Curriculum Studies I"
                ],

                "second": [
                    "Modern African History",
                    "World Civilizations",
                    "Ghana After Independence",
                    "History Teaching Methods II",
                    "African Leadership",
                    "Nationalism and Independence",
                    "Historical Research II",
                    "History Curriculum Studies II"
                ]

            },


            "rme": {

                "first": [
                    "Introduction to Religious Studies",
                    "African Traditional Religion",
                    "Christianity and Society",
                    "Islamic Studies",
                    "RME Teaching Methods I",
                    "Religious Values and Ethics",
                    "Religion and Culture",
                    "RME Curriculum Studies I"
                ],

                "second": [
                    "Comparative Religion",
                    "Religion and Modern Society",
                    "Christian Ethics",
                    "Islamic Ethics",
                    "RME Teaching Methods II",
                    "Moral Development",
                    "Religion and Peace",
                    "RME Curriculum Studies II"
                ]

            },


            "science": {

                "first": [
                    "General Biology",
                    "Basic Chemistry",
                    "Introductory Physics",
                    "Science Teaching Methods I",
                    "Environmental Science",
                    "Human Biology",
                    "Practical Science I",
                    "Science Curriculum Studies I"
                ],

                "second": [
                    "Applied Biology",
                    "Organic Chemistry Basics",
                    "Electricity and Magnetism",
                    "Science Teaching Methods II",
                    "Environmental Conservation",
                    "Health Science",
                    "Practical Science II",
                    "Science Curriculum Studies II"
                ]

            },


            "technical": {

                "first": [
                    "Technical Drawing",
                    "Workshop Practice I",
                    "Basic Mechanics",
                    "Electrical Technology I",
                    "Technical Teaching Methods I",
                    "Materials Technology",
                    "Engineering Science I",
                    "Technical Curriculum Studies I"
                ],

                "second": [
                    "Advanced Technical Drawing",
                    "Workshop Practice II",
                    "Applied Mechanics",
                    "Electrical Technology II",
                    "Technical Teaching Methods II",
                    "Production Technology",
                    "Engineering Science II",
                    "Technical Curriculum Studies II"
                ]

            }

        }

    }

};


/* ==========================================
   COPY LEVEL 200 STRUCTURE TO LEVEL 300 & 400
========================================== */

collegePastData["300"] = JSON.parse(
    JSON.stringify(collegePastData["200"])
);

collegePastData["400"] = JSON.parse(
    JSON.stringify(collegePastData["200"])
);


/* ==========================================
   DOM ELEMENTS
========================================== */

const level = document.getElementById("level");
const programme = document.getElementById("programme");
const specialism = document.getElementById("specialism");
const semester = document.getElementById("semester");
const course = document.getElementById("course");

const programmeGroup =
    document.getElementById("programmeGroup");

const specialismGroup =
    document.getElementById("specialismGroup");

const semesterGroup =
    document.getElementById("semesterGroup");

const courseGroup =
    document.getElementById("courseGroup");

const findQuestions =
    document.getElementById("findQuestions");


/* ==========================================
   HELPER FUNCTION
========================================== */

function show(element) {

    if (element) {
        element.classList.remove("hidden");
    }

}


function hide(element) {

    if (element) {
        element.classList.add("hidden");
    }

}


function resetSelect(selectElement, text) {

    if (!selectElement) return;

    selectElement.innerHTML =
        `<option value="">${text}</option>`;

}


/* ==========================================
   LEVEL CHANGE
========================================== */

if (level) {

    level.addEventListener("change", function () {

        const selectedLevel = this.value;

        resetSelect(course, "Select Course");

        hide(courseGroup);

        if (!selectedLevel) {

            hide(programmeGroup);
            hide(specialismGroup);
            hide(semesterGroup);

            return;

        }


        show(semesterGroup);


        /*
           Level 100 has general courses.
           Level 200–400 have Upper Primary/JHS.
        */

        if (selectedLevel === "100") {

            hide(programmeGroup);
            hide(specialismGroup);

        } else {

            show(programmeGroup);
            hide(specialismGroup);

        }


        updateFindButton();

    });

}


/* ==========================================
   PROGRAMME CHANGE
========================================== */

if (programme) {

    programme.addEventListener("change", function () {

        const selectedProgramme = this.value;


        hide(courseGroup);


        if (selectedProgramme === "jhs") {

            show(specialismGroup);

        } else {

            hide(specialismGroup);

        }


        resetSelect(course, "Select Course");

        updateFindButton();

    });

}


/* ==========================================
   SPECIALISM CHANGE
========================================== */

if (specialism) {

    specialism.addEventListener("change", function () {

        resetSelect(course, "Select Course");

        updateCourses();

        updateFindButton();

    });

}


/* ==========================================
   SEMESTER CHANGE
========================================== */

if (semester) {

    semester.addEventListener("change", function () {

        resetSelect(course, "Select Course");

        updateCourses();

        updateFindButton();

    });

}

if (course) {

    course.addEventListener("change", function () {

        updateFindButton();

    });

}


/* ==========================================
   UPDATE COURSES
========================================== */

function updateCourses() {

    if (!level || !semester || !course) {
        return;
    }


    const selectedLevel =
        level.value;

    const selectedSemester =
        semester.value;


    if (!selectedLevel || !selectedSemester) {

        hide(courseGroup);

        return;

    }


    let courses = [];


    /*
       LEVEL 100
    */

    if (selectedLevel === "100") {

        courses =
            collegePastData["100"]
            .general[selectedSemester];

    }


    /*
       LEVEL 200–400
    */

    else {

        const selectedProgramme =
            programme.value;


        if (!selectedProgramme) {

            hide(courseGroup);

            return;

        }


        if (selectedProgramme === "upper-primary") {

            courses =
                collegePastData[selectedLevel]
                ["upper-primary"]
                [selectedSemester];

        }


        if (selectedProgramme === "jhs") {

            const selectedSpecialism =
                specialism.value;


            if (!selectedSpecialism) {

                hide(courseGroup);

                return;

            }


            courses =
                collegePastData[selectedLevel]
                .jhs[selectedSpecialism]
                [selectedSemester];

        }

    }


    if (!courses || courses.length === 0) {

        hide(courseGroup);

        return;

    }


    courses.forEach(function (courseName, index) {

        const option =
            document.createElement("option");

        option.value = index;

        option.textContent = courseName;

        course.appendChild(option);

    });


    show(courseGroup);

}


/* ==========================================
   UPDATE FIND BUTTON
========================================== */

function updateFindButton() {
    if (!findQuestions) return;

    let valid = false;

    if (level.value === "100") {
        // Level 100 requires:
        // Level + Semester + Course
        valid =
            level.value !== "" &&
            semester.value !== "" &&
            course.value !== "";
    } else {
        // Levels 200–400 require:
        // Level + Programme + Semester + Course
        valid =
            level.value !== "" &&
            programme.value !== "" &&
            semester.value !== "" &&
            course.value !== "";

        // JHS also requires a Specialism
        if (programme.value === "jhs") {
            valid = valid && specialism.value !== "";
        }
    }

    findQuestions.disabled = !valid;

    // Optional visual feedback
    if (valid) {
        findQuestions.classList.add("active");
    } else {
        findQuestions.classList.remove("active");
    }
}


/* ==========================================
   FIND QUESTIONS
========================================== */

if (findQuestions) {

    findQuestions.addEventListener("click", function () {

        const params =
            new URLSearchParams();


        params.set(
            "level",
            level.value
        );


        params.set(
            "semester",
            semester.value
        );


        params.set(
            "course",
            course.value
        );


        if (programme && programme.value) {

            params.set(
                "programme",
                programme.value
            );

        }


        if (specialism && specialism.value) {

            params.set(
                "specialism",
                specialism.value
            );

        }


        window.location.href =
            "question.html?" +
            params.toString();

    });

}


/* ==========================================
   QUESTION PAGE
========================================== */

const questionTitle =
    document.getElementById("questionTitle");

const questionInfo =
    document.getElementById("questionInfo");

const universityList =
    document.getElementById("universityList");


if (questionTitle && universityList) {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const selectedLevel =
        params.get("level");

    const selectedSemester =
        params.get("semester");

    const selectedCourseIndex =
        params.get("course");


    let courseName =
        "Selected Course";


    if (
        selectedLevel &&
        selectedSemester &&
        selectedCourseIndex !== null
    ) {

        let courses = [];


        if (selectedLevel === "100") {

            courses =
                collegePastData["100"]
                .general[selectedSemester];

        } else {

            const selectedProgramme =
                params.get("programme");


            if (
                selectedProgramme ===
                "upper-primary"
            ) {

                courses =
                    collegePastData[selectedLevel]
                    ["upper-primary"]
                    [selectedSemester];

            }


            if (
                selectedProgramme ===
                "jhs"
            ) {

                const selectedSpecialism =
                    params.get("specialism");


                courses =
                    collegePastData[selectedLevel]
                    .jhs[selectedSpecialism]
                    [selectedSemester];

            }

        }


        if (courses[selectedCourseIndex]) {

            courseName =
                courses[selectedCourseIndex];

        }

    }


    questionTitle.textContent =
        courseName;


    const semesterName =
        selectedSemester === "first"
            ? "First Semester"
            : "Second Semester";


    questionInfo.textContent =
        `Level ${selectedLevel} • ${semesterName}`;


    createUniversities(
        selectedLevel,
        selectedSemester,
        selectedCourseIndex
    );

}


/* ==========================================
   CREATE UNIVERSITY CARDS
========================================== */

function createUniversities(
    selectedLevel,
    selectedSemester,
    selectedCourse
) {

    const universities = [

        "University 1",
        "University 2",
        "University 3",
        "University 4",
        "University 5",
        "University 6"

    ];


    universities.forEach(function (university, index) {

        const card =
            document.createElement("div");

        card.className =
            "university-card";


        card.innerHTML = `

            <div class="university-icon">
                🎓
            </div>

            <div>

                <h3>
                    ${university}
                </h3>

                <p>
                    Past question available
                </p>

            </div>

            <div class="question-actions">

                <a
                    class="btn small primary"
                    href="#"
                    onclick="openPDF(event, '${university}')"
                >
                    View PDF
                </a>

                <a
                    class="btn small secondary"
                    href="#"
                    onclick="downloadPDF(event, '${university}')"
                >
                    Download
                </a>

            </div>

        `;


        universityList.appendChild(card);

    });

}


/* ==========================================
   PDF FUNCTIONS
========================================== */

function getPDFPath(university) {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const level =
        params.get("level");

    const semester =
        params.get("semester");

    const programme =
        params.get("programme");

    const specialism =
        params.get("specialism");

    const courseIndex =
        params.get("course");


    /*
       For now, this generates a sample path.

       Replace course IDs/names later
       when your real PDFs are uploaded.
    */


    let path =
        `questions/level-${level}/`;


    if (level === "100") {

        path +=
            `general/`;

    } else {

        path +=
            `${programme}/`;

        if (programme === "jhs") {

            path +=
                `${specialism}/`;

        }

    }


    path +=
        `${semester}/`;


    path +=
        `university-${university.split(" ")[1]}.pdf`;


    return path;

}


function openPDF(event, university) {

    event.preventDefault();

    const path =
        getPDFPath(university);


    window.open(
        path,
        "_blank"
    );

}


function downloadPDF(event, university) {

    event.preventDefault();

    const path =
        getPDFPath(university);


    const link =
        document.createElement("a");

    link.href = path;

    link.download = "";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

}