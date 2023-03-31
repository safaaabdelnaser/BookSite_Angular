export interface UserData {
    id:number;
    Username:string;
    Email:string;
    Password:string;
    RePassword:string;
    Phones:string[];
    address: {
      city: string,
      street: string
      };

}
