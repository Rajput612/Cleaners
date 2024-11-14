import { Observable } from '@nativescript/core';
import { BookingService } from '../../services/booking-service';
import { Service } from '../../models/service';

export class ServicesViewModel extends Observable {
    private bookingService: BookingService;
    private _services: Service[];

    constructor() {
        super();
        this.bookingService = new BookingService();
        this._services = this.bookingService.getServices();
    }

    get services(): Service[] {
        return this._services;
    }

    onServiceTap(args: any) {
        const service = this._services[args.index];
        // Navigate to booking page with service details
    }
}