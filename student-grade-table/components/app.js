class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
    this.handleGetGradesError = this.handleGetGradesError.bind(this)
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this)
    this.createGrade = this.createGrade.bind(this)
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this)
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this)
    this.deleteGrade = this.deleteGrade.bind(this);
    this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this)
    this.handleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this)
  }
  deleteGrade(id){
    console.log(this.deleteGrade)
    $.ajax({
      headers: {
        "X-Access-Token": "m9u5inMp"
      },
      type: 'DELETE',
      url: `https://sgt.lfzprototypes.com/api/grades/${id}`,
      success: this.handleCreateGradeSuccess,
      error: this.handleCreateGradeError
    })
  }


  handleDeleteGradeError(error){
    console.error(error)
  }
  handleDeleteGradeSuccess(){
    this.getGrades()
  }

  createGrade(userName, course, grade){
    console.log(userName, course, grade)
      $.ajax({
        data: {
          "name": userName,
          "course": course,
          "grade": grade
        },
        headers: {
          "X-Access-Token": "m9u5inMp"
        },
        type: 'POST',
        url: 'https://sgt.lfzprototypes.com/api/grades',
        success: this.handleCreateGradeSuccess,
        error: this.handleCreateGradeError
      })
    }

  handleCreateGradeError(error){
    console.error(error)
  }

  handleGetGradesError(error){
    console.error(error)
  }

  handleCreateGradeSuccess(){
    this.getGrades()
  }

  handleGetGradesSuccess(grades){
    console.log(grades)
    this.gradeTable.updateGrades(grades)
    var total = 0;
    for(var i = 0; i < grades.length; i++){
      total += grades[i].grade
    }
    var average = total/grades.length;
    this.pageHeader.updateAverage(average)
    console.log(average)
    // this.getGrades(); why did you write this here dumbass
  }

  getGrades(){
    $.ajax({
      headers: {
        "X-Access-Token": "m9u5inMp"
      },
      type: 'GET',
      url: 'https://sgt.lfzprototypes.com/api/grades',
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError
    })
  }

  start(){
    // this.createGrade = this.gradeForm.onSubmit();
    this.gradeTable.onDeleteClick(this.deleteGrade)
    this.gradeForm.onSubmit(this.createGrade)
    this.getGrades();//NEED TO CALL THIS FUNCTION

  }



}
