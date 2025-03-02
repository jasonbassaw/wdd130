const aCourse = {
    code: "CSE121b",
    name: "JavaScript Language",
    sections: [
      {
        sectionNum: 1,
        roomNum: "STC 353",
        enrolled: 26,
        days: "TTh",
        instructor: "Bro T",
      },
      {
        sectionNum: 2,
        roomNum: "STC 347",
        enrolled: 25,
        days: "TTh",
        instructor: "Sis A",
      },
    ],
  
    /**
     * Initializes the course by displaying its details and sections.
     */
    init: function () {
      this.setCourseInfo();
      this.renderSections();
    },
  
    /**
     * Displays the course name and code.
     */
    setCourseInfo: function () {
      document.querySelector("#courseName").textContent = this.name;
      document.querySelector("#courseCode").textContent = this.code;
    },
  
    /**
     * Renders all sections inside the table.
     */
    renderSections: function () {
      const html = this.sections.map(
        (section) => `<tr>
          <td>${section.sectionNum}</td>
          <td>${section.roomNum}</td>
          <td>${section.enrolled}</td>
          <td>${section.days}</td>
          <td>${section.instructor}</td>
        </tr>`
      ).join("");
  
      document.querySelector("#sections").innerHTML = html;
    },
  
    /**
     * Modifies enrollment based on section number.
     * @param {number} sectionNum - The section number
     * @param {boolean} add - If true, enroll a student; if false, drop a student
     */
    changeEnrollment: function (sectionNum, add = true) {
      const sectionIndex = this.sections.findIndex(
        (section) => section.sectionNum == sectionNum
      );
      if (sectionIndex >= 0) {
        if (add) {
          this.sections[sectionIndex].enrolled++;
        } else if (this.sections[sectionIndex].enrolled > 0) {
          this.sections[sectionIndex].enrolled--;
        }
        this.renderSections();
      }
    },
  };
  
  // Export the module
  export default aCourse;
  