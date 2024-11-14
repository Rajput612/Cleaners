import { Link } from 'react-router-dom';
import { services } from '../data/services';
import { StarIcon } from '@heroicons/react/20/solid';
import { ClockIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

export default function Services() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Professional Home Services
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          Choose from our selection of premium home services
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl"
          >
            <div className="flex-shrink-0">
              <img
                className="h-48 w-full object-cover"
                src={service.image}
                alt={service.name}
              />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white p-6">
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-indigo-600">
                    {service.category.charAt(0).toUpperCase() + service.category.slice(1)}
                  </p>
                  <div className="flex items-center">
                    <StarIcon className="h-5 w-5 text-yellow-400" />
                    <span className="ml-1 text-sm text-gray-600">
                      {service.rating} ({service.reviews})
                    </span>
                  </div>
                </div>
                <div className="mt-2">
                  <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{service.description}</p>
                </div>
                <div className="mt-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <ClockIcon className="h-5 w-5 mr-1" />
                      {service.duration}h
                    </div>
                    <div className="flex items-center">
                      <CurrencyDollarIcon className="h-5 w-5 mr-1" />
                      {service.price}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  to={`/book/${service.id}`}
                  className="flex w-full items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}