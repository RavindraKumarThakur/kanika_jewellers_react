import styles from '../styles/components/Privacy_policy.module.css'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


function Privacy_policy() {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const content = [
        {
            heading: "User guidelines & policies",
            description: "Our policies outline your rights and responsibilities when using our services and purchasing products. By accessing our website or making a purchase, you agree to follow our established rules and procedures. These include guidelines on payment, privacy, and acceptable use of our services. Any misuse or violation of these policies may result in restricted access or termination of your account. We recommend reviewing these policies regularly, as updates may occur without prior notice."
        },
        {
            heading: "Service rules & agreements",
            description: "Our agreements detail the conditions under which you can use our services and access our content safely.By engaging with our platform, you consent to adhere to the outlined terms. These include guidelines for account creation, content usage, and payment methods. Failure to comply may lead to suspension or termination of your access to our services.We reserve the right to update these conditions as needed. Continued use of our services after changes indicates your acceptance of the revised terms. Please review these terms regularly"
        },
        {
            heading: "User rights & obligations",
            description: "As a user, you have the right to access our services, provided you comply with our policies. Your obligations include respecting our content, maintaining your account security, and adhering to the terms of use.Your rights include the ability to access and use our services as intended, receive customer support, and have your personal information protected under our privacy policy. You are obligated to use our services in a lawful manner, refrain from any unauthorized activities, and report any security breaches. Misuse of our platform, including attempts to bypass security measures, distribute harmful content, or engage in fraudulent activities, is strictly prohibited and may result in legal action or termination of your account.You are responsible for maintaining the confidentiality of your account information, including your password. Any actions taken under your account are your responsibility, and you must notify us immediately if you suspect any unauthorized use. We expect users to interact respectfully with our platform and other users, avoiding any form of harassment, discrimination, or harmful behavior. Violations of these obligations can result in the suspension or permanent termination of your account.By using our services, you agree to these rights and obligations. Regularly review them to ensure continued compliance and protection."
        },
        {
            heading: "Usage terms & policies",
            description: "Our platform's terms govern how you can interact with our services, ensuring a safe and fair experience for all users. You are required to use our services in accordance with these rules, which include guidelines on account creation, payment methods, content usage, and prohibited activities. Any breach of these terms may result in restricted access or termination of your account. We aim to protect your rights while maintaining the integrity of our platform through these established policies.By accessing our services, you agree to follow these rules and procedures. It's important to review them regularly, as continued use of our platform signifies your acceptance of any updates."
        },
        {
            heading: "Legal policies & conditions",
            description: "Our rules govern the legal relationship between you and our platform, protecting both parties involved.These conditions outline your obligations, ensuring compliance with laws and our guidelines when using our services.By accessing and using our platform, you agree to adhere to our established rules, which include the protection of intellectual property, the appropriate use of content, and the maintenance of confidentiality. Any violation, such as unauthorized use of our materials or failure to comply with payment obligations, may result in legal action. We reserve the right to modify these rules as needed, and it is your responsibility to stay informed about any updates by reviewing these conditions regularly.Your use of our platform signifies acceptance of these rules, which are designed to ensure a secure and lawful environment for all users. Failure to comply may result in consequences such as restricted access, account termination, or legal action. We advise you to familiarize yourself with these rules and seek clarification if needed, to avoid any misunderstandings or violations."
        },
        {
            heading: "Agreement & user guidelines",
            description: "By using our services, you agree to follow the rules and standards set forth in our user guidelines. These guidelines ensure a fair and safe environment for all users, covering everything from account creation and content usage to privacy and payment terms. Compliance with these rules is essential to maintain your access to our platform.Your use of our platform requires you to adhere to specific obligations, including respecting the intellectual property rights of others, ensuring the accuracy of information provided, and not engaging in any fraudulent or harmful activities. We expect users to interact in a respectful manner, refraining from harassment, discrimination, or any behavior that could disrupt the experience of others on our platform.Failure to comply with these rules may result in consequences such as warnings, suspension, or even permanent termination of your account. We take violations seriously and will investigate any reports of misconduct. In cases where legal violations occur, we reserve the right to pursue appropriate legal action. To avoid these issues, we encourage you to regularly review the guidelines and stay informed about any updates or changes that may affect your use of our services.We regularly update these rules to reflect changes in our services and legal requirements. It's important to review the guidelines periodically to ensure your continued compliance and to avoid any potential issues.Your use of our platform confirms your acceptance of these rules and standards."
        },
        {
            heading: "Rules for service use",
            description: "Our guidelines ensure that all users have a fair, safe, and enjoyable experience on our platform. By accessing our services, you agree to abide by our established policies, which cover everything from account security and privacy to acceptable behavior and content usage. Misuse of our platform, including engaging in fraudulent activities or violating intellectual property rights, is strictly prohibited. Failure to comply may result in consequences such as account suspension or legal action."
        },
        {
            heading: "Policy & user agreement",
            description: "By using our services, you agree to adhere to the guidelines we’ve set to ensure a secure and fair environment for all users. These guidelines govern how you interact with our platform. These guidelines include maintaining the confidentiality of your account information, respecting intellectual property rights, and engaging with our platform in a lawful and ethical manner. Any violations, such as misuse of content or fraudulent activities, may lead to consequences like account suspension or termination."
        },
        {
            heading: "Legal use & policies",
            description: "Our guidelines outline how you may legally use our services, ensuring compliance with all applicable laws and regulations. By using our platform, you agree to these terms, which include respecting intellectual property rights, maintaining accurate information, and avoiding any actions that could harm the platform or other users. Failure to comply with these rules may result in restrictions, suspension, or even legal action. We enforce these policies to protect both our platform and our users, ensuring that everyone can engage in a safe and secure environment. Regular review of these terms is advised. We are committed to maintaining a platform where all users can interact securely and lawfully. To this end, we have established comprehensive guidelines that govern your use of our services. These guidelines include the proper handling of content, data security measures, and restrictions on activities such as hacking, spamming, or disseminating harmful materials. You are expected to respect the rights of others, including intellectual property and privacy rights, and to report any violations you encounter. We also have specific rules regarding the use of our content and services for commercial purposes, ensuring that such use is aligned with our policies. Failure to comply with these guidelines can lead to various consequences, from temporary restrictions to permanent bans, depending on the severity of the violation. We reserve the right to update these rules as needed, and it is your responsibility to stay informed about any changes by reviewing these terms regularly."
        },
        {
            heading: "User agreement & terms",
            description: "You agree to our terms by using our services, ensuring compliance with all rules."
        },
        {
            heading: "Terms of use",
            description: "By accessing our services, you agree to follow our terms and conditions, which govern your use and interaction with our platform. These terms outline your rights and responsibilities, including acceptable conduct, content usage, and account management. You must comply with all rules, such as not engaging in illegal activities, respecting intellectual property rights, and maintaining accurate information. Non-compliance may result in access restrictions. Our guidelines are designed to protect both users and the platform. They include rules for secure account management, proper use of content, and interactions with other users. Any violations, such as unauthorized use of materials, spamming, or harassment, can lead to severe consequences, including account suspension or legal action. You are responsible for understanding and adhering to these terms, which cover a range of topics from account security to content policies. We reserve the right to update these terms as necessary, and it is your responsibility to review them periodically. If you do not agree with the terms, you must stop using our services immediately. Continued use implies acceptance of any changes made to these terms. Our policies are designed to provide a safe, fair, and lawful environment for all users. Failure to adhere to these terms can result in penalties, including temporary or permanent suspension of your account. We take violations seriously and will take appropriate actions to address them. Always ensure you are aware of the latest version of our terms to avoid any issues with your use of our services. We may modify these terms at any time, and your continued use of our services constitutes acceptance of those modifications. It is crucial to stay informed about updates by regularly reviewing our terms and conditions. If significant changes are made, we will notify you, but it remains your responsibility to check for updates. By using our platform, you agree to these terms and conditions. Regularly review them to stay compliant and informed about any changes or updates."
        },
    ]

    return (
        <section className={styles['container']}>
            <div className={styles['heading']}>
                <p className={styles['title']}>Privacy policy</p>
                {/* <p>
                    By using our services, you agree to our guidelines and policies. These rules cover your rights and responsibilities, including payment terms, privacy, and dispute resolution. Please read carefully before proceeding with your purchase.
                </p> */}
            </div>
            <div className={styles['content']}>
                {content.map((item, index) => (
                    <>
                        <div className={styles['content-title']}>
                            {item.heading}
                        </div>
                        <div className={styles['content-para']}>
                            {item.description}
                        </div>
                    </>
                ))}
            </div>


        </section>
    )
}

export default Privacy_policy