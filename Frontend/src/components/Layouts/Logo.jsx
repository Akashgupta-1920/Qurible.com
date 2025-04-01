import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Logo = () => {
  return (
    <div className="relative">
      {/* Location Icon with Green Background */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 rounded-full p-2">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white" size="lg" />
      </div>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 mt-15">
          <h1 className="text-5xl lg:text-4xl md:text-2xl sm:text-xl font-semibold text-center mb-8 text-gray-900">With Us:</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Your existing content goes here */}
            <div className="rounded-xl p-6 bg-yellow-100 animate-on-scroll opacity-0 hover:shadow-md transition-all">
              <div className="h-10 w-10 bg-yellow-200 rounded-lg flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={faSearch} className="text-yellow-600" size="lg" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Save more, Money</h3>
              <p className="text-gray-700">Easily find healthcare services tailored to your needs</p>
            </div>
            {/* Add other cards here */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Logo;