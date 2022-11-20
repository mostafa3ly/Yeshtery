export interface Product {
    id: string;
    name: string;
    price: number;
    salePrice: number;
    hasSalePrice: boolean;
    discount: number;
    from: string;
    to: string;
    in: number;
    isPickup: boolean;
    image: string;
}