interface User {
    name: string;
    surname: string;
    age: number;
}
  interface Weather {
    light: string;
    sky: string;
    cold: boolean;
    temperature: number;
}
  interface City {
    name: string;
    country: string;
    population: number;
    europe: boolean;
}

export type { User, Weather, City };