import HousesReports  from "./stategy_pattern";

export default class Door implements HousesReports{

    constructor(private houseReport: HousesReports){
        
    }
      check() {
        
          return this.houseReport.check() 
      }
  }  