import LegalPageLayout from '../components/LegalPageLayout';

export default function AccountDeletionPage() {
  return (
    <LegalPageLayout title="Account Deletion" lastUpdated="January 2026">
      <div>
        <h3 className="font-bold text-gray-900 text-base mb-3">1. How to Delete Your Account</h3>
        <p className="mb-3">
          At Shramico, you have the right to delete your account and all associated personal data at any time. You can initiate the account deletion process using either of the following two methods:
        </p>

        <div className="space-y-6 mt-6 mb-8">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
              <span className="bg-burgundy text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">1</span>
              Method 1: In-App Deletion
            </h4>
            <ol className="list-decimal list-inside space-y-2 text-gray-600 ml-2">
              <li>Open the Shramico app and log into your account.</li>
              <li>Navigate to the <strong>Support</strong> section from the main menu.</li>
              <li>Scroll to the bottom and tap the <strong>Delete Account</strong> button.</li>
              <li>You will be prompted with a confirmation screen to prevent accidental deletion. Confirm your choice to finalize the deletion.</li>
            </ol>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
              <span className="bg-burgundy text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">2</span>
              Method 2: Email Request
            </h4>
            <p className="text-gray-600 mb-3 ml-2">
              If you no longer have access to the app, you can request account deletion via email:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-600 ml-2">
              <li>Send an email to <a href="mailto:support@shramico.com" className="text-burgundy hover:underline font-medium">support@shramico.com</a>.</li>
              <li>Use the subject line: <strong>"Account Deletion Request"</strong>.</li>
              <li>Ensure you are emailing from the registered email address associated with your Shramico account for verification purposes.</li>
              <li>Include your full name and the phone number linked to your account in the body of the email.</li>
            </ol>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-bold text-gray-900 text-base mb-3">2. What Happens When You Delete Your Account?</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
          <li><strong>Access Removed:</strong> You will immediately lose access to your account, profile, and service history.</li>
          <li><strong>Data Erasure:</strong> Your personal information, photos, and messages will be permanently deleted or anonymized.</li>
          <li><strong>Data Retention:</strong> Please note that certain records (such as transaction history, payment information, and fraud prevention records) may be retained for a limited period as required by law or for legitimate business compliance purposes, as outlined in our <a href="/privacy-policy" className="text-burgundy hover:underline">Privacy Policy</a>.</li>
        </ul>
      </div>

      <div className="bg-burgundy/5 border border-burgundy/15 rounded-2xl p-6">
        <h3 className="font-bold text-gray-900 text-base mb-2">Need Help?</h3>
        <p className="text-gray-600 text-sm">
          If you are experiencing issues with deleting your account or have any questions about your data, please contact our support team at <a href="mailto:support@shramico.com" className="text-burgundy hover:underline font-medium">support@shramico.com</a> or call us at <a href="tel:+919552960808" className="text-burgundy hover:underline font-medium">+91 9552960808</a>.
        </p>
      </div>

    </LegalPageLayout>
  );
}
