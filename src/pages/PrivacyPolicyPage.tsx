import LegalPageLayout from '../components/LegalPageLayout';

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated="January 2026">

      <div>
        <h3 className="font-bold text-gray-900 text-base mb-3">1. Introduction</h3>
        <p className="mb-3">Welcome to Shramico ("Shramico", "we", "our", or "us").</p>
        <p className="mb-3">
          Shramico is a digital platform that connects customers with workers and service
          professionals, including construction workers, warehouse workers, cleaners, drivers,
          electricians, plumbers, technicians, and other skilled or unskilled workers.
        </p>
        <p className="mb-3">
          Your privacy is important to us. This Privacy Policy explains how we collect, use,
          store, disclose, and protect your personal information when you use the Shramico
          mobile application, website, and related services.
        </p>
        <p>
          By creating an account or using Shramico, you agree to the practices described in
          this Privacy Policy.
        </p>
      </div>

      <div>
        <h3 className="font-bold text-gray-900 text-base mb-4">2. Information We Collect</h3>
        <p className="font-semibold text-gray-800 mb-2">Customers</p>
        <p className="mb-2 text-gray-500">When you create an account or request services, we may collect:</p>
        <ul className="list-disc list-inside space-y-1.5 text-gray-500 mb-6">
          <li>Full name</li>
          <li>Mobile number</li>
          <li>Email address (if provided)</li>
          <li>Profile photo (optional)</li>
          <li>Service request details</li>
          <li>Work descriptions &amp; uploaded photos</li>
          <li>Voice notes</li>
          <li>Ratings and reviews</li>
          <li>Communication with workers</li>
        </ul>
        <p className="font-semibold text-gray-800 mb-2">Workers</p>
        <p className="mb-2 text-gray-500">When registering as a worker on Shramico, we may collect:</p>
        <ul className="list-disc list-inside space-y-1.5 text-gray-500">
          <li>Full name</li>
          <li>Mobile number</li>
          <li>Date of birth</li>
          <li>Profile photograph</li>
          <li>Residential address</li>
          <li>Skill category &amp; work experience</li>
          <li>Identity verification documents</li>
          <li>Bank account or UPI details</li>
          <li>Earnings and payout information</li>
        </ul>
      </div>

      <div>
        <h3 className="font-bold text-gray-900 text-base mb-3">3. Location Information</h3>
        <p className="mb-3">Shramico uses location information to connect customers with nearby workers.</p>
        <p className="mb-2">We may collect:</p>
        <ul className="list-disc list-inside space-y-1.5 text-gray-500 mb-4">
          <li>Current location &amp; GPS coordinates</li>
          <li>Device location data</li>
          <li>Approximate or precise location</li>
        </ul>
        <p className="mb-2">Location information may be used to:</p>
        <ul className="list-disc list-inside space-y-1.5 text-gray-500 mb-5">
          <li>Match nearby workers and customers.</li>
          <li>Display service availability.</li>
          <li>Show worker arrival estimates.</li>
          <li>Enable live tracking during active bookings.</li>
          <li>Improve platform safety and service quality.</li>
        </ul>
        <div className="bg-[#FAF9F7] border border-gray-100 rounded-2xl p-5">
          <p className="font-semibold text-gray-800 mb-2">Background Location and Active Booking Tracking</p>
          <p className="text-gray-500 mb-3">
            During active bookings, Shramico may access location information while the application
            is running in the background or minimized to support real-time worker tracking, booking
            management, navigation assistance, service coordination, and related platform functionality.
          </p>
          <p className="text-gray-500 mb-3">
            Background location information is used only when necessary to provide active service
            features and improve the user experience during ongoing bookings.
          </p>
          <p className="text-gray-500">
            Users may manage location permissions through their device settings; however, disabling
            certain permissions may limit or prevent the availability of location-based features.
            Certain features may not function properly if location permissions are disabled.
          </p>
        </div>
      </div>

      <div>
        <h3 className="font-bold text-gray-900 text-base mb-3">4. Photos, Voice Notes &amp; Communications</h3>
        <p className="mb-2">Users may upload:</p>
        <ul className="list-disc list-inside space-y-1.5 text-gray-500 mb-4">
          <li>Job site photos</li>
          <li>Profile photos</li>
          <li>Voice notes</li>
          <li>Reviews and feedback</li>
        </ul>
        <p className="mb-5">
          We may also process communications exchanged through the platform, including in-app
          chat messages, customer support conversations, and service-related communications.
        </p>
        <div className="bg-[#FAF9F7] border border-gray-100 rounded-2xl p-5 mb-4">
          <p className="font-semibold text-gray-800 mb-2">Voice Notes</p>
          <p className="text-gray-500 mb-1.5">
            Customers can send voice notes to describe job requirements or ask questions.
            Workers can listen to voice notes to understand the job better.
          </p>
          <p className="text-gray-500 mb-1.5">Voice notes are processed only for service-related communication.</p>
          <p className="text-gray-500">Voice notes are not used for any other purpose.</p>
        </div>
        <div className="bg-[#FAF9F7] border border-gray-100 rounded-2xl p-5 mb-4">
          <p className="font-semibold text-gray-800 mb-2">Floating Tracking Bubble</p>
          <p className="text-gray-500 mb-3">
            During active bookings, Shramico may display a floating tracking bubble to provide
            quick access to booking information, worker status updates, navigation-related features,
            and real-time tracking functionality while users interact with other applications on
            their device.
          </p>
          <p className="text-gray-500 mb-3">
            The floating tracking bubble is displayed only for service-related purposes and may be
            dismissed, closed, or disabled by the user at any time.
          </p>
          <p className="text-gray-500">
            Shramico does not use floating overlays for advertising, promotional activities, or
            unrelated purposes.
          </p>
        </div>
        <div className="bg-[#FAF9F7] border border-gray-100 rounded-2xl p-5">
          <p className="font-semibold text-gray-800 mb-2">Notifications and Alerts</p>
          <p className="mb-2 text-gray-500">Shramico may send notifications, alerts, reminders, and service-related communications regarding:</p>
          <ul className="list-disc list-inside space-y-1.5 text-gray-500 mb-3">
            <li>Job matches and booking confirmations</li>
            <li>Booking status updates and reminders</li>
            <li>Worker job updates and changes</li>
            <li>Platform updates and service announcements</li>
            <li>Security and account-related information</li>
            <li>Customer support communications</li>
          </ul>
          <p className="text-gray-500">
            Certain notifications may be delivered with higher priority when necessary to support
            active bookings, worker coordination, or time-sensitive service operations. Users may
            manage notification preferences through their device settings where supported.
          </p>
        </div>
      </div>

      <div>
        <h3 className="font-bold text-gray-900 text-base mb-3">5. Worker Verification</h3>
        <p className="mb-3">
          To improve trust and safety, workers may be required to submit identity and verification
          documents before accessing certain platform features.
        </p>
        <p className="mb-2">Verification information is used solely for:</p>
        <ul className="list-disc list-inside space-y-1.5 text-gray-500 mb-3">
          <li>Identity verification</li>
          <li>Fraud prevention</li>
          <li>Platform safety</li>
          <li>Compliance with legal obligations</li>
        </ul>
        <p>Currently, customer identity verification may not be required for basic platform usage.</p>
      </div>

      <div>
        <h3 className="font-bold text-gray-900 text-base mb-3">6. How We Use Your Information</h3>
        <p className="mb-2">We use information to:</p>
        <ul className="list-disc list-inside space-y-1.5 text-gray-500 mb-5">
          <li>Create and manage accounts.</li>
          <li>Match customers with workers.</li>
          <li>Process bookings and job requests.</li>
          <li>Facilitate communication between users.</li>
          <li>Process payments and worker payouts.</li>
          <li>Improve platform performance.</li>
          <li>Provide customer support.</li>
          <li>Prevent fraud and abuse.</li>
          <li>Resolve disputes.</li>
          <li>Send service notifications.</li>
          <li>Comply with applicable laws and regulations.</li>
        </ul>
        <div className="bg-[#FAF9F7] border border-gray-100 rounded-2xl p-5">
          <p className="font-semibold text-gray-800 mb-2">Foreground Services</p>
          <p className="mb-2 text-gray-500">Shramico may use foreground services during active bookings to support features such as:</p>
          <ul className="list-disc list-inside space-y-1.5 text-gray-500 mb-3">
            <li>Real-time worker location tracking for navigation and service coordination.</li>
            <li>Job progress updates and status notifications.</li>
            <li>Communication features such as voice notes and in-app chat.</li>
            <li>Service completion tracking and verification.</li>
            <li>Safety and emergency assistance features.</li>
          </ul>
          <p className="text-gray-500">
            When required by the operating system, users may see a persistent notification
            indicating that service-related functions are active.
          </p>
        </div>
      </div>

      <div>
        <h3 className="font-bold text-gray-900 text-base mb-3">7. Payments &amp; Transactions</h3>
        <p className="mb-3">Payments made through Shramico may be processed using third-party payment providers.</p>
        <p className="mb-2">We may collect:</p>
        <ul className="list-disc list-inside space-y-1.5 text-gray-500 mb-3">
          <li>Transaction details &amp; payment status</li>
          <li>UPI information</li>
          <li>Payout records &amp; invoice information</li>
        </ul>
        <p>Shramico does not store complete credit card or debit card information on its servers.</p>
      </div>

      <div>
        <h3 className="font-bold text-gray-900 text-base mb-3">8. Sharing of Information</h3>
        <p className="mb-4">We do not sell personal information.</p>
        <p className="font-semibold text-gray-800 mb-2">Service Providers</p>
        <ul className="list-disc list-inside space-y-1.5 text-gray-500 mb-5">
          <li>Cloud hosting providers</li>
          <li>Payment processors</li>
          <li>SMS and OTP providers</li>
          <li>Analytics providers</li>
          <li>Customer support partners</li>
          <li>Verification service providers</li>
        </ul>
        <p className="font-semibold text-gray-800 mb-2">Between Customers and Workers</p>
        <p className="text-gray-500 mb-5">
          To facilitate bookings, certain information may be shared, including name, profile photo,
          ratings, service location, and contact details when necessary.
        </p>
        <p className="font-semibold text-gray-800 mb-2">Legal Requirements</p>
        <p className="text-gray-500 mb-5">
          We may disclose information if required by applicable laws, government authorities, court
          orders, law enforcement agencies, or regulatory bodies.
        </p>
        <div className="bg-[#FAF9F7] border border-gray-100 rounded-2xl p-5">
          <p className="font-semibold text-gray-800 mb-2">Third-Party Services and Infrastructure</p>
          <p className="mb-2 text-gray-500">Shramico may use trusted third-party service providers to support platform operations, including:</p>
          <ul className="list-disc list-inside space-y-1.5 text-gray-500 mb-3">
            <li>Cloud hosting infrastructure</li>
            <li>Payment processing services</li>
            <li>Communication platforms (SMS, voice, chat)</li>
            <li>Analytics and performance monitoring</li>
            <li>Customer support tools</li>
            <li>Verification and identity services</li>
          </ul>
          <p className="text-gray-500">
            These providers access information only as needed to perform their functions and are
            contractually obligated to protect user data. They may process information on our behalf
            solely for the purpose of delivering and improving platform services.
          </p>
        </div>
      </div>

      <div>
        <h3 className="font-bold text-gray-900 text-base mb-3">9. Data Security</h3>
        <p className="mb-2">We implement reasonable security measures to protect user information, including:</p>
        <ul className="list-disc list-inside space-y-1.5 text-gray-500 mb-5">
          <li>Secure servers</li>
          <li>Encrypted data transmission</li>
          <li>Access controls</li>
          <li>Authentication systems</li>
          <li>Security monitoring</li>
        </ul>
        <div className="bg-[#FAF9F7] border border-gray-100 rounded-2xl p-5">
          <p className="font-semibold text-gray-800 mb-2">Device Information and Diagnostics</p>
          <p className="mb-2 text-gray-500">We may automatically collect certain technical information from user devices, including:</p>
          <ul className="list-disc list-inside space-y-1.5 text-gray-500 mb-3">
            <li>Operating system details</li>
            <li>Device model and manufacturer</li>
            <li>IP address and general location</li>
            <li>App usage and performance data</li>
          </ul>
          <p className="text-gray-500">
            This information helps us improve app functionality, security, troubleshoot issues,
            and enhance user experience. However, no system can guarantee absolute security.
          </p>
        </div>
      </div>

      <div>
        <h3 className="font-bold text-gray-900 text-base mb-3">10. Data Retention</h3>
        <p className="mb-2">We retain information for as long as necessary to:</p>
        <ul className="list-disc list-inside space-y-1.5 text-gray-500 mb-3">
          <li>Provide services.</li>
          <li>Maintain platform records.</li>
          <li>Process payments.</li>
          <li>Resolve disputes.</li>
          <li>Prevent fraud.</li>
          <li>Comply with legal obligations.</li>
        </ul>
        <p>Certain records may be retained even after account deletion when required by law.</p>
      </div>

      <div>
        <h3 className="font-bold text-gray-900 text-base mb-3">11. Your Rights</h3>
        <p className="mb-2">Subject to applicable law, users may have the right to:</p>
        <ul className="list-disc list-inside space-y-1.5 text-gray-500 mb-3">
          <li>Access their personal information.</li>
          <li>Correct inaccurate information.</li>
          <li>Request deletion of personal information.</li>
          <li>Withdraw consent where applicable.</li>
          <li>Request information about data processing activities.</li>
        </ul>
        <p>Requests may be submitted through our support channels.</p>
      </div>

      <div>
        <h3 className="font-bold text-gray-900 text-base mb-3">12. Account Deletion</h3>
        <p className="mb-3">
          Users may request deletion of their account through the application or by contacting
          Shramico support.
        </p>
        <p className="mb-2">Upon account deletion:</p>
        <ul className="list-disc list-inside space-y-1.5 text-gray-500 mb-3">
          <li>Access to the account will be removed.</li>
          <li>Personal information may be deleted, anonymized, or retained as required by applicable law.</li>
          <li>
            Certain records, including transaction records, payment information, fraud prevention
            records, dispute resolution records, and legally required information, may be retained
            for a limited period as required by law or legitimate business purposes.
          </li>
        </ul>
        <p>Account deletion requests will be processed within a reasonable period subject to applicable legal requirements.</p>
      </div>

      <div>
        <h3 className="font-bold text-gray-900 text-base mb-3">13. Children's Privacy</h3>
        <p className="mb-3">Shramico is intended only for individuals who are at least 18 years of age.</p>
        <p>
          We do not knowingly collect personal information from children. If we become aware
          that a child has provided personal information, we will take reasonable steps to
          delete such information.
        </p>
      </div>

      <div>
        <h3 className="font-bold text-gray-900 text-base mb-3">14. Changes to this Policy</h3>
        <p className="mb-3">We may update this Privacy Policy from time to time.</p>
        <p className="mb-3">Updated versions will be published within the application, website, or other official channels.</p>
        <p>Continued use of Shramico after updates constitutes acceptance of the revised Privacy Policy.</p>
      </div>

      <div>
        <h3 className="font-bold text-gray-900 text-base mb-3">15. Contact Us</h3>
        <p className="mb-4">For privacy-related questions, requests, or concerns, please contact the Shramico Support Team:</p>
        <div className="bg-[#FAF9F7] rounded-2xl border border-gray-100 p-5 space-y-2">
          <p className="font-semibold text-gray-800">Shramico Support Team</p>
          <p>
            <span className="text-gray-400 font-medium">Email: </span>
            <a href="mailto:support@shramico.com" className="text-burgundy hover:underline font-medium">support@shramico.com</a>
          </p>
          <p>
            <span className="text-gray-400 font-medium">Website: </span>
            <span className="text-gray-700">www.shramico.com</span>
          </p>
          <p>
            <span className="text-gray-400 font-medium">Phone: </span>
            <a href="tel:+919552960808" className="text-burgundy hover:underline font-medium">+91 9552960808</a>
          </p>
        </div>
      </div>

      <div className="bg-burgundy/5 border border-burgundy/15 rounded-2xl p-6">
        <h3 className="font-bold text-gray-900 text-base mb-3">16. Consent</h3>
        <p>
          By creating an account, accessing, or using Shramico, you acknowledge that you have
          read, understood, and agreed to this Privacy Policy and the collection, use, storage,
          and sharing of information as described herein.
        </p>
      </div>

    </LegalPageLayout>
  );
}
