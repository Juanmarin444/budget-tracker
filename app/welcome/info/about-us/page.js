export default function Page () {
    return (
        <div className="w-full bg-gray-100 flex justify-center py-16">
        <div className="w-11/12 sm:w-10/12 p-14 text-gray-800 cursor-default bg-gray-50 shadow-md rounded-lg">
            <div>
                <h2 className="text-4xl font-bold pb-3">About Us</h2>
                <strong>Welcome to Budget Tracker</strong>
                <p className="pt-8 text-gray-600">
                    At Budget Tracker, we're passionate about empowering individuals to take control of their financial lives. 
                    Our mission is to provide you with a simple, intuitive, and effective tool to track your budget, manage expenses, and achieve your financial goals.
                </p>
            </div>

            <div className="pt-8">
                <h3 className="text-2xl font-bold">Who We Are</h3>
                <p className="pt-4 text-gray-600">
                    Founded by a team of finance enthusiasts and tech innovators, Budget Tracker was created to address a common problem: 
                    personal finance management shouldn't be complicated. We believe that everyone deserves to have a clear and concise view of their finances without the hassle of complex spreadsheets and overwhelming charts.
                </p>
            </div>

            <div className="pt-8">
                <h3 className="text-2xl font-bold">Our Vision</h3>
                <p className="pt-4 text-gray-600">
                    Our vision is to make financial freedom accessible to everyone. Whether you're a student, a young professional, 
                    a family, or a retiree, Budget Tracker is designed to fit your unique budgeting needs. We aim to help you:
                </p>
                <ul className="pt-4 list-disc pl-4 text-gray-600">
                    <li><strong className="text-gray-800">Understand Your Spending:</strong> Get detailed insights into where your money goes each month.</li>
                    <li><strong className="text-gray-800">Plan for the Future:</strong> Set realistic savings goals and track your progress.</li>
                    <li><strong className="text-gray-800">Stay on Track:</strong> Receive personalized tips and reminders to keep you motivated.</li>
                </ul>
            </div>

            <div className="pt-8">
                <h3 className="text-2xl font-bold">Why Choose Budget Tracker</h3>
                <ul className="pt-4 list-disc pl-4 text-gray-600">
                    <li><strong className="text-gray-800">User-Friendly Interface:</strong> Our app is designed with simplicity in mind, making it easy for you to track your expenses on the go.</li>
                    <li><strong className="text-gray-800">Customizable Features:</strong> Tailor your budget categories, set up recurring expenses, and adjust your financial plans as your needs change.</li>
                    <li><strong className="text-gray-800">Security First:</strong> We prioritize your privacy and data security. Your information is encrypted and protected with the highest industry standards.</li>
                    <li><strong className="text-gray-800">Community Support:</strong> Join a growing community of users who share tips, advice, and success stories to help each other succeed financially.</li>
                </ul>
            </div>

            <div className="pt-8">
                <h3 className="text-2xl font-bold">Our Story</h3>
                <p className="pt-4 text-gray-600">
                    Budget Tracker started as a small project among friends who shared a common frustration with existing budgeting tools. 
                    We wanted something straightforward, effective, and enjoyable to use. What began as a personal solution quickly grew into a passion project, and soon, a full-fledged app that we're proud to share with the world.
                </p>
            </div>

            <div className="pt-8">
                <h3 className="text-2xl font-bold">Join Us on the Journey</h3>
                <p className="pt-4 text-gray-600">
                    We're more than just an app; we're a movement towards better financial health. We invite you to join us on this journey to financial freedom. 
                    Together, we can make budgeting a breeze and turn financial stress into financial success.
                </p>
                <p className="py-4 text-gray-600">
                    Thank you for choosing Budget Tracker. Let's build a brighter financial future together.
                </p>
                <strong>The Budget Tracker Team</strong>
            </div>
        </div>
        </div>
    );
}