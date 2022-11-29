import HousesReports from "./stategy_pattern";

export default class Paint implements HousesReports{

    constructor(private houseReport: HousesReports){
        
    }
      check() {
        
          return "order white colour" 
      }
 
  }  