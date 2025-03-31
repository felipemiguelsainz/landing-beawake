import { useState } from "react";

export default function TermsPage() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="min-h-screen pb-12 lg:h-auto text-white pt-24 lg:pt-36 w-full flex justify-center lg:px-36 flex-wrap">
      <h1 className="w-auto text-center font-bold text-4xl">
        <p className="light-blue w-auto py-8 px-12 mb-12">Terms and Conditions</p>
      </h1>
      <div className="w-[80vw]">
        <p>
          By using this website, you agree to the terms and conditions outlined
          by BeAwake, including privacy policies, access conditions, and cookie
          usage. Click below to read the full terms.
        </p>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Hide Full Terms" : "Read Full Terms"}
        </button>
        {expanded && (
          <div className="mt-4 border-t pt-4">
            <p>
              Electronic Circuit Background TERMS AND CONDITIONS — BeAwake This terms
              of use policy is valid from April 2024. BeAwake, a private legal entity,
              describes through this document the rules of use for the website
              http://beawake.ai and any other website, store, or application operated
              by the owner. By browsing this website, we consider that you agree to
              the terms of use outlined below. If you do not agree to the terms of
              this agreement, we ask that you do not make any further use of this
              website, let alone register or submit your personal data. If we change
              our terms of use, we will publish the new text on this website, with an
              updated review date. We may modify this document at any time. If there
              is a significant change in the terms of this agreement, we may inform
              you using the contact information we have in our database or through a
              notification. Your use of this website after changes means that you
              accept the revised terms of use. If, after reading the revised version,
              you do not agree with its terms, please end your access. Section 1 -
              User Using this website automatically grants you the status of User and
              implies your full acceptance of all the guidelines and conditions
              included in these Terms. Section 2 - Adherence along with the privacy
              policy Using this website implies adherence to these Terms of Use and to
              the most current version of the Laufer Privacy Policy. Section 3 -
              Access conditions In general, access to the Laufer website is free and
              does not require prior registration. However, to use some features, the
              user may need to register, creating a user account with a username and
              access password. It is the user's responsibility to provide only
              correct, authentic, valid, complete, and up-to-date information, as well
              as not to disclose their username and password to third parties. Some
              parts of this website offer the user the option to post comments in
              certain areas. Laufer does not consent to the publication of
              discriminatory, offensive, or unlawful content, or content that
              infringes copyright or any other rights of third parties. The posting of
              any content by the user of this website, including messages and
              comments, implies a non-exclusive, irrevocable, and irreversible license
              for its use, reproduction, and publication by Laufer on its website,
              internet platforms, and applications, or even on other platforms,
              without any restriction or limitation. Section 4 - Cookies Information
              about your use of this website may be collected through cookies. Cookies
              are pieces of information that are stored directly on the device you are
              using. Cookies allow the collection of information such as the type of
              browser, time spent on the website, pages visited, language preferences,
              and other anonymous traffic data. We and our service providers use the
              information for security protection, to facilitate navigation, display
              information more efficiently, and personalize your experience using this
              website, as well as for online tracking. We also collect statistical
              information about website usage to continuously improve our design and
              functionality, to understand how the website is used, and to help you
              solve relevant problems. If you do not want your information to be
              collected through cookies, there is a simple procedure in most browsers
              that allows you to automatically reject cookies, or gives you the option
              to accept or reject the transfer of a specific (or several) cookie(s)
              from a specific website to your computer. However, this may create
              inconvenience in your use of the website. The settings you choose may
              affect your browsing experience and the operation that requires the use
              of cookies. In this regard, we disclaim any liability for the
              consequences arising from the limited operation of this website caused
              by disabling cookies on your device (inability to set or read a cookie).
              Section 5 - Intellectual property All elements of Laufer are
              intellectual property of Laufer itself or its licensors. These terms or
              the use of the website do not grant you any license or right to use the
              intellectual property rights of Laufer or any third party. Section 6 -
              Links to third-party websites This website may occasionally contain
              hyperlinks that will redirect you to websites of our partners,
              advertisers, suppliers, etc. If you click on one of these links to any
              of these sites, please remember that each site has its own privacy
              practices and we are not responsible for these policies. Please check
              these policies before submitting any personal data to these sites. We
              are not responsible for the policies and collection, use, and disclosure
              practices (including data protection practices) of other organizations,
              such as Facebook, Apple, Google, Microsoft, or any other software
              developer or application provider, social media store, operating system,
              internet service provider, or device manufacturer, including Personal
              Data that you disclose to other organizations through applications, in
              relation to such applications, or posted on our social networks. We
              recommend that you become informed about the privacy policy and terms of
              use of each website visited or service provider used. Section 7 -
              Deadlines and modifications The operation of this website is indefinite.
              The entire website or each of its sections may be closed, suspended, or
              interrupted unilaterally by Laufer, at any time and without prior
              notice. Section 8 - Personal data During the use of this website,
              certain personal data will be collected and processed by Laufer and/or
              the Partners. The rules regarding the processing of personal data by
              Laufer are stipulated in the Privacy Policy. Section 9 - Contact If you
              have any questions about the terms of use, please contact us by email at
              hi@beawake.ai.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
