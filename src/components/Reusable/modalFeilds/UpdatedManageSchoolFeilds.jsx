import React, { useState } from "react";

const UpdatedManageSchoolFeilds = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabs = {
    overview: {
      title: "About Harvard Law School",
      content: (
        <p className="text-sm text-gray-600 leading-relaxed">
          Harvard Law School is one of the world's premier institutions for legal education,
          founded in 1817. As the oldest continuously operating law school in the United States,
          we combine centuries of tradition with innovative teaching methods and cutting-edge
          legal research to prepare the next generation of legal leaders.
        </p>
      ),
      additionalContent: (
        <div className="mt-4">
          <h3 className="font-medium text-gray-800">
            Featured Programs
          </h3>
          <ul className="mt-2 space-y-2 text-sm text-gray-600">
            <li>✔ Juris Doctor (JD) Program</li>
            <li>✔ LLM (Master of Laws)</li>
            <li>✔ SJD (Doctor of Juridical Science)</li>
            <li>✔ Executive Education</li>
          </ul>
        </div>
      ),
    },
    culture: {
      title: "Campus Culture & Student Life at Harvard Law",
      content: (
        <div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Harvard Law School fosters a vibrant, intellectually challenging environment where
            students from diverse backgrounds come together to explore legal theory and practice.
            Our campus culture emphasizes collaboration, public service, and academic excellence.
          </p>
          <h3 className="mt-4 font-medium text-gray-800">
            Student Support Services
          </h3>
          <ul className="mt-2 space-y-2 text-sm text-gray-600">
            <li>✔ Academic advising and tutoring</li>
            <li>✔ Career counseling and placement</li>
            <li>✔ Mental health and wellness resources</li>
            <li>✔ Disability services</li>
            <li>✔ International student support</li>
            <li>✔ Financial aid counseling</li>
          </ul>
        </div>
      ),
    },
  };

  return (
    <div className="bg-gray-50 flex justify-center">
      <div className="w-full h-[79vh] overflow-y-auto bg-white rounded-xl shadow-sm overflow-hidden">
    
        <div className="relative bg-blue-50 px-4 pt-6 pb-20">


          <div className="absolute left-1/2 bottom-5 transform -translate-x-1/2 w-16 h-16 flex items-center justify-center">
            <div
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                borderRadius: '0.75rem',
                background: 'linear-gradient(135deg, #A51C30 0%, #6A0F1A 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span
                  style={{
                    color: 'white',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                  }}
                >
                  ⚖️
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="px-8 pt-6">
          <h1 className="text-2xl font-semibold text-gray-900">
            Harvard Law School
          </h1>
          <p className="text-gray-500 mt-1">Excellence in Legal Education Since 1817</p>

          <div className="flex flex-wrap gap-6 text-sm text-gray-500 mt-4">
            <span className="flex items-center gap-1">
              📍 Cambridge, Massachusetts
            </span>
            <span className="flex items-center gap-1">
              👥 1,800+ Students
            </span>
            <span className="flex items-center gap-1">
              🏢 Founded 1817
            </span>
            <span className="flex items-center gap-1">
              📂 12 Faculty Positions Open
            </span>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {["Constitutional Law", "International Law", "Corporate Law", "Human Rights", "Environmental Law", "Criminal Law", "Intellectual Property", "Tax Law", "Health Law", "Technology Law"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs bg-gray-100 rounded-full text-gray-700 hover:bg-gray-200 transition-colors duration-200"
                >
                  {tag}
                </span>
              )
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 bg-gray-50 rounded-lg p-4 text-sm">
            <div className="flex items-center gap-2 text-gray-600 hover:text-crimson transition-colors duration-200 cursor-pointer">
              🌐 law.harvard.edu
            </div>
            <div className="flex items-center gap-2 text-gray-600 hover:text-crimson transition-colors duration-200 cursor-pointer">
              ✉️ admissions@law.harvard.edu
            </div>
            <div className="flex items-center gap-2 text-gray-600 hover:text-crimson transition-colors duration-200 cursor-pointer">
              📞 (617) 495-3100
            </div>
          </div>

          <div className="mt-8 border-b flex gap-6 text-sm">
            <button
              onClick={() => handleTabClick("overview")}
              className={`pb-2 border-b-2 transition-all duration-200 font-medium ${
                activeTab === "overview"
                  ? "border-crimson text-crimson"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => handleTabClick("culture")}
              className={`pb-2 border-b-2 transition-all duration-200 font-medium ${
                activeTab === "culture"
                  ? "border-crimson text-crimson"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Campus Culture
            </button>
          </div>

          <div className="mt-6">
            <div className="mb-6">
              <h2 className="font-semibold text-gray-900 mb-2">
                {tabs[activeTab].title}
              </h2>
              {tabs[activeTab].content}
              {activeTab === "overview" && tabs[activeTab].additionalContent}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {activeTab === "overview" ? (
                <>
                  <div>
                    <h2 className="font-semibold text-gray-900 mb-2">
                      Academic Excellence
                    </h2>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>✔ #1 Law School Ranking (US News)</li>
                      <li>✔ 12:1 Student-Faculty Ratio</li>
                      <li>✔ 450+ Courses Offered Annually</li>
                      <li>✔ 25+ Research Centers</li>
                      <li>✔ 98% Bar Passage Rate</li>
                      <li>✔ Global Legal Network</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="font-semibold text-gray-900 mb-2">
                      Notable Achievements
                    </h2>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>🏆 Best Law Library in the World</li>
                      <li>⭐ 8 U.S. Presidents as Alumni</li>
                      <li>📈 99% Employment Rate at Graduation</li>
                      <li>🌍 70+ Countries Represented</li>
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h2 className="font-semibold text-gray-900 mb-2">
                      Campus Facilities
                    </h2>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>✅ World's Largest Academic Law Library</li>
                      <li>✅ Modern Moot Courtrooms</li>
                      <li>✅ 40+ Student Organizations</li>
                      <li>✅ State-of-the-art Classrooms</li>
                      <li>✅ On-campus Housing Options</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="font-semibold text-gray-900 mb-2">
                      Career Development
                    </h2>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>📚 2,000+ Internship Partners</li>
                      <li>👥 Alumni Mentorship Program</li>
                      <li>💼 95% Employment in Desired Field</li>
                      <li>🌐 Global Exchange Programs</li>
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t py-6 text-center text-xs text-gray-400">
          © 2025 Legal Education Network – Your Path to Legal Excellence
          <div className="flex justify-center gap-4 mt-2">
            <span className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
              Privacy Policy
            </span>
            <span className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
              Terms of Service
            </span>
            <span className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
              Contact Admissions
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatedManageSchoolFeilds;