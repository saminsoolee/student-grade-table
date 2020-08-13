class GradeForm{
  constructor (formElement){
    this.formElement = formElement;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formElement.addEventListener('submit', this.handleSubmit)
    //add a gradeform component, ALWAYS ATTACH A CALLBACK AFTER THE STRING
    //ANY EVENT LISTENER WILL HAVE A CALLBACK FUNCTION!!
  }
  onSubmit(createGrade){
    this.createGrade = createGrade;
  }
  handleSubmit(event){
    event.preventDefault()
    new FormData(event.target)
    FormData.get(name, course, grade)
    this.createGrade(name, course, grade)
    event.target.reset()
    console.log('hello noob');
  }
}
