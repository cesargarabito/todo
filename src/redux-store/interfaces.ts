interface ColorOption {
    hex: string; 
    id: number;  
  }

 export interface SelectChangeEvent {
    target: {
      value: string; 
    };
  }

  export interface Item {
    id: number;      
    title: string;   
    selectedColor: string;
    completed: boolean; 
  }
  export interface RootState {
    items: Item[];
  }

  export default ColorOption;