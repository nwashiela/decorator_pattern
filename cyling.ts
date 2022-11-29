import HousesReports  from "./stategy_pattern";

export default class Cyling implements HousesReports{

    constructor(private houseReport: HousesReports){
        
    }
      check(): string {
        
          return this.houseReport.check() 
      }

  }     