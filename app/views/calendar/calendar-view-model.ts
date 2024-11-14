import { Observable } from '@nativescript/core';
import { BookingService } from '../../services/booking-service';
import { Booking } from '../../models/service';

export class CalendarViewModel extends Observable {
    private bookingService: BookingService;
    private _selectedDate: Date;
    private _selectedDateBookings: Booking[];

    constructor() {
        super();
        this.bookingService = new BookingService();
        this._selectedDate = new Date();
        this.updateSelectedDateBookings();
    }

    get selectedDate(): Date {
        return this._selectedDate;
    }

    get selectedDateBookings(): Booking[] {
        return this._selectedDateBookings;
    }

    onDateSelected(args: any) {
        this._selectedDate = args.date;
        this.updateSelectedDateBookings();
    }

    private updateSelectedDateBookings() {
        this._selectedDateBookings = this.bookingService.getBookings().filter(booking => 
            booking.date.toDateString() === this._selectedDate.toDateString()
        );
        this.notifyPropertyChange('selectedDateBookings', this._selectedDateBookings);
    }
}