import React from "react";
import Layout from "@/components/layout/Layout";

const PrivacyPage = () => {
  return (
    <>
      <Layout>
        <div className="box">
          <div className="section">
            <div>
              <p className="text-xl lg:text-2xl fw-600 uppercase">Privacy Policy</p>
              <div className="mt-8">
                <p>
                  In addition to Users&apos; personal information and details,
                  the use of the App also requires access to users&apos;
                  registered locations (using geolocation), photographs of their
                  buildings/residence for easy identification and faster service
                  resolution. We do not sell any personal information that is
                  provided by registered users of this App, nor is their private
                  information shared without their express consent.
                </p>
              </div>
              <p className="text-xl lg:text-2xl fw-600 mt-12">PAYMENT TERMS & REFUND POLICY</p>
              <div className="mt-8">
                <p>
                All payments on this platform are as advised by the subscribing local Waste Management Authority through designated personal User wallets from which levies will be swept to service providers. In addition to monthly levies, subscribers will be charged separately, additional fees for special service clearance calls and standard Bin request. No refund shall be due to registered users of this App as it applies to their existing monthly waste levies unless advised otherwise by the local Authority.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default PrivacyPage;
