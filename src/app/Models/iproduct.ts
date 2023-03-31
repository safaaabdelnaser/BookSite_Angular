export enum  DiscountOffers
{ 
OPTION1="No Discount",
OPTION2="10%",
OPTION3="15%"
};
export interface IProduct {
    id:number;
    PName:string;
    Quantity :number;
    Price:number;
    Img?:string;
    CateogryID?:number;
    Discount?:DiscountOffers;
}

