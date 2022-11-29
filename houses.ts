import HousesReports  from "./stategy_pattern"

export class House implements HousesReports{
    check(): string {
        return `checked`
    }
}