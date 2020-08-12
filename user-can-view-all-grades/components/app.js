class App {
  constructor() {
    this.handleGetGradesError = this.handleGetGradesError.bind(this)
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this)
  }
  handleGetGradesError(error){
    console.error(error)
  }
  handleGetGradesSuccess(grades){
    console.log(grades)
  }

  getGrades(){
    $.ajax({
      type: 'GET',
      url: 'https://sgt.lfzprototypes.com',
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError
    })
  }

  start(){
    this.getGrades;
  }
}
