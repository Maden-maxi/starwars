export interface Planet {
  id: number;
  name: string;
  terrain: string;
  population: string; //(formatted as 10k, 2m etc)
  residents: string[];
  films: string[];
}
