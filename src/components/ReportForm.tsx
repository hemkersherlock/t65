        <div className="max-w-2xl mx-auto">
           <h2 className="text-3xl font-bold text-center mb-8">Report a Data Breach</h2>
           <p className="text-gray-600 text-center mb-8">Help us help you. Report suspicious activity or potential data breaches.</p>
-          <form className="space-y-6">
+          <form action="https://formspree.io/f/mvgbrayb" method="POST" className="space-y-6">
+            <input type="hidden" name="_subject" value="New Submission from NeverLeaked" />
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div>
                 <label htmlFor="reporter-name" className="block text-sm font-medium text-gray-700 mb-2">
                   Your Name
                 </label>
                 <input
                   type="text"
                   id="reporter-name"
+                  name="name"
                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                   placeholder="Your name"
+                  required
                 />
               </div>
               <div>
                 <label htmlFor="reporter-email" className="block text-sm font-medium text-gray-700 mb-2">
                   Email
                 </label>
                 <input
                   type="email"
                   id="reporter-email"
+                  name="email"
                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                   placeholder="your@email.com"
+                  required
                 />
               </div>
             </div>
             <div>
               <label htmlFor="incident-type" className="block text-sm font-medium text-gray-700 mb-2">
                 Incident Type
               </label>
               <select
                 id="incident-type"
+                name="incident_type"
                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
+                required
               >
                 <option value="">Select incident type</option>
                 <option value="data-breach">Data Breach</option>
                 <option value="phishing">Phishing Attack</option>
                 <option value="malware">Malware Detection</option>
                 <option value="unauthorized-access">Unauthorized Access</option>
                 <option value="other">Other</option>
               </select>
             </div>
             <div>
               <label htmlFor="incident-description" className="block text-sm font-medium text-gray-700 mb-2">
                 Incident Description
               </label>
               <textarea
                 id="incident-description"
+                name="description"
                 rows={4}
                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                 placeholder="Please describe the incident in detail..."
+                required
               ></textarea>
             </div>
             <div>
               <label htmlFor="company-affected" className="block text-sm font-medium text-gray-700 mb-2">
                 Company/Organization Affected
               </label>
               <input
                 type="text"
                 id="company-affected"
+                name="company"
                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                 placeholder="Company name"
               />
             </div>
             <button
               type="submit"
               className="w-full bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-colors font-semibold"
             >
               Submit Report
             </button>
           </form>
         </div>