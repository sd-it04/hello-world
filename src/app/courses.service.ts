
export class CoursesService {
    getCourses() {
        return [
            { name: "course 1", price: "473.60", releaseDate: new Date(2023, 9, 23) },
            { name: "course 2", price: "190.84", releaseDate: new Date(2023, 8, 23) },
            { name: "course 3", price: "245.44", releaseDate: new Date(2023, 7, 22) },
            { name: "course 4", price: "1789.33", releaseDate: new Date(2023, 10, 21) }
        ];
    }
}