        <div className="max-w-md mx-auto">
           <h3 className="text-2xl font-bold text-center mb-4">Stay Informed</h3>
           <p className="text-gray-600 text-center mb-6">Get the latest security insights and breach alerts.</p>
-          <form className="flex flex-col sm:flex-row gap-4">
+          <form action="https://formspree.io/f/mvgbrayb" method="POST" className="flex flex-col sm:flex-row gap-4">
+            <input type="hidden" name="_subject" value="New Submission from NeverLeaked" />
             <input
               type="email"
+              name="email"
               placeholder="Enter your email"
               className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
+              required
             />
             <button
               type="submit"
               className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold whitespace-nowrap"
             >
               Subscribe
             </button>
           </form>
         </div>