export default function Page () {
    return (
        <div className="w-full bg-gray-100">
        <div className="max-w-2xl mx-auto my-12 p-8 bg-gray-50 shadow-md rounded-lg">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>
            <p className="text-gray-600 mb-6">We'd love to hear from you! Whether you have a question about our app, need assistance, or just want to provide feedback, our team is here to help.</p>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">Email Us:</h3>
            <p className="text-gray-600 mb-4">For general inquiries:
                <a href="mailto:support@appname.com" className="text-sky-700 hover:underline hover:text-blue-500"> support@appname.com</a>
            </p>
            <p className="text-gray-600 mb-6">For technical support: 
                <a href="mailto:techsupport@appname.com" className="text-sky-700 hover:underline hover:text-blue-500"> techsupport@appname.com</a>
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">Follow Us:</h3>
            <p className="mb-6">
                <a href="#" target="_blank" className="text-sky-700 hover:underline hover:text-blue-500 mr-4">Facebook</a>
                <a href="#" target="_blank" className="text-sky-700 hover:underline hover:text-blue-500 mr-4">Twitter</a>
                <a href="#" target="_blank" className="text-sky-700 hover:underline hover:text-blue-500">Instagram</a>
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">Visit Us:</h3>
            <div className="flex flex-col text-gray-600">
                <p>Our Office:</p>
                <p>123 Finance Avenue,</p>
                <p>Money City, 45678</p>
            </div>
        </div>
        </div>
    ); 
}