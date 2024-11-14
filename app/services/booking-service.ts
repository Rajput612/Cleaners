import { Observable } from '@nativescript/core';
import { Booking, Service } from '../models/service';

export class BookingService extends Observable {
    private bookings: Booking[] = [];
    private services: Service[] = [
        { id: '1', name: 'House Cleaning', description: 'Complete house cleaning service', price: 100, category: 'cleaning' },
        { id: '2', name: 'Personal Chef', description: 'Personal cooking service', price: 150, category: 'cooking' },
        { id: '3', name: 'Lawn Maintenance', description: 'Complete garden maintenance', price: 80, category: 'gardening' }
    ];

    getServices(): Service[] {
        return this.services;
    }

    getBookings(): Booking[] {
        return this.bookings;
    }

    addBooking(booking: Booking): void {
        this.bookings.push(booking);
        this.notifyPropertyChange('bookings', this.bookings);
    }
}