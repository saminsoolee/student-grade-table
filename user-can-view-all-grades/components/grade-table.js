class GradeTable {
  constructor(tableElement, grades){
    this.tableElement = tableElement;
  }
  updateGrades(grades){
    console.log(grades)

    // var tbody = document.querySelector(this.tableElement)
    // tbody.textContent = '';
    //   for(var i = 0; i < grades.length; i++){
    //     var newTableRow = document.createElement('tr');
    //     var newTableData = document.createElement('td');
    //     newTableData = grades[i];

    //   }
    var tbody = this.tableElement.querySelector('tbody');
    tbody.textContent = '';
      for(var i = 0; i < grades.length; i++){
        var newTableRow = document.createElement('tr');
        var newName = document.createElement('td');
        var newCourse = document.createElement('td');
        var newGrade = document.createElement('td');

        newName.textContent = grades[i].name;
        newCourse.textContent = grades[i].course;
        newGrade.textContent = grades[i].grade;

        newTableRow.append(newName, newCourse, newGrade)
        tbody.append(newTableRow)
      }
    }
  }
