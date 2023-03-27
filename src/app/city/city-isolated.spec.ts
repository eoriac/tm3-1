import { CityComponent } from "./city.component";
import { PointsOfInterest } from "./PointOfInterest";

describe(`${CityComponent.name} tests`, () => {
    let cityComponent: CityComponent;

    beforeEach(() => {
        cityComponent = new CityComponent();
    });

    it('should set an instance', () => {
        expect(cityComponent).not.toBeNull();
    });

    it('should be no points of interest', () => {
        expect(cityComponent.pointsOfInterest.length).toBe(0);
    });

    it('should be point of interest if there is data', () => {
        const newPointOfInterest: PointsOfInterest = {
            id: 1,
            name: 'Plaza Mayor',
            description: 'Madrid Plaza Mayor',
        };
        const pointsOfInterestList: Array<PointsOfInterest> = [newPointOfInterest];

        cityComponent.pointsOfInterest = pointsOfInterestList;

        expect(cityComponent.pointsOfInterest.length).toBe(1);
    });
});