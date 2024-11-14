export interface Service {
    id: string;
    name: string;
    description: string;
    price: number;
    category: 'cleaning' | 'cooking' | 'gardening';
}

export interface Booking {
    id: string;
    serviceId: string;
    date: Date;
    status: 'scheduled' | 'completed' | 'cancelled';
}