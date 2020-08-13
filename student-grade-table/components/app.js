class App {
  constructor(gradeTable, pageHeader) {
    this.pageHeader = pageHeader;
    this.gradeTable = gradeTable;
    this.handleGetGradesError = this.handleGetGradesError.bind(this)
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this)
  }
  handleGetGradesError(error){
    console.error(error)
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
    this.getGrades();//NEED TO CALL THIS FUNCTION
  }

}
