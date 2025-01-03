import React from 'react';

const GoogleMap = () => {
    // Define data in a single object
    const locationData = {
        iframeSrc: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3469.51307933781!2d72.2373300750439!3d29.588767640017576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDM1JzE5LjYiTiA3MsKwMTQnMjMuNyJF!5e0!3m2!1sen!2s!4v1735365261027!5m2!1sen!2s",
        address: "Hassan Store,Khairpur Tamewali, Bahawalpur,Punjab,Pakistan",
        hours: {
            weekdays: "Saturday - Thursday: 10am - 6pm",
            friday: "Friday: Closed"
        },
        contact: {
            email: "majid.qauiub@gmail.com",
            phone: "+92-309-6867168"
        }
    };

    return (
        <section className="bg-gray-100">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
                <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900">Visit Our Location</h2>
                </div>
                <div className="mt-16 lg:mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="rounded-lg overflow-hidden">
                            <div style={{ border: '1px solid black', width: '100%', height: '450px' }}>
                                <iframe
                                    title="Hassan Store Location"
                                    src={locationData.iframeSrc}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                        <div>
                            <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                                <div className="px-6 py-4">
                                    <h3 className="text-lg font-medium text-gray-900">Our Address</h3>
                                    <p className="mt-1 text-gray-600">{locationData.address}</p>
                                </div>
                                <div className="border-t border-gray-200 px-6 py-4">
                                    <h3 className="text-lg font-medium text-gray-900">Hours</h3>
                                    <p className="mt-1 text-gray-600">{locationData.hours.weekdays}</p>
                                    <p className="mt-1 text-gray-600">{locationData.hours.friday}</p>
                                </div>
                                <div className="border-t border-gray-200 px-6 py-4">
                                    <h3 className="text-lg font-medium text-gray-900">Contact</h3>
                                    <p className="mt-1 text-gray-600">Email: {locationData.contact.email}</p>
                                    <p className="mt-1 text-gray-600">Phone: {locationData.contact.phone}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GoogleMap;
