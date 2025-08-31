@@ .. @@
           <div className="max-w-2xl mx-auto">
             <h2 className="text-3xl font-bold text-center mb-8">Get In Touch</h2>
             <p className="text-gray-600 text-center mb-8">Ready to secure your business? Contact us today for a consultation.</p>
-            <form className="space-y-6">
+            <form action="https://formspree.io/f/mvgbrayb" method="POST" className="space-y-6">
+              <input type="hidden" name="_subject" value="New Submission from NeverLeaked" />
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                   <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                     Name
                   </label>
                   <input
                     type="text"
                     id="name"
+                    name="name"
                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                     placeholder="Your name"
+                    required
                   />
                 </div>
                 <div>
                   <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                     Email
                   </label>
                   <input
                     type="email"
                     id="email"
+                    name="email"
                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                     placeholder="your@email.com"
+                    required
                   />
                 </div>
               </div>
               <div>
                 <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                   Company
                 </label>
                 <input
                   type="text"
                   id="company"
+                  name="company"
                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                   placeholder="Your company"
                 />
               </div>
               <div>
                 <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                   Message
                 </label>
                 <textarea
                   id="message"
+                  name="message"
                   rows={4}
                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                   placeholder="Tell us about your security needs..."
+                  required
                 ></textarea>
               </div>
               <button
                 type="submit"
                 className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
               >
                 Send Message
               </button>
             </form>
           </div>