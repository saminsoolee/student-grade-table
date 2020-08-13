class PageHeader{
  constructor(headerElement){
    this.headerElement = headerElement;
  }
  updateAverage(newAverage){
    // console.log(newAverage)
    var averageContainer = this.headerElement.querySelector("span")
    averageContainer.textContent = newAverage
  }
}
