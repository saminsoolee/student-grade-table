class GradeTable {
  constructor(tableElement, noGradesElement){
    this.noGradesElement = noGradesElement;
    this.tableElement = tableElement;
  }
  onDeleteClick(deleteGrade){
    this.deleteGrade = deleteGrade;
  }

  renderGradeRow(data, deleteGrade){
    var gradesRow = document.createElement('tr');
    var gradesName = document.createElement('td');
    var gradesCourse = document.createElement('td');
    var gradesGrade = document.createElement('td');
    var gradesButtonContainer = document.createElement('td');
    var gradesButton = document.createElement('button')
    gradesButton.className = "btn btn-secondary";
    gradesButton.addEventListener('click', function(){
      deleteGrade(data.id)
    })

    gradesName.textContent = data.name;
    gradesCourse.textContent = data.course;
    gradesGrade.textContent = data.grade;
    gradesButton.textContent = "DELETE FOO";

    gradesButtonContainer.append(gradesButton);
    gradesRow.append(gradesName, gradesCourse, gradesGrade, gradesButtonContainer)
    return gradesRow;
  }

  updateGrades(grades){
    var tbody = this.tableElement.querySelector('tbody');
    if (grades.length === 0){
      this.noGradesElement.classList.remove('d-none hidden')
    } else {
      this.noGradesElement.className = 'd-none hidden';
    }
    tbody.textContent = '';
      for(var i = 0; i < grades.length; i++){
        var newRow = this.renderGradeRow(grades[i], this.deleteGrade);
        tbody.append(newRow);
      }
    }
  }
