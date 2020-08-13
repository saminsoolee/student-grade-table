class PageHeader{
  constructor(headerElement){
    this.headerElement = headerElement;
  }
  updateAverage(newAverage){
    // console.log(newAverage)
    this.headerElement = this.headerElement.querySelector("span")
    this.headerElement.textContent = newAverage
  }
}
