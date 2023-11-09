export class State {
    public name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    // Static method to sort an array of State objects by name
    static sortByName(states: State[]): State[] {
      return states.slice().sort((a, b) => a.name.localeCompare(b.name));
    }
  }
  