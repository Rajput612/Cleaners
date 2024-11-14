import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { services } from '../data/services';
import { StarIcon } from '@heroicons/react/20/solid';
import { ClockIcon, CurrencyDollarIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

export default function BookingForm() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = services.find(s => s.id === serviceId);
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    address: '',
    notes: '',
  });

  if (!service) {
    return <div>Service not found</div>;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submission
    navigate('/calendar');
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-2">
          {/* Service Details */}
          <div className="px-4 py-6 sm:p-8">
            <div>
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-64 object-cover rounded-lg"
              />
              <h2 className="mt-6 text-2xl font-bold text-gray-900">{service.name}</h2>
              <div className="mt-2 flex items-center">
                <StarIcon className="h-5 w-5 text-yellow-400" />
                <span className="ml-1 text-sm text-gray-600">
                  {service.rating} ({service.reviews} reviews)
                </span>
              </div>
              <p className="mt-4 text-gray-500">{service.description}</p>
              
              <div className="mt-6">
                <h3 className="text-lg font-semibold">Service Includes:</h3>
                <ul className="mt-4 space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex items-center space-x-6">
                <div className="flex items-center">
                  <ClockIcon className="h-6 w-6 text-gray-400 mr-2" />
                  <span>{service.duration} hours</span>
                </div>
                <div className="flex items-center">
                  <CurrencyDollarIcon className="h-6 w-6 text-gray-400 mr-2" />
                  <span>${service.price}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="px-4 py-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                  Time
                </label>
                <select
                  id="time"
                  name="time"
                  required
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  <option value="">Select a time</option>
                  <option value="09:00">9:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="13:00">1:00 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                </select>
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Service Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  rows={3}
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
                  Special Instructions
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Any special requirements or instructions..."
                />
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold">Price Summary</h4>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between">
                    <span>Service Price</span>
                    <span>${service.price}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Duration</span>
                    <span>{service.duration} hours</span>
                  </div>
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>${service.price}</span>
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}